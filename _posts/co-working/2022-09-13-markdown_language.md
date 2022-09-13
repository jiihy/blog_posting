---
title: 깃헙 커밋 시 유용한 마크다운 언어
categories: [co-working]
comments: true
---

> 협업 이슈 페이지에서 **일잘러**되는 법

<br>
커밋 메시지 작성만 30분이 걸리던 수습 시절이 생각난다. 선임들이 올려둔 걸 복붙해서 내용만 바꿔보내고, 분류나 강조가 필요해도 어떻게 쓰는 건지 몰라서 손도 못 대곤 했다. 어리바리 신입사원 멈춰! 이제는 깃헙에서 '마크다운' 언어를 쓴다는 걸 안다. 

## MarkDown Language
텍스트 기반의 마크업 언어로, 간결하고 용량이 적으며 HTML 변환이 가능하다. 앞서 언급했듯 github 협업 도구에서 많이 사용되고 있고 이외에도 지원하는 프로그램과 플랫폼이 다양하다. 단점이라면 표준이 없고 모든 HTML 마크업을 대신할 수 없다는 것

----

`+ 내가 자주쓰는 커밋메시지 :)`

안녕하세요. XXX팀 OOO입니다.<br>
마크업 작업 완료되어 산출물 전달드리오니 아래 링크에서 확인 부탁드립니다.
#### 업무명 1
 - [저장소](#)
 - [산출물](#)

----

#### 업무명 2
 - [저장소](#)
 - [산출물](#)

<br>
더 필요하신 부분 있으시면 편하게 문의주세요.<br>
감사합니다.

````html
Q. 여기서 사용된 마크다운 언어는?
 제목태그 ####
 링크 - []()
 링크 - []()
 구분선 - - -
 띄어쓰기 &lt;/br&gt;
 ````
- - -

<br>
> 필요할 때 가져다쓰자! 마크다운 언어 모아보기

## ASCII Code
```
공백 (&nbsp;)
" (&#34; 또는 &quot;),
# (&#35;),
% (&#37;),
& (&#38; 또는 &amp;),
' (&#39;),
* (&#42;),
< (&#60; 또는 &lt;),
> (&#62; 또는 &gt;),
_ (&#95;),
` (&#96;),
```

## 줄바꿈
※ 마크다운에서는 Enter로 줄바꿈이 되지 않는다.

 - space X 2번 입력
 - &lt;/br&gt;


## Header
제목은 <h1> ~ <h6> 까지 “#”의 개수로 표현 <br>
= - 사용

````
 # <h1> 
 ## <h2>
 ### <h3>
 #### <h4>
 ##### <h5>
 ###### <h6>     

 h1 text
 ===
 h2 text 
 ----
````

## BlockQuote
인용문자는 > 를 이용

````
> blockqute test.
>> blockqute test.
>>> blockqute test.
````

## List
순서있는 목록 : 숫자 + . <br>
순서없는 목록 : *,+ ,- 지원 / 혼합하여 사용가능 <br>
체크박스 : [x] + 텍스트  / [ ] + 텍스트 <br>

````
1. list test
2. list test
3. list teset


* list test
  * list test
    * list test
- list test
  - list test
    - list test
+ list test
  + list test
    + list test
    + list test

- [x] list test
- [x] list test
- [ ] list test
````

결과물
1. list test
2. list test
3. list teset


* list test
  * list test
    * list test
- list test
  - list test
    - list test
+ list test
  + list test
    + list test
    + list test

- [x] list test
- [x] list test
- [ ] list test

## Code blocks

#### 코드 인용방법
1. 들여쓰기 (※ 코드의 시작과 끝에 한줄 비우기!!) <br>
2. ` <pre> {code} </pre>`
3. ` ~~~ `
4. ` ``` ` (코드블럭)
5. ` `` ` (인라인코드블럭)

#### 언어에 따른 코드 문법 강조표시 코드에 사용된 언어를 ` ``` ` 바로 뒤에 기입하여 사용

~~~
```javascript

const body = document.querySelector("body");

const IMG_NUMBER = 5;

function randomNumber(){ //랜덤숫자 생성
  return Math.ceil((Math.random()*IMG_NUMBER));
}

init();
````
~~~

결과물 : 

```javascript

const body = document.querySelector("body");

const IMG_NUMBER = 5;

function randomNumber(){ //랜덤숫자 생성
  return Math.ceil((Math.random()*IMG_NUMBER));
}

init();
```

## 수평선

```
* * *
***
*****
- - -
---------------------------------------
```

결과물
* * *
***
*****
- - -
---------------------------------------

## Link

#### 참조링크

```
[naver](http://www.naver.com/)
```
결과물 : [naver](http://www.naver.com/)


#### 외부링크

```
[naver](http://www.naver.com/){: target="_blank" }
```

결과물 : [naver](http://www.naver.com/){: target="_blank" } (새 창에서 열림)


#### url 링크
```
naver: <http://www.naver.com/>
```
결과물 : naver: <http://www.naver.com/>

## emophasis

````
*single asterisks*
_single underscores_
**double asterisks**
__double underscores__
~~cancelline~~
````
결과물 : *single asterisks* <br>
_single underscores_ <br>
**double asterisks** <br>
__double underscores__ <br>
~~cancelline~~


## Image 
```
![Alt text](/path/to/img.jpg)
![Alt text](/path/to/img.jpg "Optional title")

<img src="/path/to/img.jpg" width="450px" height="300px" title="px(픽셀) 크기 설정" alt="RubberDuck"></img><br/>
<img src="/path/to/img.jpg" width="40%" height="30%" title="px(픽셀) 크기 설정" alt="RubberDuck"></img>
```

## Table

※ 표 생성시 주의사항 <br>
- 앞뒤로 두줄 이상 띄어야 표로 인식함 <br>
- 그렇지 않은 경우에는 텍스트로 인식하여 노출 <br>

table 생성 사이트 : https://www.tablesgenerator.com/markdown_tables


----

이 정도면 가독성 있는 커밋 메시지를 작성하기에 충분하다고 생각한다. 똑같은 태그도 다르게 표기되는 몇몇 개가 눈에 띈다. 전체적으로 파악해두면 커밋메시지를 더 빠르게 작성할 수 있겠지! 오늘도 일잘러에 한 발 더 가까워졌다 (ง •̀ω•́)ง 아자뵤
