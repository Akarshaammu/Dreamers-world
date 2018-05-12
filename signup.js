function fclr(){
	document.getElementById("fn").value="";}

function lclr(){
	document.getElementById("ln").value="";}


function aclr(){
	document.getElementById("adr").value="";}

function uclr(){
	document.getElementById("uid").value="";}

function sub()
{
	var pwd_expression = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
	var letters = /^[A-Za-z]+$/;
	var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	var number= /([0-9])/;
	var alphabets = /[A-Za-z]/;
	
	var a=document.getElementById("fn").value;
	if(a=="Enter first name")
	{
		alert("First name not entered");
	}
	else if( a=="")
	{
		alert("First Name can't be emtpy");
	}
	else if(!letters.test(a))
	{
		alert('Name field required only alphabet characters(First Name Field)');
	}
	
	var b=document.getElementById("ln").value;
	if(b=="")
	{
		alert("Last Name can't be emtpy");
	}
	else if(!letters.test(b))
	{
		alert('Name field required only alphabet characters (Second Name Field)');
	}
	
	/*
	if(document.getElementById("adr").value = ""=="")
	{
		alert("Address can't be emtpy");
	}
	*/
        /*
	if(document.getElementById("uid").value = ""=="")
	{
		alert("Username can't be emtpy");
	}
	*/
	var pwd=document.getElementById("pwd").value;
	if( pwd=="")
	{
		alert("Password can't be emtpy");
	}
	else if(!pwd_expression.test(pwd))
	{
		alert ('Upper case, Lower case, Special character and Numeric letter are required in Password filed');
	}

	var pwd1=document.getElementById("pwd1").value;
	if (pwd1=="")
	{
		alert("Conform password");
	}
	else if(pwd != pwd1)
	{
		alert ('Password not Matched');
	}
	
	
	var email=document.getElementById("em").value;
	if( email=="")
	{
		alert("Please enter Email id");
	}
	else if (!filter.test(email))
	{
		alert('Invalid email');
	}

	var mobile=document.getElementById("m").value;
	if( mobile=="")
	{
		alert("Please enter the mobile no");
	}
        confirm("Are you sure to submit!!");
        
}


