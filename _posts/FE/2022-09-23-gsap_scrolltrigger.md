---
title: JavaScript- Gsap 설치와 ScrollTrigger 기법
categories: [FE]
comments: true
---

> 1년차 업무 인생 가장 위기였던 Gsap Animation..!



<br>
네이버 SME 광고 캠페인 업무를 담당하게 되면서, 새로 개편되는 디자인 요구에 따라 Gsap 애니메이션 속성을 처음으로 사용해보게 됐다. Slick보다 정보가 없어서 처음에는 접근이 어려웠지만 알면 알수록 깔끔하고 쉬운 것 같다.


#### Gsap(Green Sock Animation Platform) 이란?

`Green Sock`에서 만든 자바스크립트 애니메이션 라이브러리! 플래시에서 자주 사용하던 트윈 라이브러리인 TweenMax, TweenLite 개발자가 만들었다고 한다.
[공식홈페이지](https://greensock.com/docs/v3)에 설명이 정말 잘 정리돼있다.
CSS나 제이쿼리보다 더 복잡하고 정교한 애니메이션 구현이 가능하다. 제이쿼리보다 20배 이상 좋은 퍼포먼스로 최근 프론트엔드 개발자들에게 각광받는 라이브러리!

#### Setting

```html

 <script src="https://code.jquery.com/jquery-2.2.4.js"></script> <!-- 1. 제이쿼리 cdn 경로 -->
 <script src="//cdnjs.cloudflare.com/ajax/libs/gsap/2.1.3/TweenMax.min.js"></script><!-- 2. GSAP TweenMax 플러그인 cdn 경로 -->
 <script src="//cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/plugins/animation.gsap.js"></script> <!-- 3. GSAP 플러그인 cdn 경로 -->

```

스크립트 순서대로 cdn 경로를 입력해준다. (참고: TweenMax란, Jack Doyle 라는 분이 만든 공개 라이브러리)


#### 한줄평가
어렵다 그러나 쉽다..! 이제 리액트에도 적용해보자 홧팅



참고 링크 : 
[gsap해석](https://byseop.netlify.app/gsap/)
[tween시리즈 문법](http://302chanwoo.com/lab/tween/)
