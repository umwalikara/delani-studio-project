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
    $("#ok").click(function(event){
        var name=$("#name").val();
        var email=$("#email").val();
        var message=$("#comment").val();
        if((name==="")||(email==="")||(message==="")){
            alert("Please, fill the required fields!");
        }
        else{
            alert(name+ ", we have received your message. Thank you for reaching out to us!");
        }
        event.preventDefault();
    });
});