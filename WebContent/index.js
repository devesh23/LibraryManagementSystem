/**
 * 
 */

$(document).ready(function() {
	
	
	$("#blink")
	
	
	
	$('.modal').modal();
    //now you can open modal from code
    //or by click on trigger
    $('.trigger-modal').modal();

    $("#password").on("focusout", function (e) {
        if ($(this).val() != $("#passwordConfirm").val()) {
            $("#passwordConfirm").removeClass("valid").addClass("invalid");
        } else {
            $("#passwordConfirm").removeClass("invalid").addClass("valid");
        }
    });
    
    $("#password").on("keyup", function (e) {
    	"^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$"
    });
    
    
    
    
    $("#passwordConfirm").on("keyup", function (e) {
        if ($("#password").val() != $(this).val()) {
            $(this).removeClass("valid").addClass("invalid");
        } else {
            $(this).removeClass("invalid").addClass("valid");
        }
    });
    
    $("#email").on("focusout", function (e) {
    	
        if ($(this).val() != $("#email-confirm").val()) {
            $("#email-confirm").removeClass("valid").addClass("invalid");
        } else {
            $("#email-confirm").removeClass("invalid").addClass("valid");
        }
    });

    $("#email-confirm").on("focusin", function (e) {
        if ($("#email").val() != $(this).val()) {
            $(this).removeClass("valid").addClass("invalid");
        } else {
            $(this).removeClass("invalid").addClass("valid");
        }
    });
    $("#phoneNumber").on("focusout",function (e){
    	var str = $(phoneNumber).val();
    	if((str.match(/[a-z]/||/[A-Z]/))||(str.length()!=10)){
    			$("#phoneNumber").removeClass("valid").addClass("invalid");}
    	else
    		{
    		$("#phoneNumber").removeClass("invalid").addClass("valid");
    		}
    });
    
    $("#Name").on("keyup", function (e) {
    	var str = $("#Name").val();
        if(str.match(/[0-9]/)){
        	$(this).removeClass("valid").addClass("invalid");
        }
        else{
        	$(this).removeClass("invalid").addClass("valid");
        }
    });
    $("#registerSignUp").on("focusin focusout", function (e) {
    	var str = $("#Name").val();
    	console.log(str)
        if(str.match(/[0-9]/)){
        	$("#Name").addClass("invalid");
        }
    });
    
});

