import argparse
import io
import json
import os
from typing import Dict

import pandas as pd
import requests


URLS = {
    "internacoes": "https://tabnet.datasus.gov.br/cgi/tabcgi.exe?sih/cnv/qiuf.def",
    "leitos": "https://tabnet.datasus.gov.br/cgi/tabcgi.exe?cnes/cnv/leiuteuf.def",
}


def baixar_dados(tipo: str, ano_mes: str) -> Dict[str, str]:
    if tipo not in URLS:
        raise ValueError("Tipo deve ser 'internacoes' ou 'leitos'")

    params = {
        "format": "csv",
        "ano_mes": ano_mes.replace("-", ""),
    }
    resp = requests.get(URLS[tipo], params=params, timeout=60)
    resp.raise_for_status()
    return resp.text


def filtrar_colunas(df: pd.DataFrame) -> pd.DataFrame:
    possiveis = {
        "data": ["data", "competencia"],
        "regiao": ["regiao", "uf", "municipio"],
        "hospital": ["hospital", "estabelecimento"],
        "quantidade": ["quantidade", "qt_leitos", "qt_internacoes"],
    }
    colunas = []
    for chaves in possiveis.values():
        for c in chaves:
            if c in df.columns:
                colunas.append(c)
                break
    return df[colunas]


def salvar_csv(df: pd.DataFrame, tipo: str, ano_mes: str) -> str:
    pasta = os.path.join("backend", "dados")
    os.makedirs(pasta, exist_ok=True)
    nome = f"{tipo}_{ano_mes}.csv"
    caminho = os.path.join(pasta, nome)
    df.to_csv(caminho, index=False)
    return nome


def main() -> None:
    parser = argparse.ArgumentParser(description="Extrai dados do DATASUS")
    parser.add_argument("tipo", choices=["internacoes", "leitos"])
    parser.add_argument("ano_mes", help="Formato YYYY-MM")
    args = parser.parse_args()

    csv_text = baixar_dados(args.tipo, args.ano_mes)
    df = pd.read_csv(io.StringIO(csv_text), sep=";")
    df_filtrado = filtrar_colunas(df)
    arquivo = salvar_csv(df_filtrado, args.tipo, args.ano_mes)
    resultado = {"arquivo": arquivo, "linhas": len(df_filtrado)}
    print(json.dumps(resultado, ensure_ascii=False))


if __name__ == "__main__":
    main()
