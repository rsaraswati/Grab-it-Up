$(document).ready(function() {
	// Insert span tag
	$("#fname").after("<span>Please enter only letters</span>");
	$("#mname").after("<span>Please enter only letters</span>");
	$("#lname").after("<span>Please enter only letters</span>");
	$("#email").after("<span>Please enter valid email</span>");
	$("#uname").after("<span>Please enter only letters or numbers</span>");
	$("#pwd").after("<span>The password should be 8 characters minimum</span>");
	$("#phone").after("<span>Please enter only numbers</span>");
	$("#address").after("<span>Please enter valid characters</span>");
	$("span").hide();

    // Get Focus of the input and display that the field is being currently edited
    $('#fname').focus('input', function() {
	$( this ).next( "span" ).text("The first name must contain only letters").show().addClass("info");
});
    $('#mname').focus('input', function() {
	$( this ).next( "span" ).text("The middle name must contain only letters").show().addClass("info");
});
    $('#lname').focus('input', function() {
	$( this ).next( "span" ).text("The last name must contain only letters").show().addClass("info");
});
    $('#email').focus('input', function() {
	$( this ).next( "span" ).text("The email must be a valid email address").show().addClass("info");
});
	$('#uname').focus('input', function() {
	$( this ).next( "span" ).text("The username must contain only letters or numbers").show().addClass("info");
});
  	$('#pwd').focus('input', function() {
	$( this ).next( "span" ).text("The password should be 8 characters minimum").show().addClass("info");
});
  	$('#phone').focus('input', function() {
	$( this ).next( "span" ).text("The phone number should contain digits only").show().addClass("info");
});
    // All operations of the first name field
  	$('#fname').blur('input', function() {
  	$( this ).next( "span" ).hide(); //Notification is initially hidden
    $( this ).next( "span" ).removeClass("info"); // Removes info class from span
    $( this ).next( "span" ).removeClass("ok");   // Removes ok class from span
    $( this ).next( "span" ).removeClass("error");  // Removes error class from span

    var input=$(this);
	var firstname_name=input.val();
	var str=/^[a-zA-Z]+$/;   // Checking if username has only characters or numbers
	if(firstname_name.match(str)){
		$( this ).next( "span" ).text(" ").append('<i style="display:inline;color: #3a7d34;">&#10004;</i>');
		$( this ).next( "span" ).show().addClass("ok"); //If username has only characters then , ok class should be assigned
			}
	else if(!firstname_name){
		    $( this ).next( "span" ).hide();  // If username is blank, only "The username must contain only letters" should be displayed
	}
	else{
		$( this ).next( "span" ).text(" ").append('<i style="display:inline;color: #FF0000;">&#10008;</i>');
		$( this ).next( "span" ).show().addClass("error");  //If username is invalid, error should be displayed
		
	}
});

    // All operations of the middle name field
  	$('#mname').blur('input', function() {
    $( this ).next( "span" ).hide(); //Notification is initially hidden
    $( this ).next( "span" ).removeClass("info"); // Removes info class from span
     $( this ).next( "span" ).removeClass("ok");   // Removes ok class from span
    $( this ).next( "span" ).removeClass("error");  // Removes error class from span

	var input=$(this);
	var middle_name=input.val();
	var str=/^[a-zA-Z]+$/;   // Checking if username has only characters or numbers
	if(middle_name.match(str)){
		$( this ).next( "span" ).text(" ").append('<i style="display:inline;color: #3a7d34;">&#10004;</i>');
		$( this ).next( "span" ).show().addClass("ok"); //If username has only characters then , ok class should be assigned
			}
	else if(!middle_name){
		    $( this ).next( "span" ).hide();  // If username is blank, only "The username must contain only letters" should be displayed
	}
	else{
		$( this ).next( "span" ).text(" ").append('<i style="display:inline;color: #FF0000;">&#10008;</i>');
		$( this ).next( "span" ).show().addClass("error");  //If username is invalid, error should be displayed
		
	}
});
  	// All operations of the last name field
  	$('#lname').blur('input', function() {
    $( this ).next( "span" ).hide(); //Notification is initially hidden
    $( this ).next( "span" ).removeClass("info"); // Removes info class from span
     $( this ).next( "span" ).removeClass("ok");   // Removes ok class from span
    $( this ).next( "span" ).removeClass("error");  // Removes error class from span

	var input=$(this);
	var last_name=input.val();
	var str=/^[a-zA-Z]+$/;   // Checking if username has only characters or numbers
	if(last_name.match(str)){
		$( this ).next( "span" ).text(" ").append('<i style="display:inline;color: #3a7d34;">&#10004;</i>');
		$( this ).next( "span" ).show().addClass("ok"); //If username has only characters then , ok class should be assigned
			}
	else if(!last_name){
		    $( this ).next( "span" ).hide();  // If username is blank, only "The username must contain only letters" should be displayed
	}
	else{
		$( this ).next( "span" ).text(" ").append('<i style="display:inline;color: #FF0000;">&#10008;</i>');
		$( this ).next( "span" ).show().addClass("error");  //If username is invalid, error should be displayed
		
	}
});
  	 $('#email').blur('input', function() {    	
    $( this ).next( "span" ).hide();
    $( this ).next( "span" ).removeClass("info");    // Removes info class from span
    $( this ).next( "span" ).removeClass("ok");// Removes ok class from span
    $( this ).next( "span" ).removeClass("error");// Removes error class from span
	var input=$(this);
	var user_email=input.val();
	if (validateEmail(user_email)){
        $( this ).next( "span" ).text(" ").append('<i style="display:inline;color: #3a7d34;">&#10004;</i>');
		$( this ).next( "span" ).show().addClass("ok");
	}
            
	else if(!user_email){
		    $( this ).next( "span" ).hide();
	}
	else{
		$( this ).next( "span" ).text(" ").append('<i style="display:inline;color: #FF0000;">&#10008;</i>');
		$( this ).next( "span" ).show().addClass("error");
	}
function validateEmail(user_email) {
var filter = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
if (filter.test(user_email)) {
return true;
}
else {
return false;
}
}
});
  	// All operations of the Username field
    $('#uname').blur('input', function() {
    $( this ).next( "span" ).hide(); //Notification is initially hidden
    $( this ).next( "span" ).removeClass("info"); // Removes info class from span
    $( this ).next( "span" ).removeClass("ok");// Removes ok class from span
    $( this ).next( "span" ).removeClass("error");  // Removes error class from span

	var input=$(this);
	var username_name=input.val();
	var str=/^([A-Za-z]|[A-Za-z][0-9]*|[0-9]*[A-Za-z])+$/;   // Checking if username has only characters or numbers
	if(username_name.match(str)){
		$( this ).next( "span" ).text(" ").append('<i style="display:inline;color: #3a7d34;">&#10004;</i>');
		$( this ).next( "span" ).show().addClass("ok"); //If username has only characters then , ok class should be assigned
			}
	if(!username_name){
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

// All operations of the Phone number field
  	$('#phone').blur('input', function() {
    $( this ).next( "span" ).hide(); //Notification is initially hidden
    $( this ).next( "span" ).removeClass("info"); // Removes info class from span
    $( this ).next( "span" ).removeClass("ok");
    $( this ).next( "span" ).removeClass("error");  // Removes error class from span

	var input=$(this);
	var phone=input.val();
	var str=/^\d+$/;   // Checking if phone has only digits 
	if(phone.length > 10){  
		$( this ).next( "span" ).text(" ").append('<i style="display:inline;color: #FF0000;">&#10008;</i>');
		$( this ).next( "span" ).show().addClass("ok"); //If phone number greater than 10 digits then , ok class should be assigned
		
	}
		else if(phone.match(str)){  
		$( this ).next( "span" ).text(" ").append('<i style="display:inline;color: #3a7d34;">&#10004;</i>');
		$( this ).next( "span" ).show().addClass("ok"); //If password is greatr than 7 characters then , ok class should be assigned
		
	}
	else if(!phone){
		    $( this ).next( "span" ).hide();  // If phone is blank, only "The phone must contain only letters" should be displayed
	}
	else{
		$( this ).next( "span" ).text(" ").append('<i style="display:inline;color: #FF0000;">&#10008;</i>');
		$( this ).next( "span" ).show().addClass("error");  //If phone is invalid, error should be displayed
		
	}
});
var validator = $( ".signup" ).validate();  // Validating the form
validator.form();   
});
