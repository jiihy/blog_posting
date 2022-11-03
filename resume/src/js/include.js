$(document).ready(function() {
    //공통영역 HTML 페이지 인크루드 관련
    $("#header").load("include/mp_header.html #demo_header>.header_inner");
    $(".snb").load("include/mp_snb.html #demo_snb_allclose>.snb_group");
});