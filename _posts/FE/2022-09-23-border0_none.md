<!-- ---
title: border:none? border:0?
categories: [FE]
comments: true
---

> border 속성을 해제할 때 none vs 0 어느쪽을 써야할까?



<br>
엄청나게 자주 쓰는 border 스타일링! 적용하기도 해제하기도 하면서 기분에 따라 border:none을 줬다가, border:0을 줬다가 내 맘대로 골라썼다. 그런데 정말 상관 없는걸까? 궁금증이 생겼다. 진짜 아무 차이 없는지 실험을 통해 알아보자 


#### border 스타일의 정체
현업에서 `border: 1px solid #ddd`와 같은 축약형 코드를 많이 사용한다. 이는 사실 다음의 속성을 가지고 있다.

```css
border: border-width || border-style || border-color
```

따라서...

`border:0`코드를 사용할 경우 첫번째인 `border-width:0`으로 먼저 렌더링되며
`border:none`코드를 사용할 경우 `border-style:none`와 같이 두 번째로 랜더링된다.

----

#### 한줄평가
동일 원리로 px을 vw로 반환하는 방법에도 적용할 수 있다 :D -->
