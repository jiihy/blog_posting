---
title: DevTools의 Script Errors 해결 일지
categories: [FE]
comments: true
---

> 포트폴리오에 빨갛게 뜨는 가슴 아픈 브라우저 에러들 해결하기


<br>
이력서 포폴 작업하다가 마주한 3-4개의 빨간색 에러들. 모두 외부 스크립트를 불러오는 과정에서 생겼다. 페이지 동작은 잘 되는데.. 흐린눈 할까?ㅠ 하다가 갑자기 들리는 마음의 소리 <br><br>
**너 업무였으면 이거 배포 공유할 수 있어?** <br><br>
네... 직업병으로 (당연함. 오류체크 필수임.) 이슈들을 해결하는 과정기를 기록한다.

### 1. JQuery 오류

```
Mixed Content: The page at 'https:/...' was loaded over HTTPS, but requested an insecure script 'http://code.jquery.com/jquery-3.3.1.min.js'. This request has been blocked; the content must be served over HTTPS.
```
<br>
stack overflow 답변 : it is expected that when you are using any secure domain using HTTPS any call to other domain will be secure calling like https, not HTTP. you just change you jquery cdn protocol to 'https` it will work – 
Saikat Hajra Mar 8, 2018 at 19:05 <br><br>

HTTPS를 사용한 사이트에 HTTP주소의 jquery를 불러와서 그렇다고 한다. <br><br>

```
<script src="http://code.jquery.com/jquery-3.5.1.min.js">
<!-- 아래 주소로 수정 -->
<script src="https://code.jquery.com/jquery-3.6.1.js">
```
수정하는김에 버전업까지 ~ 해결!


### 2. Fullpage.js 오류

```
fullPage: Fullpage.js requires a `licenseKey` option. Read about it on the following URL:
https://github.com/alvarotrigo/fullPage.js#options
```
<br>
Fullpage 라이브러리는 3버전 부터 유료로 바뀌었으며 라이센스키를 입력하지 않으면 콘솔창에 오류를 띄운다고 한다. 빨간 오류를 보고싶지 않다면 무료 버전 2.9.7를 찾아 사용해야함. 콘솔 창에 뜬 링크로 접속해보면... <br>
`licenseKey: (default null). This option is compulsory.` COMPULSORY!!! "의무!!"적이라고 강조하고 있음 흑흑 <br>

```
<script src="https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/4.0.12/fullpage.min.js">
<!-- 아래 주소로 수정 -->
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/2.9.7/jquery.fullpage.js"></script> 
```
<br>
높은 버전이 무조건 좋은 줄 알았는데 이렇게 유료 라이센스 이슈까지 있을줄은 몰랐다. 검색해보니 2.9.7버전은 fullpage github에서 파일로 다운받아 연결하는 방식을 많이 사용하던데, 나는 본가에서 7년된 거북이 윈도우 그램으로 편집기 없이 생코딩중이기 때문에 cdn링크를 연결했다. 모두 파일로 연결하길래 없을줄 알았는데 검색하니 나와서 기분좋았음><

<br><br>
다 해결된줄 알았으나 fullpage.js를 다운그레이드 하면서 새로운 에러가 생긴다.

```
fullPage: The option `scrollOverflow:true` requires the file `scrolloverflow.min.js`. Please include it before fullPage.js.
```

뭘까???? 밥 먹고 와서 해결해봐야지! 
<br><br>...<br><br>

다수의 사람들의 행동엔 이유가 있다. 파일로 연결하는 이유는 `scrillOverflow.js`가 포함되어있기 때문이었을까? 

```
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/2.9.7/vendors/scrolloverflow.min.js"></script>
```

scrillOverflow.js를 추가해주니 도합 5개의 에러가 사라졌다. 후련하다 따봉 cdn아 고마워 ~! <br><br>


+<br>
```
Fullpage.js can only be initialized once and you are doing it multiple times!<br>
```
테스트 하느라 새로고침을 계속 했더니 이 오류도 뜬다. 캐시삭제로 사라지는걸 보니 무거운 라이센스라 과부화가 걸리는 모양이다. fullpage.js는 가벼운 프로젝트에만 사용하기로 하자




참고 링크 :<br>
[fullpage github](https://github.com/alvarotrigo/fullPage.js#options)
[fullpage 구버전 cdn](https://www.cdnpkg.com/fullPage.js/2.9.7)
[stackoverflow about http jquery](https://stackoverflow.com/questions/49180591/why-jquery-is-blocked-in-https)
