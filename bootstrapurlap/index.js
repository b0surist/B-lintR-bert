let emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
let jelszoPattern = /^[\w]{8,256}$/
let iranyitoszamPattern = /^[1000-9999]{4}?$/;

$(function(){ //ready
    $("form").submit(function(event){
        event.preventDefault();
    })
    $("#email").change(function(){
        let email = $(this).val();
        let type = $(this).attr("type");
        if(!emailPattern.test(email) && type == "email"){
            $(".error").html("<p>Az email formátuma nem megfelelő!</p>");
        }
        else{
            $(".error").html("");
        }
    })
    $("#password").change(function(){
        let jelszo = $(this).val();
        let type2 = $(this).attr("type");
        if(!jelszoPattern.test(jelszo) && type2 == "password"){
            $(".error").html("<p>A jelszó formátuma nem megfelelő!</p>")
        }
        else{
            $(".error").html("");
        }
    })
    $("#number").change(function(){
        let iranyit = $(this).val();
        let type3 = $(this).attr("type");
        if(!iranyitoszamPattern.test(iranyit)){
            $(".error").html("<p>Az irányítószám formátuma nem megfelelő!</p>")
        }
        else{
            $(".error").html("");
        }
    })
})    