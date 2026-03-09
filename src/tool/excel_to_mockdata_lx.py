
import pandas as pd
import json
import re
from datetime import datetime


def load_location_coords(file):
    df = pd.read_excel(file)
    location_map = {}

    for _, row in df.iterrows():
        name = str(row.get("地名", "")).strip()
        if not name or name.lower() == "nan":
            continue

        lat = row.get("纬度", None)
        lng = row.get("经度", None)

        if pd.isna(lat) or pd.isna(lng):
            continue

        try:
            location_map[name] = {"lat": float(lat), "lng": float(lng)}
        except (TypeError, ValueError):
            # 如果数据无法转换为 float，则忽略该行
            continue

    return location_map


def extract_date(time_str):
    year, month, day = "", "", ""

    # 匹配年份
    year_match = re.search(r'(\d{4})年', time_str)
    if year_match:
        year = year_match.group(1)

        # 匹配月份
    month_match = re.search(r'(\d{1,2})月', time_str)
    if month_match:
        month = month_match.group(1).zfill(2)  # 确保月份是两位数

    # 匹配日期
    day_match = re.search(r'(\d{1,2})日', time_str)
    if day_match:
        day = day_match.group(1).zfill(2)  # 确保日期是两位数

    # 处理特殊情况，如"春"、"夏"、"秋"、"冬"
    if '春' in time_str:
        month = "03"  # 假设春天是3月
    elif '夏' in time_str:
        month = "06"  # 假设夏天是6月
    elif '秋' in time_str:
        month = "09"  # 假设秋天是9月
    elif '冬' in time_str:
        month = "12"  # 假设冬天是12月

    return year, month, day

def generate_narrative(file):
    # 读取所有 sheet，返回的是 {sheet_name: DataFrame} 的字典
    sheets = pd.read_excel(file, sheet_name=None)
    location_coords = load_location_coords("./src/tool/地点坐标.xlsx")

    entities = {}
    events = []
    entity_id = 1

    for sheet_name, df in sheets.items():
        print(f"正在处理工作表: {sheet_name}")

        for _, row in df.iterrows():
            print(f"正在处理工作表 {sheet_name} 第{_}行")
            event_type = row['事件类型']
            event = {
                "id": str(len(events) + 1),
                "title": str(row['标题']),
                "type": event_type,
                "description": "",
                "startDate": {"year": "", "month": "", "day": ""},
                "endDate": {"year": "", "month": "", "day": ""},
                "location": "",
                "media": "",
                "relatedEntities": []
            }

            for i in range(1, 3):  # 假设最多有2个实体
                if pd.isna(row[f'实体{i}']):
                    continue
                name = row[f'实体{i}']
                label = row[f'标签{i}']
                if name not in entities:
                    entities[name] = {
                        "id": str(entity_id),
                        "name": name,
                        "desc": "",
                        "type": label,
                        "relation": "",
                    }
                    entity_id += 1
                event["relatedEntities"].append(entities[name]["name"])

            # 处理日期
            year, month, day = "", "", ""
            year, month, day = extract_date(str(row['时间']))
            event["startDate"] = {"year": year, "month": month, "day": day}

            # 处理地点（从地点坐标表中匹配经纬度，未匹配到则为 0,0）
            if pd.notna(row['地点']):
                location_name = str(row['地点']).strip()
                print(f"地点: {location_name}")

                coords = location_coords.get(location_name)
                if coords:
                    event["location"] = {
                        "name": location_name,
                        "lat": coords["lat"],
                        "lng": coords["lng"],
                    }
                else:
                    event["location"] = {"name": location_name, "lat": 0, "lng": 0}

            # 处理描述
            event["description"] = str(row['原文']) if pd.notna(row['原文']) else ""

            events.append(event)

    narrative = {
        "id": "1",
        "title": "雨花英烈",
        "entities": list(entities.values()),
        "events": events,
        "description": "",
        "imageUrl": "",
    }

    return narrative

def python_to_ts(data):
    if isinstance(data, str):
        return json.dumps(data, ensure_ascii=False)
    elif isinstance(data, (int, float)):
        return str(data)
    elif data is None:
        return 'null'
    elif isinstance(data, dict):
        items = []
        for key, value in data.items():
            # 对于实体和事件的 type，如果是枚举形式（例如 EntityTypesEnum.X 或 EventTypesEnum.Y），则不加引号直接输出
            if (
                key == 'type'
                and isinstance(value, str)
                and (value.startswith('EntityTypesEnum.') or value.startswith('EventTypesEnum.'))
            ):
                items.append(f"{key}: {value}")
            else:
                items.append(f"{key}: {python_to_ts(value)}")
        return '{' + ', '.join(items) + '}'
    elif isinstance(data, list):
        return '[' + ', '.join(python_to_ts(item) for item in data) + ']'
    else:
        return json.dumps(str(data), ensure_ascii=False)

# 生成叙事数据
excel_file = "./src/tool/事件与逮捕时间地点汇总.xlsx"
# 目前从一个 Excel 构造一个叙事对象，这里统一包装成数组，符合 Narrative[] 类型
narratives_data = [generate_narrative(excel_file)]

# 将输出写入文件
with open("./src/tool/out_sjydbsjddhz.ts", "w", encoding="utf-8") as f:
    # 写入 TypeScript 头部
    f.write('import { Narrative, EntityTypesEnum, EventTypesEnum } from "@/mock/types";\n\n')
    f.write('export const mockNarratives: Narrative[] = ')

    # 将 Python 数据结构转换为 TypeScript 代码
    try:
        ts_data = python_to_ts(narratives_data)
        f.write(ts_data + ';\n')
    except Exception as e:
        print(f"Error during conversion: {e}")
