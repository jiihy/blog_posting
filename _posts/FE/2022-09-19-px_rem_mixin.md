---
title: scss mixin을 사용하여 px을 rem으로 변환하기
categories: [FE]
comments: true
---

> 매번 계산하기 어려운 rem을 mixin으로 빠르게 적용해보자!



<br>
px로 짜여진 UI는 사용자가 자유롭게 설정할 수 없다. 크기를 고정하는 순간 모든 브라우저의 설정을 덮어쓰기 때문이다. 대부분의 업무는 컨텐츠를 읽고 확인하는데 큰 이슈가 없다면 px로 작업하여 넘겨버린다. 그러다 아버지가 이용하는 해괴망측하게 확대된 페이지를 보고, 이 딸은 더 이상 흐린눈 할 수 없게 됐다. 디자이너가 전달해주는 px을 고민없이 rem으로 바꾸는 방법을 잊지 않기 위해 정리해두자.


#### 방법 1
기본 폰트 설정에 따라 rem 값이 달라지니 조절이 필요하다.

```scss
$browser-context : 16px; // 브라우저 기본 폰트

@function rem($pixels, $context: $browser-context) {
    @return #{$pixels/$context}rem;
}

.text_px {
    font-size: 32px;
}

.text_rem {
    font-size: rem(32px);
}
```

### `- CODE PEN` 
<p class="codepen" data-height="300" data-default-tab="html,result" data-slug-hash="NWMzBBy" data-user="jiihy" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/jiihy/pen/NWMzBBy">
  Untitled</a> by rosie (<a href="https://codepen.io/jiihy">@jiihy</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

#### 방법 2
```scss
$base-rem-size : 16px;

/* 단위 제거 관련한 부분을 쓰고 싶지 않다면 
base-rem-sixe:16으로 px 를 쓰지 않으면 됨 */
@function remove-unit($value) {
    // 단위를 개선할 값을 remove-unt()함수에 전달하면 단위가 제거된 값 반환
    @return ($value/($value * 0 + 1));
}

@function rem($px, $base:$base-rem-size){
    @return (remove-unit($px / $base)) * 1rem;
}

.text_px {
    font-size: 32px;
    color: orange;
}

.text_rem {
    font-size: rem(32px);
    color: green;
}
```

### `- CODE PEN` 
<p class="codepen" data-height="300" data-default-tab="html,result" data-slug-hash="qBYKyvO" data-user="jiihy" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/jiihy/pen/qBYKyvO">
  mixin_px&amp;rem2</a> by rosie (<a href="https://codepen.io/jiihy">@jiihy</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

----

#### 한줄평가
동일 원리로 px을 vw로 반환하는 방법에도 적용할 수 있다 :D
