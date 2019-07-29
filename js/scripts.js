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
    $("#word").hide();
    $("#pic1-po").animate({opacity:1});
    $("#pic1-po").hover(function(){
        $(this).stop().animate({opacity:0.4});
        $("#word").fadeIn();  
    }, 
    function() {
        $(this).stop().animate({opacity:1})
        $("#word").fadeOut();
    });
    $("#word2").hide();
    $("#pic2-po").animate({opacity:1});
    $("#pic2-po").hover(function(){
        $(this).stop().animate({opacity:0.4});
        $("#word2").fadeIn();  
    }, 
    function() {
        $(this).stop().animate({opacity:1})
        $("#word2").fadeOut();
    });
    $("#word3").hide();
    $("#pic3-po").animate({opacity:1});
    $("#pic3-po").hover(function(){
        $(this).stop().animate({opacity:0.4});
        $("#word3").fadeIn();  
    }, 
    function() {
        $(this).stop().animate({opacity:1})
        $("#word3").fadeOut();
    });
    $("#word4").hide();
    $("#pic4-po").animate({opacity:1});
    $("#pic4-po").hover(function(){
        $(this).stop().animate({opacity:0.4});
        $("#word4").fadeIn();  
    }, 
    function() {
        $(this).stop().animate({opacity:1})
        $("#word4").fadeOut();
    });
    $("#word5").hide();
    $("#pic5-po").animate({opacity:1});
    $("#pic5-po").hover(function(){
        $(this).stop().animate({opacity:0.4});
        $("#word5").fadeIn();  
    }, 
    function() {
        $(this).stop().animate({opacity:1})
        $("#word5").fadeOut();
    });
    $("#word6").hide();
    $("#pic6-po").animate({opacity:1});
    $("#pic6-po").hover(function(){
        $(this).stop().animate({opacity:0.4});
        $("#word6").fadeIn();  
    }, 
    function() {
        $(this).stop().animate({opacity:1})
        $("#word6").fadeOut();
    });
    $("#word7").hide();
    $("#pic7-po").animate({opacity:1});
    $("#pic7-po").hover(function(){
        $(this).stop().animate({opacity:0.4});
        $("#word7").fadeIn();  
    }, 
    function() {
        $(this).stop().animate({opacity:1})
        $("#word7").fadeOut();
    });
    $("#word8").hide();
    $("#pic8-po").animate({opacity:1});
    $("#pic8-po").hover(function(){
        $(this).stop().animate({opacity:0.4});
        $("#word8").fadeIn();  
    }, 
    function() {
        $(this).stop().animate({opacity:1})
        $("#word8").fadeOut();
    });
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