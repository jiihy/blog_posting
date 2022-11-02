---
title: CSS Grid
categories: [FE]
comments: true
---

> Grid를 이용하여 복합 레이어 배치하기


#### Grid 속성 정리

Flex가 1차원적 배치라면 Grid는 2차원적인 배치 <br><br>
grid_container에 display:grid로 선언<br>
grid-template-coloumns: 열의 배치 ⬇️ ⬇️ ⬇️ 몇개 크기 얼마씩?<br> 
grid-template-coloumns: 행의 배치 ➡️ 몇 줄 ?<br>
grid-gap: grid사이의 간격

```scss
 .grid_container {
    display:grid;
    grid-template-coloumns: repeat(3, 1fr); <!--  3개를 1배 비율로 배분(반응형) -->
    <!-- = grid-template-coloumns: 1fr 1fr 1fr -->
    grid-template-rows: minmax(335px,auto); <!-- 아이템이 없을 경우 최소 높이는 335px이지만 늘어날 경우 내용만큼 크기 늘리기 -->
    grid-gap: 20px;
 }
 
```

grid-column: 시작점 / 끝점; <br>
grid-row: 시작점 / 끝점 <br>
시작점을 거꾸로 카운트하려면 마이너스(-)사용

```scss
 .grid_item {
    grid-column: 2 / 4; 
    grid-row: 1 / span 2; <!-- 특정 아이템의 첫번째 줄부터 2개의 셀을 차지할거야 -->
    <!-- = grid-row: 1 / 3 (첫 번째 라인부터 세 번째 라인까지를 합칠거야  -->
 }
 
```

## Grid area의 놀라운 기능!


```scss
 .grid_container {
    grid-template-areas:
    'a a a'
    'b c c'
    'b d g'
    'e f g'
 }
 
 .grid_item:first-child{
    grid-area: a;
 }
 ...
```

<p class="codepen" data-height="300" data-default-tab="css,result" data-slug-hash="rNKxXYM" data-user="jiihy" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/jiihy/pen/rNKxXYM">
  grid-template-area/grid-area</a> by rosie (<a href="https://codepen.io/jiihy">@jiihy</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

