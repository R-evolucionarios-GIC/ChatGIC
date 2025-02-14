# Guia Básico de Ingestão de Dados

## 1. Objetivo

Este documento descreve o processo de ingestão de dados referentes ao Instituto de Computação (IC) da Universidade Federal da Bahia (UFBA). A ingestão de dados consiste na coleta, formatação e armazenamento das informações para posterior uso em sistemas e aplicações.

## 2. Fonte dos Dados

Os dados serão coletados a partir de fontes institucionais oficiais, documentos internos e respostas estruturadas conforme listado abaixo:

### 2.1 Perguntas e Respostas

- **O que é o IC?**\
  O Instituto de Computação da Universidade Federal da Bahia (UFBA).

- **Quando o IC foi criado?**\
  O Instituto de Computação (IC) da UFBA foi criado em 18 de junho de 2021, pela Resolução 05/2021 do Conselho Universitário da UFBA, sendo composto por 2 departamentos:

  - Departamento de Ciência da Computação (DCC)
  - Departamento de Computação Interdisciplinar (DCI)

- **Quais cursos são oferecidos pelo IC-UFBA?**\
  O IC-UFBA atende aos seguintes cursos de graduação:

  - Bacharelado em Ciência da Computação (BCC), criado em 1969.
  - Bacharelado em Sistemas de Informação (BSI), criado em 2010.
  - Licenciatura em Computação, criada em 2010.
  - Bacharelado em Engenharia da Computação, em parceria com o Departamento de Engenharia Elétrica e de Computação da UFBA.

- **Quais cursos de pós-graduação são oferecidos pelo IC?**\
  O IC-UFBA abriga dois programas de pós-graduação, ambos com mestrado e doutorado:

  - Programa de Pós-Graduação em Ciência da Computação (PGCOMP), com Conceito 5 na CAPES.
  - Programa de Pós-Graduação em Mecatrônica (PPGM), em parceria com o Departamento de Engenharia Mecânica da UFBA.

- **Existe atividade de pesquisa no IC? Quais áreas?**\
  Sim, as atividades de pesquisa estão vinculadas a laboratórios e grupos de pesquisa, abrangendo áreas como:

  - Algoritmos Distribuídos
  - Banco de Dados
  - Engenharia de Software
  - Lógica e Teoria da Computação
  - Métodos Formais
  - Processamento de Imagens
  - Redes de Computadores
  - Sistemas Distribuídos
  - Sistemas Hipermídia
  - Tolerância a Falhas
  - Visão Computacional
  - Entre outras.

## 3. Formato e Encoding

Para garantir compatibilidade e integridade das informações, os dados serão armazenados no formato **JSON**, com encoding **UTF-8**.

### 3.1 Exemplo de Estrutura JSON

```json
{
  "instituto": "Instituto de Computação da UFBA",
  "data_criacao": "2021-06-18",
  "departamentos": [
    "Departamento de Ciência da Computação (DCC)",
    "Departamento de Computação Interdisciplinar (DCI)"
  ],
  "cursos_graduacao": [
    {"nome": "Bacharelado em Ciência da Computação", "ano_criacao": 1969},
    {"nome": "Bacharelado em Sistemas de Informação", "ano_criacao": 2010},
    {"nome": "Licenciatura em Computação", "ano_criacao": 2010},
    {"nome": "Bacharelado em Engenharia da Computação", "parceria": "Departamento de Engenharia Elétrica e de Computação da UFBA"}
  ],
  "cursos_pos_graduacao": [
    {"nome": "Programa de Pós-Graduação em Ciência da Computação", "conceito_CAPES": 5},
    {"nome": "Programa de Pós-Graduação em Mecatrônica", "parceria": "Departamento de Engenharia Mecânica da UFBA"}
  ],
  "pesquisa": {
    "grupos": "Laboratórios e grupos de pesquisa",
    "areas": [
      "Algoritmos Distribuídos", "Banco de Dados", "Engenharia de Software", "Lógica e Teoria da Computação",
      "Métodos Formais", "Processamento de Imagens", "Redes de Computadores", "Sistemas Distribuídos",
      "Sistemas Hipermídia", "Tolerância a Falhas", "Visão Computacional"
    ]
  }
}
```

## 4. Processo de Ingestão

### 4.1 Coleta de Dados

Os dados serão extraídos de fontes oficiais e revisados para garantir precisão. Caso necessário, novas fontes poderão ser incluídas.

### 4.2 Transformação e Normalização

Os dados coletados serão convertidos para o formato padronizado JSON, garantindo:

- Correção de formatação
- Estrutura hierárquica consistente
- Encoding UTF-8

### 4.3 Armazenamento

Os dados serão armazenados em:

- Banco de dados (PostgreSQL ou MongoDB, conforme necessidade)
- Arquivos JSON para backup e versionamento

### 4.4 Atualização e Manutenção

- Os dados serão revisados periodicamente para refletir mudanças institucionais.
- Novas informações serão adicionadas conforme necessidade.

