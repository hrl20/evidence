---
title: Line Chart
queries:
  - orders_by_month: orders_by_month.sql
  - ducks: ducks.sql
---

<LineChart 
    data={orders_by_month}
    x=month
    y=sales_usd0k 
    yAxisTitle="Sales per Month"
    yFmt=eur
    xFmt='mmm d'
/>

<LineChart 
    data={ducks}
    x=beak_width
    y=beak_depth 
    yAxisTitle="Beak depth vs beak width"
    yFmt=cm
    xFmt='cm'
/>
