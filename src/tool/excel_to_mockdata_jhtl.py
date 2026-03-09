
import pandas as pd
import json
import re
from datetime import datetime

# 定义坐标示例（应该替换为实际坐标）
coordinates = {
    '郑州': {'name': '郑州', 'lat': 34.75798, 'lng': 113.66541},
    '洛阳': {'name': '洛阳', 'lat': 34.61812, 'lng': 112.45402},
    '武汉': {'name': '武汉', 'lat': 30.58245, 'lng': 114.26303},
    '河南': {'name': '河南', 'lat': 33.88256, 'lng': 113.61457},
}

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

def parse_lng_lat(coord_str):
    """从如 '121.49,31.27' 的字符串中解析经纬度。
    默认顺序为 'lng,lat'，返回 (lat, lng)。解析失败返回 (None, None)。"""
    if pd.isna(coord_str):
        return None, None
    try:
        if not isinstance(coord_str, str):
            coord_str = str(coord_str)
        # 统一分隔符并去除空白
        coord_str = coord_str.replace('，', ',').strip()
        # 提取两个数字（支持正负与小数）
        numbers = re.findall(r'[-+]?\d+(?:\.\d+)?', coord_str)
        if len(numbers) >= 2:
            lng = float(numbers[0])
            lat = float(numbers[1])
            return lat, lng
    except Exception:
        pass
    return None, None

def generate_narrative(excel_file, sheet):
    df = pd.read_excel(excel_file, sheet_name=sheet)

    entities = {}
    events = []
    entity_id = 1

    for _, row in df.iterrows():
        # if _ >= 1758:
        #     break
        event = {
            "id": str(len(events) + 1),
            "title": str(row['标题']),
            "type": "",
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
        year, month, day = extract_date(str(row['时间']))
        event["startDate"] = {"year": year, "month": month, "day": day}

        # 处理地点（这里使用虚拟坐标）
        if pd.notna(row['详细地点G']) :
            lat, lng = parse_lng_lat(row['坐标'])
            event["location"] = {
                "name": str(row['详细地点G']),
                "lat": lat,
                "lng": lng
            }
            print(event["location"])
            # event["location"] = coordinates[str(row['地点G'])]

        # 处理描述
        event["description"] = str(row['原文']) if pd.notna(row['原文']) else ""

        event["type"] = row['类别'] if pd.notna(row['类别']) else ""

        events.append(event)

    narrative = {
        "id": "6",
        "title": "鲁迅_拜访",
        "description": "",
        "imageUrl": "/images/鲁迅.jpg",
        "events": events,
        "entities": list(entities.values()),
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
excel_file = "鲁迅1.xlsx"
sheet = "拜访"
narrative_data = generate_narrative(excel_file,sheet)

# 将输出写入文件
with open("out_lx_bf.ts", "w", encoding="utf-8") as f:
    # Write imports and initial code
    # f.write('import { Narrative, EntityTypesEnum } from "@/mock/types";\n\n')
    # f.write('export const mockNarratives: Narrative[] = ')

    # Convert the narratives data to TypeScript code
    try:
        ts_data = python_to_ts(narrative_data)

        f.write(ts_data)
        # f.write(ts_data + ';\n')
    except Exception as e:
        print(f"Error during conversion: {e}")
