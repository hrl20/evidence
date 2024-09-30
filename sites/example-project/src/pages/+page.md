---
title: Welcome
queries:
  - duckdb_databases: duckdb_databases.sql
  - duckdb_tables: duckdb_tables.sql
  - duckdb_table: duckdb_table.sql
---

<DataTable data={duckdb_databases}/>

<Dropdown
    name=selected_table_name
    data={duckdb_tables}
    value=table_full_name
    title="Select a table"
/>

<DataTable data={duckdb_table}/>
