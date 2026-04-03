---
name: score-aggregator
description: 腾讯表格二开打分汇总工具。从多个腾讯表格的"二开打分"sheet中提取数据，按地市汇总，计算总分，并自动设置样式（前三名标红加粗，后三名标绿加粗）。触发场景：(1) 需要从多个腾讯表格汇总打分数据 (2) 用户提到"二开打分"、"打分汇总"、"地市排名" (3) 需要按地市汇总评分数据并排名。
---

# 二开打分汇总工具

## 概述

从多个腾讯表格的"二开打分"sheet 中提取数据，按地市汇总，自动计算总分并设置排名样式。

## 使用场景

- 从多个腾讯表格汇总"二开打分"数据
- 按地市汇总评分，每个地市一行
- 计算总分并排名
- 对前三名和后三名设置醒目样式

## 工作流程

### 1. 确认源表

用户提供多个腾讯表格链接，确认需要汇总的是"二开打分"sheet。

### 2. 提取数据

使用 `tencent-sheetengine` 工具：

```bash
# 获取子表信息
mcporter call tencent-sheetengine get_sheet_info --args '{"file_url": "<表格URL>"}'

# 提取数据（CSV格式）
mcporter call tencent-sheetengine get_cell_data --args '{"file_url": "<表格URL>", "sheet_id": "<sheet_id>", "start_row": 0, "start_col": 0, "end_row": 199, "end_col": 26, "return_csv": true}'
```

### 3. 解析数据

每个源表的"二开打分"sheet 结构可能不同：

| 源表 | 主要维度 | 分数字段 |
|------|----------|----------|
| 表1 | 队伍能力提升 + 管理标准化 | 总分列（如第14列） |
| 表2 | 交付标准化 | 总分列（如第4列） |
| 表3 | 标志性提升 | 40分制总分、5分制总分 |
| 表4 | 代码核验加分 | 加分列 |

解析时：
1. 识别地市名称列（通常在第一列）
2. 找到总分/得分列
3. 按地市名称匹配合并数据

### 4. 创建汇总表

```bash
# 创建新表格
mcporter call tencent-docs manage.create_file --args '{"title": "二开打分汇总表", "file_type": "sheet"}'

# 获取新表sheet_id
mcporter call tencent-sheetengine get_sheet_info --args '{"file_url": "<新表URL>"}'

# 写入数据
mcporter call tencent-sheetengine set_range_value --args '{"file_url": "<新表URL>", "sheet_id": "<sheet_id>", "values": [...]}'
```

### 5. 计算总分

将各项分数相加，填入"总分"列。

### 6. 设置样式

根据总分排序，设置样式：

```bash
# 前三名：红色加粗
mcporter call tencent-sheetengine set_cell_style --args '{"file_url": "<URL>", "sheet_id": "<id>", "start_row": <行号>, "start_col": 7, "end_row": <行号>, "end_col": 7, "bold": true, "font_color": "FFFF0000"}'

# 后三名：绿色加粗
mcporter call tencent-sheetengine set_cell_style --args '{"file_url": "<URL>", "sheet_id": "<id>", "start_row": <行号>, "start_col": 7, "end_row": <行号>, "end_col": 7, "bold": true, "font_color": "FF008000"}'
```

## 样式颜色参考

| 排名 | 颜色 | 颜色代码 |
|------|------|----------|
| 前三名 | 红色 | FFFF0000 |
| 后三名 | 绿色 | FF008000 |

## 输出示例

| 地市 | 队伍能力提升总分 | 管理标准化分数 | 交付标准化总分 | 标志性提升(40分制) | 标志性提升(5分制) | 代码核验加分 | 总分 |
|------|------------------|----------------|----------------|---------------------|-------------------|--------------|------|
| 舟山 | 15.00 | 5.00 | 0.00 | 34.67 | 4.33 | 0 | **59.00** 🔴 |
| 丽水 | 15.00 | 3.18 | 0.00 | 36.00 | 4.50 | 0 | **58.68** 🔴 |
| ... | ... | ... | ... | ... | ... | ... | ... |
| 金华 | 10.28 | 5.00 | 0.00 | 4.00 | 0.50 | 0 | **19.78** 🟢 |

## 注意事项

1. **确认sheet名称**：不同表格的"二开打分"sheet 名称可能略有不同（如"二开打分"、"二开发打分"等）
2. **列结构差异**：不同源表的列结构可能不同，需要动态识别
3. **地市名称**：确保地市名称一致（如"杭州"、"宁波"等）
4. **数据范围**：获取数据时注意行列范围不要超出实际表格大小
