---
title: 리스트 빈 태그 없이 유연한 스타일링 입히기
categories: [markup]
comments: true
---

> 오늘 만들어볼 리스트

<img src="../assets/img/markup1_1.png" alt="리스트에 테두리 스타일을 적용한 사진">


<br>
콘텐츠 리스트 수정 업무를 하면서 스타일링은 고정해두고 빈 li tag를 채워놓는 구조를 많이 볼 수 있었다. 좋은 코드는 아니지만, 리스트 개수에 따라 scss를 수정하는 건 여러 작업자의 리소스가 소모되기 때문에 효율적인 빈 태그를 사용하는 것 같았다. 아래 예시를 보면 코드 자체도 깔끔하지 못하고, validator에게 혼나고 싶지 않다면 몇 번씩 검토가 필요하다.


#### 바람직하지 않은 코드 1
신규 콘텐츠 추가 시 기존 li를 밀듯이 이동시켜서 태그를 제대로 안 닫은 경험이 많다.😅 <br>내부 구조가 복잡하다면 간단한 추가 건이어도 작업 시간이 꽤 걸린다.
```html
<ul>
   <li>TEXT</li>
   <li>TEXT</li>
   <li>TEXT</li>
</ul>
<ul>
   <li>TEXT</li>
   <li>TEXT</li>
   <li>TEXT</li>
</ul>
```

#### 바람직하지 않은 코드 2
영역을 위해 불필요한 빈 태그를 담아둔다. 가장 많이 사용된 구조이며 li의 개수를 하나하나 세서 유지시켜야 한다.
```html
<ul>
   <li>TEXT</li>
   <li>TEXT</li>
   <li>TEXT</li>
   <li>TEXT</li>
   <li></li>
   <li></li>
</ul>
```

----
<br>
이런저런 불필요한 사항들 때문에 다음 작업자들의 리소스를 줄이기 위해 초기 스타일링을 세팅하기로 했다. 도대체 어디에 쓰이는 건가 궁금했던 :nth-last-child() 속성을 이번에 활용해 볼 수 있었다!

#### 1. 기본 보더 스타일 지정
가장 먼저 가로 십자선을 긋기 위해 .list_item에 border-bottom 속성을 기본으로 준다. 그 다음 십자선을 세로로 나누기 위해 홀수 리스트에 border-right 속성을 넣는다. 이렇게 하면 아래와 같이 보인다. 
```scss
.list_item {
   border-bottom: 1px solid #fff;
   &:nth-child(odd) {
      border-right: 1px solid #fff;
   }
}
```

<img src="../assets/img/markup1_2.png" alt="기본 보더 스타일을 입힌 표">

#### 2. 리스트가 홀수개일 경우
이때 nth-last-child의 등장! 리스트 마지막 줄에 위치하는 홀수 아이템의 border-bottom을 없애준다.
```scss
.list_item {
   border-bottom: 1px solid #fff;
   &:nth-child(odd) {
      border-right: 1px solid #fff;
      // 홀수 li
      &:nth-last-child(1){
         border-bottom: none;
      }
   }
}
```

<img src="../assets/img/markup1_3.png" alt="기본 보더 스타일을 입힌 표">

#### 3. 리스트가 짝수개일 경우
마지막 줄에 위치하는 짝수 아이템의 border-bottom을 없애고, 마지막 줄에 위치하는 홀수 아이템(뒤에서 두 번째)의 border-bottom도 없애기!
```scss
.list_item {
   border-bottom: 1px solid #fff;
   &:nth-child(odd) {
      border-right: 1px solid #fff;
      // 홀수 li
      &:nth-last-child(1) {
         border-bottom: none;
      }
   }
   // 짝수 li
   &:nth-child(even):nth-last-child(1) {
      border-bottom: none;
   }
   &:nth-child(odd):nth-last-child(2) {
      border-bottom: none;
   }
}
```

<img src="../assets/img/markup1_1.png" alt="리스트에 테두리 스타일을 적용한 사진">

<br>
scss를 예쁘게 정리한 완성본

```scss
.list_item {
   border-bottom: 1px solid #fff;
   &:nth-child(odd) {
      border-right: 1px solid #fff;
   }
   &:nth-child(odd):nth-last-child(1),
   &:nth-child(odd):nth-last-child(2),
   &:nth-child(even):nth-last-child(1) {
      border-bottom: none;
   }
}
```
<img src="../assets/img/markup1_4.gif" alt="리스트에 테두리 스타일을 적용한 사진">
빈 태그로부터 자유로운 마크업 완성 -*

----

#### 한줄평가
리스트에 padding이나 border 스타일을 줄 때 nth-child(n) 속성을 습관적으로 사용했었는데, 아이템 개수에 따라 유동적이지 못하여 아쉬움이 있었다. 이제는 nth-last-child() 속성을 통해 빈 태그와 고정된 nth 값으로부터 자유로워졌다!

### `- 참고 CODE PEN` 
<p class="codepen" data-height="300" data-default-tab="html" data-slug-hash="JjvjGpv" data-editable="true" data-user="jiihy" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/jiihy/pen/JjvjGpv">
  cross stripes list style with no empty tag</a> by rosie (<a href="https://codepen.io/jiihy">@jiihy</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>
