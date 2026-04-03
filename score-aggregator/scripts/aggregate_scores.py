#!/usr/bin/env python3
"""
二开打分数据汇总脚本

从多个腾讯表格的二开打分sheet中提取数据，按地市汇总，计算总分。
"""

import json
import subprocess
import sys
from typing import Dict, List, Optional


def run_mcporter(service: str, tool: str, args: dict) -> dict:
    """调用 mcporter 执行 MCP 工具"""
    cmd = ["mcporter", "call", service, tool, "--args", json.dumps(args, ensure_ascii=False)]
    result = subprocess.run(cmd, capture_output=True, text=True, timeout=60)
    if result.returncode != 0:
        raise RuntimeError(f"mcporter error: {result.stderr}")
    return json.loads(result.stdout)


def get_sheet_info(file_url: str) -> List[dict]:
    """获取表格的所有子表信息"""
    result = run_mcporter("tencent-sheetengine", "get_sheet_info", {"file_url": file_url})
    return result.get("sheets", [])


def get_cell_data(file_url: str, sheet_id: str, max_rows: int = 200, max_cols: int = 30) -> str:
    """获取子表数据（CSV格式）"""
    result = run_mcporter("tencent-sheetengine", "get_cell_data", {
        "file_url": file_url,
        "sheet_id": sheet_id,
        "start_row": 0,
        "start_col": 0,
        "end_row": max_rows - 1,
        "end_col": max_cols - 1,
        "return_csv": True
    })
    return result.get("csv_data", "")


def parse_csv(csv_data: str) -> List[List[str]]:
    """解析 CSV 数据"""
    lines = csv_data.strip().split("\n")
    return [line.split(",") for line in lines if line.strip()]


def find_score_sheet(sheets: List[dict], keywords: List[str] = None) -> Optional[dict]:
    """查找包含指定关键词的子表"""
    if keywords is None:
        keywords = ["二开打分", "二开发打分", "打分"]
    
    for sheet in sheets:
        sheet_name = sheet.get("sheet_name", "")
        for kw in keywords:
            if kw in sheet_name:
                return sheet
    return None


def extract_city_scores(csv_data: str, score_column: int) -> Dict[str, float]:
    """
    从 CSV 数据中提取地市分数
    
    Args:
        csv_data: CSV 格式的表格数据
        score_column: 分数所在列索引
    
    Returns:
        地市名称 -> 分数 的字典
    """
    rows = parse_csv(csv_data)
    scores = {}
    
    # 地市列表
    cities = ["杭州", "宁波", "温州", "嘉兴", "湖州", "绍兴", "金华", "衢州", "丽水", "台州", "舟山"]
    
    for row in rows:
        if len(row) > score_column:
            first_cell = row[0].strip() if row[0] else ""
            # 检查是否是地市名称
            for city in cities:
                if city in first_cell:
                    try:
                        score = float(row[score_column].strip()) if len(row) > score_column and row[score_column].strip() else 0.0
                        scores[city] = score
                    except (ValueError, IndexError):
                        pass
                    break
    
    return scores


def aggregate_scores(source_tables: List[dict]) -> Dict[str, Dict[str, float]]:
    """
    汇总多个源表的分数
    
    Args:
        source_tables: 源表配置列表，每个配置包含:
            - file_url: 表格链接
            - sheet_id: 子表ID（可选，不提供则自动查找二开打分sheet）
            - score_column: 分数列索引
            - score_name: 分数项名称
    
    Returns:
        地市 -> {分数项名称: 分数} 的字典
    """
    all_scores = {}  # city -> {score_name: score}
    
    for table in source_tables:
        file_url = table["file_url"]
        score_column = table.get("score_column", 0)
        score_name = table.get("score_name", "分数")
        sheet_id = table.get("sheet_id")
        
        # 如果没有指定 sheet_id，自动查找
        if not sheet_id:
            sheets = get_sheet_info(file_url)
            score_sheet = find_score_sheet(sheets)
            if not score_sheet:
                print(f"警告: 未找到二开打分sheet: {file_url}")
                continue
            sheet_id = score_sheet["sheet_id"]
        
        # 获取数据
        csv_data = get_cell_data(file_url, sheet_id)
        scores = extract_city_scores(csv_data, score_column)
        
        # 合并到总分数中
        for city, score in scores.items():
            if city not in all_scores:
                all_scores[city] = {}
            all_scores[city][score_name] = score
    
    return all_scores


def create_summary_table(title: str = "二开打分汇总表") -> str:
    """创建汇总表格，返回表格URL"""
    result = run_mcporter("tencent-docs", "manage.create_file", {
        "title": title,
        "file_type": "sheet"
    })
    return result.get("url", "")


def calculate_total(scores: Dict[str, float]) -> float:
    """计算总分"""
    return sum(v for v in scores.values() if isinstance(v, (int, float)))


def main():
    """示例用法"""
    # 示例配置
    source_tables = [
        {
            "file_url": "https://docs.qq.com/sheet/DQWdQdGxaVUZQc3Rm",
            "sheet_id": "wk3ygl",
            "score_column": 14,  # 总分列
            "score_name": "队伍能力提升总分"
        },
        # 添加更多源表...
    ]
    
    scores = aggregate_scores(source_tables)
    
    print("汇总结果:")
    for city, city_scores in sorted(scores.items(), key=lambda x: calculate_total(x[1]), reverse=True):
        total = calculate_total(city_scores)
        print(f"{city}: {total:.2f} - {city_scores}")


if __name__ == "__main__":
    main()
