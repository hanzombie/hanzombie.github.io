//<![CDATA[
$(document).ready(function () {
    //popup
    $('.main_img.cell .img-box, .main .text-box .text-box-inner .project').click(function(){
        $('#popup').addClass('active');
    });
    $('#popup').click(function(){
        $('#popup').removeClass('active');
    });
})
//]]>
