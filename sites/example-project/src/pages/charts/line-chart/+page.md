---
title: Line Chart
queries:
  - ducks: ducks.sql
---

<LineChart 
    data={ducks}
    x=beak_width
    y=beak_depth 
    yAxisTitle="Beak depth vs beak width"
    yFmt=cm
    xFmt='cm'
/>
