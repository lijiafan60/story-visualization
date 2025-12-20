"""
将 narratives.ts 中的数据转换为 SQL INSERT 语句
运行此脚本需要先安装依赖: pip install pyparsing
或者直接使用 Node.js 版本
"""
import json
import re

def parse_narratives_file(file_path):
    """解析 TypeScript 文件并提取数据"""
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # 提取 mockNarratives 数组的内容
    # 这是一个简化的解析，实际可能需要更复杂的解析逻辑
    # 建议使用 Node.js 或 TypeScript 来解析会更准确
    
    print("注意：此 Python 脚本需要手动解析 TypeScript 文件")
    print("建议使用 Node.js 版本的脚本 (insert_data.js)")

if __name__ == '__main__':
    parse_narratives_file('src/mock/narratives.ts')

