function Form_Validator(form)
{
	var re = /^[0-9a-zA-Z]+$/;
	var emailre = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
	var passre=/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,20}$/

	if (form.username.value=="")
	{
		alert("Name Field is Empty");
		form.name.focus();
		return false;
	}

	if (form.username.value=="")
	{
		alert("Username is Empty");
		form.username.focus();
		return false;
	}
	
	else if (!re.test(form.username.value))
	{
		alert("Input Contains some Invalid Charaters");
		form.username.focus();
		return false;
	}



	if(form.email.value=="")
	{

		alert("Email Field is Empty");
		form.email.focus();
		return false;
	}

	else if (!emailre.test(form.email.value))
	{
		alert("Email address is not valid");
		form.email.focus();
		return false;
	}


	if(form.password.value=="")
	{

		alert("Password Field is Empty");
		form.password.focus();
		return false;
	}

	else if (!passre.test(form.password.value))
	{
		alert("Incorrect Format of the Password.\n\nPassword should be alphanumeric with minimum of 6 alpha-numeric characters. It should have at least 1 number, 1 captial letter and 1 special character");
		form.password.focus();
		return false;
	}

	if (form.password.value!= form.cpassword.value)
	{
		alert("Passwords does not match");
		form.password.focus();
		return false;	
	}
	
   	if (errors.length > 0)
		{
			var msg = "Errors:\n\n";
			for (var i=0; i <errors.length;i++)
			{
				msg+=errors[i]+'\n';
			}
			alert(msg);
			return false;	
		}
 return true;
}
