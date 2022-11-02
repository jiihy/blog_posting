---
title: Vue 초기세팅과 페이지 만들기
categories: [FE]
comments: true
---

> Vue를 이용하여 포트폴리오를 만들어보자!

지원하고 싶은 회사가 Vue를 쓰길래 무작정 포트폴리오를 만드는 여정을 기록했다. <br>
React는 몇 번 공부하며 만져봤지만, Vue는 아예 처음이다. 듣기로는 React가 어려워서 개발을 포기한 개발자들의 구세주라던데.. 대충 찾아보기로 html, script, css등을 직관적으로 짤 수 있어서 일반 퍼블리싱과 리액트의 장점을 합친 느낌이었다. 과연 어떨지 ? 설치부터 스타트! 

#### 초기 세팅

1. node를 최신 버전으로 설치한다

```
nvm install 18.12.0
nvm use 18
```

2. Vue 설치

```
npm i -g @vue/cli
```

3. Vue 익스텐션 추가
 - Vetur
 - HTML CSS Support
 - Vue 3 Snippets

4. SCSS 사용을 위한 모듈 설치

```
npm i --save-dev sass-loader node-sass
```

5. Vue 프로젝트 생성

```
vue create 프로젝트명
```

6. 프로젝트 폴더 오픈하고 실행

```
npm run serve
```
