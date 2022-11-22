---
title: 빼빼로데이 기념으로 동료들에게 일정 산출 계산기 선물하기
categories: [co-working]
comments: true
---

> 일정(md) 암산하기 힘드셨죠?? 

📆 [MD 계산기 써보기](https://jiihy.github.io/22_portfolio/md_calculator/md_calculator.html)

<br>
To Do (스케쥴표)에 업무를 등록할 때 은~~근 귀찮고 신경쓰이는 md 계산하기. 하루 8시간이 1md이다보니 4시간이면 0.5, 1시간이면 0.12 등 딱 떨어지지 않는 수치 덕분에 암산하기 어려웠다. 빼빼로데이 선물로 동료들에게 **일정산출계산기** 를 선물하자! 디자인팀까지 포함하여 약 70명의 귀차니즘이 해결될 것이다.

----

## 간략한 계산법
 1. 1분에 0.00208333md를 기준으로 초기 설정 ( 1MD / 480분 = 0.0028333 )
 2. 시간 입력값(userTypeH)은 60을 곱해서 분으로 환산
 3. 시간 입력(userTypeH)과 분 입력(userTypeM)의 value를 숫자로 반환하여 더함 (userTypeT)
 4. 1분(0.00208333333) * userTypeT 으로 결괏값 산출
** 이때 입력값 노출 영역(.user_input)에 위치하는 userTypeN 값은 1 이상인 경우에만 +'시간(h)' / '분(m)' 출력, 아닌 경우는 빈칸 유지 <br>
(시간/분 중 입력되지 않은 input은 화면에 나타나지 않게 설정하여 가시성을 높힘)

#### 기대 효과

대략적으로 계산하기보다 정확한 md 산출을 통해 확실한 리소스 관리 효과 <br>
ToDo 등록 고민 시간 감소 등

```html
<div class="wrap">
  <div class="content_area">
      <div class="calculator">
          <h2>md 계산기</h2>
          <p class="user_input" id="userInput">작업시간을 입력해주세요!</p>
          <strong class="result" id="result"><span class="blind">md 반환창</span></strong>
          <div class="input_box">
              <input id="userTypeH" type="number" onchange="printName()" placeholder="시간">
              <input id="userTypeM" type="number" onchange="printName()" placeholder="분">
          </div>
      </div>
      <span class="set_md">1분 = 0.002083md</span>
  </div>
</div>
```

```js
const md = 0.00208333333;
const h = '시간 '
const m = '분'

function printName(){
    let userTypeH = document.getElementById('userTypeH').value; //input창의 값을 가져옴
    let userTypeM = document.getElementById('userTypeM').value; 
    let userTypeT = Number(userTypeH)*60 + Number(userTypeM); //userTypeN의 숫자 Total 계산
    let calculator = (md * userTypeT).toFixed(2);

    let userMd = calculator + ' md';
    document.getElementById('userInput').innerText = (userTypeH >= 1?userTypeH+h:'') + (userTypeM >= 1?userTypeM+m:'');
    document.getElementById('result').innerText = userMd;
}
```

----

황금같은 주말 일요일 하루종일 JS 수업을 들으러 강남까지 출석한 보람이 있다. 1년동안 귀찮음에 시달렸는데 계산기 만드는데는 딱 '0.72md' 걸렸다. (1초만에 일정을 계산할 수 있지 훗) <br>
동료들도 부디 유용하고 편리하게 사용해주길 🙏🏻🙏🏻
