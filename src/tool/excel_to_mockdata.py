import pandas as pd
import re
import json
from datetime import datetime, timedelta

def convert_excel_date(excel_date):
    if isinstance(excel_date, (int, float)):
        # Excel dates start from 1900-01-01
        return (datetime(1900, 1, 1) + timedelta(days=excel_date - 2)).strftime('%Y年%m月%d日')
    return str(excel_date)

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

# Load the Excel file
file_path = './可视化数据.xlsx'  # 请将此路径替换为您的实际Excel文件路径
data = pd.read_excel(file_path)

# Create a list to hold narratives
narratives = []

# Keep track of existing narrative titles for grouping
narrative_titles = set()

# Loop through the rows to build the narratives
for _, row in data.iterrows():
    title = row["name1"]  # Narrative title based on name1
    if title != "恽代英" and title != "邓中夏":
        continue
    if title not in narrative_titles:
        narrative_titles.add(title)
        narratives.append({
            "id": str(len(narratives) + 1),
            "title": title,
            "description": "",
            "imageUrl": "",
            "events": [],
            "entities": []
        })

    # Find the corresponding narrative for the current row
    current_narrative = next(n for n in narratives if n["title"] == title)

    # Process entities and events according to specified columns

    # Process Person entities
    if not pd.isna(row["name2"]):

        entity_id = len(current_narrative["entities"]) + 1

        desc = row.get("biography2", "")
        if desc == "/" or pd.isna(desc):
            desc = ""

        relation = row.get("per2per", "")
        if relation == "/" or pd.isna(relation):
            relation = ""

        entity = {
            "id": entity_id,
            "name": row["name2"],
            "desc": desc,
            "type": "EntityTypesEnum.Person",
            "relation": relation
        }

        current_narrative["entities"].append(entity)

    # Process Organization entities
    if not pd.isna(row["org1"]) and row["org1"] != "/":

        org1_des = row.get('org1_des', '')
        if org1_des == '/' or pd.isna(org1_des):
            org1_des = ''

        org1_relate = row.get('org1_relate', '')
        if org1_relate == '/' or pd.isna(org1_relate):
            org1_relate = ''

        desc_parts = []
        if org1_des:
            desc_parts.append(org1_des)
        if org1_relate:
            desc_parts.append(org1_relate)
        desc = "\n".join(desc_parts)

        entity_id = len(current_narrative["entities"]) + 1

        relation = row.get("p2org", "")
        if relation == "/" or pd.isna(relation):
            relation = ""

        entity = {
            "id": entity_id,
            "name": row["org1"],
            "desc": desc,
            "type": "EntityTypesEnum.Organization",
            "relation": relation
        }

        current_narrative["entities"].append(entity)

    # Process Document entities
    if not pd.isna(row["resource"]) and row["resource"] != "/":

        resource_relate = row.get("resource_relate", "")
        if resource_relate == '/' or pd.isna(resource_relate):
            resource_relate = ''

        desc = resource_relate

        relation = row.get("p2resource", "")
        if relation == "/" or pd.isna(relation):
            relation = ""

        entity_id = len(current_narrative["entities"]) + 1

        entity = {
            "id": entity_id,
            "name": row["resource"],
            "desc": desc,
            "type": "EntityTypesEnum.Document",
            "relation": relation
        }

        current_narrative["entities"].append(entity)

    # Process Location entities
    if not pd.isna(row["placename"]) and row["placename"] != "/":

        place_des = row.get("place_des", "")
        if place_des == '/' or pd.isna(place_des):
            place_des = ''

        per2place = row.get("per2place", "")
        if per2place == '/' or pd.isna(per2place):
            per2place = ''

        entity_id = len(current_narrative["entities"]) + 1

        entity = {
            "id": entity_id,
            "name": row["placename"],
            "desc": place_des,
            "type": "EntityTypesEnum.Location",
            "relation": per2place
        }

        current_narrative["entities"].append(entity)

    # Process Events
    if not pd.isna(row["event1"]) and row["event1"] != "/":
        start_date, end_date = None, None
        time_str = row["eve2time"]
        if pd.notna(time_str) and time_str != "/":
            time_str = convert_excel_date(time_str)
        else:
            time_str = ""

        start_year, start_month, start_day = "", "", ""
        end_year, end_month, end_day = "", "", ""
        if time_str and "至" in time_str:
            dates = time_str.split("至")
            start_year, start_month, start_day = extract_date(dates[0].strip())
            end_year, end_month, end_day = extract_date(dates[1].strip())
        elif time_str:
            start_year, start_month, start_day = extract_date(time_str)
            end_year, end_month, end_day = "", "", ""

        event1_des = row.get('event1_des', '')
        if event1_des == '/' or pd.isna(event1_des):
            event1_des = ''

        event1_relate = row.get('event1_relate', '')
        if event1_relate == '/' or pd.isna(event1_relate):
            event1_relate = ''

        per2eve = row.get('per2eve', '')
        if per2eve == '/' or pd.isna(per2eve):
            per2eve = ''

        entity_id = len(current_narrative["entities"]) + 1

        entity = {
            "id": entity_id,
            "name": row["event1"],
            "desc": event1_des,
            "type": "EntityTypesEnum.Event",
            "relation": per2eve
        }

        current_narrative["entities"].append(entity)

        event_id = len(current_narrative["events"]) + 1
        event_title = row["name1"] + row["per2eve"] + row["event1"]

        event = {
            "id": event_id,
            "title": event_title,
            "type": "Rebellion",
            "description": event1_relate,
            "startDate": {
                "year": start_year,
                "month": start_month,
                "day": start_day
            },
            "endDate": {
                "year": end_year,
                "month": end_month,
                "day": end_day
            },
            "location": "",
            "media": "",
            "relatedEntities": [row["event1"]]
        }

        current_narrative["events"].append(event)

# Now, write the data to a TypeScript file

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
            if key == 'type' and isinstance(value, str) and value.startswith('EntityTypesEnum.'):
                items.append(f"{key}: {value}")
            else:
                items.append(f"{key}: {python_to_ts(value)}")
        return '{' + ', '.join(items) + '}'
    elif isinstance(data, list):
        return '[' + ', '.join(python_to_ts(item) for item in data) + ']'
    else:
        return json.dumps(str(data), ensure_ascii=False)

output_file_path = './out.ts'
with open(output_file_path, 'w', encoding='utf-8') as f:
    # Write imports and initial code
    f.write('import { Narrative, EntityTypesEnum } from "@/mock/types";\n\n')
    f.write('export const mockNarratives: Narrative[] = ')

    # Convert the narratives data to TypeScript code
    try:
        ts_data = python_to_ts(narratives)
        f.write(ts_data + ';\n')
    except Exception as e:
        print(f"Error during conversion: {e}")