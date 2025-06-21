import glob
import os
import pandas as pd
import unicodedata
import re
from datetime import datetime


def snake_case(name: str) -> str:
    name = unicodedata.normalize("NFKD", name)
    name = "".join(c for c in name if not unicodedata.combining(c))
    name = name.strip().lower()
    name = re.sub(r"[^a-z0-9]+", "_", name)
    return name.strip("_")


def clean_numeric(series: pd.Series) -> pd.Series:
    if series.dtype == object:
        cleaned = series.str.replace(".", "", regex=False).str.replace(",", ".", regex=False)
        return pd.to_numeric(cleaned, errors="ignore")
    return series


def parse_date(value: str) -> str:
    if pd.isna(value):
        return ""
    s = str(value)
    m = re.search(r"(\d{4})[-/]?(\d{2})", s)
    if m:
        return f"{m.group(1)}-{m.group(2)}-01"
    return s


def process_file(path: str) -> None:
    df = pd.read_csv(path)
    df = df.dropna(axis=1, how="all")

    df.columns = [snake_case(c) for c in df.columns]

    if "competencia" in df.columns and "data" not in df.columns:
        df.rename(columns={"competencia": "data"}, inplace=True)

    if "data" in df.columns:
        df["data"] = df["data"].apply(parse_date)
        df["ano"] = df["data"].str[0:4]
        df["mes"] = df["data"].str[5:7]
    
    for col in df.columns:
        df[col] = clean_numeric(df[col])

    base = os.path.basename(path)
    new_path = os.path.join(os.path.dirname(path), f"pb_{base}")
    df.to_csv(new_path, index=False)
    print(f"Gerado {new_path}")


def main() -> None:
    for path in glob.glob(os.path.join("backend", "dados", "*.csv")):
        if os.path.basename(path).startswith("pb_"):
            continue
        process_file(path)


if __name__ == "__main__":
    main()
