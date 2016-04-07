<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<link rel="stylesheet" href="styles/default.css" type="text/css" media="all"/>
<script src="js/jquery-1.9.1.min.js" type="text/javascript"></script>
<script src="js/validateSignin.js"></script>
</head>
<body id="signinbody">
<div id="signindiv">
<fieldset style="width:30%">
<legend>LOG-IN HERE</legend>
<form method="POST" action="signin.php">
	Username<br><input type="text" name="uname" size="40"><br>
	Password<br><input type="password" name="pwd" size="40"><br>
	<input type="submit" name="submitted" id="submit" value="Log In"><br><br>
	<a href="forgotpassword.php">Forgot Password?</a>
</form>
</fieldset>
</div>
</body>
</html>
<?php
if(isset($_POST['submitted']))
{
	//working fine
	Login();
}
function Login()
{
//session_start();
if(empty($_POST['uname'] || empty($_POST['pwd'])))
{
     header("Location: signin.php");
     echo 'alert("Empty")';
 }
  	define('DBUSER', 'root');
    define('DBPASS', 'root');
 	$db = new PDO('mysql:host=localhost;dbname=test', DBUSER, DBPASS);
 	$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
 	$qry = "Select User_Id,Password from user where User_Id='$_POST[uname]'";
 	$result = $db->query($qry);
 	if(!$result)
 	{
 		die("Bad Query!");
 	}
 	$rowcount = $result->rowCount();
 	if($rowcount==1)
 	{
 		$row = mysqli_fetch_row($result);
 	}
 		
 	if(!isset($row['uname']) AND !isset($row['pwd']))
 	{
 		header("Location: home.php");
 	}
 	else
 	{
 		echo 'alert("SORRY... YOU ENTERD WRONG ID AND PASSWORD... PLEASE RETRY...")';
 	}
 }
?>