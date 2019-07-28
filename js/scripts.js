$(document).ready(function(){
    $("#icon-des").click(function(){
        $("#p-des").toggle();
        $("#icon-des").toggle();
    });
    $("#p-des").click(function(){
        $("#icon-des").toggle();
        $("#p-des").toggle();
    });
    $("#icon-dev").click(function(){
        $("#p-dev").toggle();
        $("#icon-dev").toggle();
    });
    $("#p-dev").click(function(){
        $("#icon-dev").toggle();
        $("#p-dev").toggle();
    });
    $("#icon-pro").click(function(){
        $("#p-pro").toggle();
        $("#icon-pro").toggle();
    });
    $("#p-pro").click(function(){
        $("#icon-pro").toggle();
        $("#p-pro").toggle();
    });
    //hover
    // $('.word').hide();
    // $('img').animate({
    //     opacity:1  
    // });
    // $('img').hover(function() {
    //     $(this).stop().animate({opacity:.4},200);
    //     $('.word').fadeIn();

    // }, function() {
    //     $(this).stop().animate({opacity:1},200)
    //     $('.word').fadeOut();
    // });
    $("#ok").click(function(fedback){
        var name=$("#name").val();
        var email=$("#email").val();
        var message=$("#comment").val();
        if((name==="")||(email==="")||(message==="")){
            alert("Please, fill the required fields!");
        }
        else{
            alert(name+ ", we have received your message. Thank you for your comment!");
        }
        fedback.preventDefault();
    });
});