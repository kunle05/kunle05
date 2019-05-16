$(document).ready(function(){
    $('.name').hover(function(){
        $(this).html('OLAKUNLE YUSUF')
    },
    function(){
        $(this).html('OY')
    })
    $('.navbar-nav>li>h3').on('click', function(){
        $('.navbar-collapse').collapse('hide');
    });
    $('#contact').mouseleave(function(){
        $('#err').html("");
    })

    $('#contact-form').submit(function(e){
        var errors = [];
        $('#err').html("");
        var data = {
            name : $('#inputName').val(),
            email : $('#inputEmail').val(),
            'contact phone' : $('#inputPhone').val(),
            message : $('#inputMessage').val()
        }

        for(var x in data){
            console.log(x);
            if(x == 'email' && data[x].length > 2){
                if(validateEmail(data[x])){
                    console.log("valid")
                }
                else{
                    errors.push("Invalid Email Address")
                }
            }
            if(data[x].length < 2 && x!="contact phone"){
                errors.push(`Please provide ${x}`)
            }
        }
        if(errors.length > 0){
            e.preventDefault();
            for(var i = 0; i < errors.length; i++){
                $('#err').append(
               ` <p class="m-0">${errors[i]}</p>`
                )
            }  
        }
        else{
            $(this).submit();
            alert("Message Sent");
            $(this).get(0).reset()
        }
    })

});
function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}