---
title: IE table속 overflow-y의 스크롤바 이슈
categories: [FE]
comments: true
---

> IE에서 테이블 내부 스크롤바가 노출되는 이슈에 맞춰 스타일 적용 하는 법

<img src="../assets/img/table_mac.png" alt="IE table">
&lt;Mac Os 페이지 룩&gt;

작업하던 페이지는 width:695px;의 고정 너비가 지정돼있었고, 디자인 가이드에 맞춰서 col style width값을 지정해둔 상태였다. 맥으로는 정상적으로 확인된다.
```html
<!-- width: 695px 고정 -->
<table> 
    <caption class="caption_blind">test 표</caption>
    <colgroup>
        <col style="width:510px">
        <col style="width:109px">
        <col style="width:76px">
    </colgroup>
    ...
```

<img src="../assets/img/table_IE_2.png" alt="IE table">

그러니 IE에서 자동으로 생성되는 스크롤바로 인해 영역이 밀리는 현상 발생. 

#### 마지막 col style width를 비우기
```html
<!-- width: 695px 고정 -->
<table> 
    <caption class="caption_blind">test 표</caption>
    <colgroup>
        <col style="width:510px">
        <col style="width:109px">
        <col>
    </colgroup>
    ...
```

```css
.th_scroll {
    padding-right: 19px;
    /* 스크롤바가 생기는 만큼 제목 th 마지막 td 밀어주기 */
}
```

<img src="../assets/img/table_IE.png" alt="IE table">
&lt;디자인을 해치지 않으면서 예쁘게 정렬되어 나오는 IE&gt;



_추가 참고 테이블 태그_
```html
<div class="tb_main">
        <h3 class="blind">리스트 선택</h3>
        <div class="th_scroll">
            <table class="tb_h">
                <caption class="caption_blind">리스트 표</caption>
                <colgroup>
                    <col style="width:510px">
                    <col style="width:109px">
                    <col>
                </colgroup>
                <tbody>
                    <tr>
                        <th><div><a href="#" class="ico down">구분</a></div></th>
                        <th><div><a href="#" class="ico up">설명</a></div></th>
                        <th><div><a href="#" class="ico down">위치</a></div></th>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="tb_scroll">
            <table>
                <caption class="caption_blind">신청 표</caption>
                <colgroup>
                    <col style="width:510px">
                    <col style="width:109px">
                    <col>
                </colgroup>
                <thead class="blind">
                <tr>
                    <th><div>구분</div></th>
                    <th><div>휴양시설명</div></th>
                    <th><div>위치</div></th>
                    <th><div>평형</div></th>
                </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>test</td>
                        <td>test</td>
                        <td>test</td>
                    </tr>
                    <tr>
                        <td>test</td>
                        <td>test</td>
                        <td>test</td>
                    </tr>
                    <tr>
                        <td>test</td>
                        <td>test</td>
                        <td>test</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    ...
```


