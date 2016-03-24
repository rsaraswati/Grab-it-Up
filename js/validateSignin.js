$(document).ready(function() {
	// Insert span tag
	$("#uname").after("<span>Please enter only letters or numbers</span>");
	$("#pwd").after("<span>The password should be 8 characters minimum</span>");
	$("span").hide();

    // Get Focus of the input and display that the field is being currently edited
	$('#uname').focus('input', function() {
	$( this ).next( "span" ).text("The username must contain only letters or numbers").show().addClass("info");
});
  	$('#pwd').focus('input', function() {
	$( this ).next( "span" ).text("The password should be 8 characters minimum").show().addClass("info");
});
    // All operations of the Username field
    $('#uname').blur('input', function() {
    $( this ).next( "span" ).hide(); //Notification is initially hidden
    $( this ).next( "span" ).removeClass("info"); // Removes info class from span
    $( this ).next( "span" ).removeClass("ok");   // Removes ok class from span
    $( this ).next( "span" ).removeClass("error");  // Removes error class from span

	var input=$(this);
	var username=input.val();
	var str=/^[a-zA-Z0-9]+$/;   // Checking if username has only characters or numbers
	if(username.match(str)){
		$( this ).next( "span" ).text(" ").append('<i style="display:inline;color: #3a7d34;">&#10004;</i>');
		$( this ).next( "span" ).show().addClass("ok"); //If username has only characters then , ok class should be assigned
			}
	else if(!username){
		    $( this ).next( "span" ).hide();  // If username is blank, only "The username must contain only letters" should be displayed
	}
	else{
		$( this ).next( "span" ).text(" ").append('<i style="display:inline;color: #FF0000;">&#10008;</i>');
		$( this ).next( "span" ).show().addClass("error");  //If username is invalid, error should be displayed
		
	}
});

 $('#pwd').blur('input', function() {    	
    $( this ).next( "span" ).hide();
    $( this ).next( "span" ).removeClass("info");    // Removes info class from span
    $( this ).next( "span" ).removeClass("ok");// Removes ok class from span
    $( this ).next( "span" ).removeClass("error");// Removes error class from span
	var input=$(this);
	var user_pass=input.val();
	if(user_pass.length > 7){  
		$( this ).next( "span" ).text(" ").append('<i style="display:inline;color: #3a7d34;">&#10004;</i>');
		$( this ).next( "span" ).show().addClass("ok"); //If password is greatr than 7 characters then , ok class should be assigned
		
	}
	else if(!user_pass){
		    $( this ).next( "span" ).hide(); // If password is blank, only "The password should be 8 characters minimum" should be displayed
	
	}
	else{
		$( this ).next( "span" ).text(" ").append('<i style="display:inline;color: #FF0000;">&#10008;</i>');
		$( this ).next( "span" ).show().addClass("error");  //If password is invalid, error should be displayed
	}
});



var validator = $( ".Signin" ).validate();  // Validating the form
validator.form();   
});
