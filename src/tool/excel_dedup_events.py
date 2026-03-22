import argparse
from pathlib import Path
from typing import Dict, List

import pandas as pd


COLS: List[str] = [
    "文献",
    "标题",
    "原文",
    "事件类型",
    "标签1",
    "实体1",
    "关系1",
    "标签2",
    "实体2",
    "时间",
    "地点",
]


def _normalize_str_df(df: pd.DataFrame) -> pd.DataFrame:
    out = df.copy()
    for c in out.columns:
        out[c] = out[c].astype("string")
    return out.fillna("").replace({"<NA>": ""})


def _ensure_columns(df: pd.DataFrame, cols: List[str]) -> pd.DataFrame:
    out = df.copy()
    for c in cols:
        if c not in out.columns:
            out[c] = ""
    return out[cols]


def load_all_sheets(path: Path) -> pd.DataFrame:
    sheets: Dict[str, pd.DataFrame] = pd.read_excel(path, sheet_name=None, dtype="string")
    frames: List[pd.DataFrame] = []
    for sheet_name, df in sheets.items():
        df = _normalize_str_df(df)
        picked = _ensure_columns(df, COLS)
        picked.insert(0, "_sheet", sheet_name)
        frames.append(picked)
    if not frames:
        return pd.DataFrame(columns=["_sheet", *COLS])
    return pd.concat(frames, ignore_index=True)


def keep_first_n_per_key(df: pd.DataFrame, by: List[str], n: int) -> pd.DataFrame:
    tmp = df.copy()
    for c in by:
        if c not in tmp.columns:
            tmp[c] = ""
        tmp[c] = tmp[c].astype("string").fillna("").replace({"<NA>": ""})
    mask = tmp.groupby(by, dropna=False).cumcount() < n
    return df.loc[mask].copy()


def write_excel(df: pd.DataFrame, out_path: Path) -> None:
    out_path.parent.mkdir(parents=True, exist_ok=True)
    with pd.ExcelWriter(out_path, engine="openpyxl") as writer:
        df.to_excel(writer, index=False, sheet_name="data")


def main() -> int:
    parser = argparse.ArgumentParser(
        description="对“事件与逮捕时间地点汇总.xlsx”做去重筛选并输出两个新文件。"
    )
    parser.add_argument(
        "--input",
        type=Path,
        default=Path("./src/tool/事件与逮捕时间地点汇总.xlsx"),
        help="输入 xlsx 路径（默认：./src/tool/事件与逮捕时间地点汇总.xlsx）",
    )
    parser.add_argument(
        "--out-dir",
        type=Path,
        default=Path("./src/tool"),
        help="输出目录（默认：./src/tool）",
    )
    args = parser.parse_args()

    inp: Path = args.input
    out_dir: Path = args.out_dir

    if not inp.exists():
        raise FileNotFoundError(f"找不到输入文件：{inp}")

    df0 = load_all_sheets(inp)
    print(f"读取完成：{len(df0)} 行（所有 sheet 合并后）")

    # 1) “原文”相同：保留 2 行
    df1 = keep_first_n_per_key(df0, by=["原文"], n=2)
    print(f"按“原文”去重后：{len(df1)} 行")

    # 2) “时间+地点”都相同：保留 2 行
    df2 = keep_first_n_per_key(df1, by=["时间", "地点"], n=2)
    print(f"按“时间+地点”去重后：{len(df2)} 行")

    out1 = out_dir / "事件与逮捕时间地点汇总_del_1.xlsx"
    write_excel(df2, out1)
    print(f"已输出：{out1}")

    # 3) 二次筛选：同一个“地点”只保留 1 行
    df3 = keep_first_n_per_key(df2, by=["地点"], n=1)
    print(f"按“地点”二次筛选后：{len(df3)} 行")

    out2 = out_dir / "事件与逮捕时间地点汇总_del_地点.xlsx"
    write_excel(df3, out2)
    print(f"已输出：{out2}")

    return 0


if __name__ == "__main__":
    raise SystemExit(main())

