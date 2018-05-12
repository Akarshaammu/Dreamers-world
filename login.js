
function btnmsg()
{	
	var pwd_expression = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
	
	var x=document.getElementById("uid").value;
	if(x == "")
	{
		//document.write("empty");
		alert("Username can't be empty");
	}
	
	var pwd=document.getElementById("pwd").value;
	if( pwd=="")
	{
		alert("Passowrd can't be emtpy");
	}
	else if(!pwd_expression.test(pwd))
	{
		alert ('Upper case, Lower case, Special character and Numeric letter are required in Password filed');
	}
	else if(document.getElementById("pwd").value.length < 8)
	{
		alert ('Password minimum length is 8');
	}	
	else if(document.getElementById("pwd").value.length > 16)
	{
		alert ('Password max length is 12');
	}
        confirm("Are you sure to submit?");
        
}