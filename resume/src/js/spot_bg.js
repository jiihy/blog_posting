$(document).ready(function() {

var html = '';
for (var i = 1; i <= 50; i ++) {
    html += '<div class="shape-container--'+i+' shape-animation"><div class="random-shape"></div></div>';
}
  
document.querySelector('.shape').innerHTML += html;

var $allShapes = $("[class*='shape-container--']");
$('.button').click(function (event) {
    $allShapes.toggleClass("stop-shape");
    var $this = $(this);
    $this.toggleClass('.button');
    if($this.hasClass('.button')){
        $this.text('You made my day');         
    } else {
        $this.text('Open this resume');
    }
    event.preventDefault();
});

$('.resume').fullpage({
    sectionSelector: '.page',
    scrollOverflow: true
});

// pc에 있는 아래 화살표 버튼
$(".button").click(function (e) {
    setTimeout(function(){
        $.fn.fullpage.moveTo(2);
        $allShapes.removeClass("stop-shape");
    },700)
    
});

});
