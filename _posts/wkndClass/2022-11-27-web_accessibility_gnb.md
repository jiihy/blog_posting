---
title: 웹 접근성을 지키는 gnb 탭메뉴 제작 기록
categories: [FE]
comments: true
---

> `tab키`를 통해 웹 접근성까지 지키는 gnb 탭 메뉴 동작 JS 코드 기록


```js
// 다른 프로그램과 겹치는 것을 막기 위해 함수 선언  - 지역변수 처리
oncGnb = () => { // 함수 선언만
    //1. 문서객체선택
    const main = document.querySelectorAll('#header .mainNav');
    const sub = document.querySelectorAll('#header .subNav');

    // 2. 메인메뉴 mouseenter이벤트 
    for(let i=0;i<main.length;i++){
        main[i].addEventListener('mouseenter',function(){
            // 이벤트받은 메인메뉴의 다음 동생요소만 active클래스 받기
            this.nextElementSibling.classList.add('active');

            // 부모요소인 li태그에서 마우스를 벗어나면 해당 sub를 active클래스 제거
            this.parentNode.addEventListener('mouseleave',function(){
                this.lastElementChild.classList.remove('active');
            });
        });
        
        //3. 웹접근성
        //3-1. 메인메뉴 초점 (focus) 받기
        main[i].addEventListener('focus',function(){
            for(let j=0;j<main.length;j++){
                // 모든 메인메뉴 비활성 후 
                main[j].classList.remove('active');
                // 모든 하위메뉴 비활성
                sub[j].classList.remove('active');
                // 모든 하위메뉴 초점 못받게 처리 
                // a 태그를 문서객체 선택
                const a = sub[j].getElementsByTagName('a');
                for(let k=0;k<a.length;k++){ //setAttribute: -1 속성변경으로 초점 못받게
                    a[k].setAttribute('tabindex','-1');
                }

            }

            // 이벤트 받은 메인메뉴만 활성
            this.classList.add('active');

            // 이벤트 받은 메인메뉴의 동생만 활성
            this.nextElementSibling.classList.add('active');

            // 이벤트 받은 메인메뉴의 동생의 a 태그만 초점받게 처리
            const activeLink = this.nextElementSibling.getElementsByTagName('a');

            for(let j=0;j<activeLink.length;j++){
                activeLink[j].setAttribute('tabindex','0');
            }
        });
    }
    
    //3-2. 첫번째 메인메뉴에서 [shift] + [tab] 누르면 첫번째만 비활성
    main[0].addEventListener('keydown',function(){
        // e: 눌린 키의 정보를 담는 이벤트 객체
        if(e.keyCode == 9){ // 탭키를 눌렀을 때 9번
            if(e.shiftkey){ // 시프트키도 눌렀다면
                this.classList.remove('active');
                this.nextElementSibling.classList.remove('active');
            }
        }
    });

    //3-3 마지막 하위리스트 a태그에서 [tab]키를 누르면 비활성
    sub[sub.length -1].lastElementChild.firstElementChild.addEventListener('keydown',function(e){
        if(e.keyCode == 9){
            if(!e.shiftkey){
                main[main.length -1].classList.remove('active');
                sub[sub.length -1].classList.remove('active');

                const a = sub[sub.length -1].getElementsByTagName('a');

                for(let i=0;i<a.length;i++){
                    a[i].setAttribute('tabindex','-1');
                }
            }
        }
    });
}

oncGnb(); // 함수 호출

```


