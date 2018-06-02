window.onload = function(){


	function nameValidate(name){
		var pat=/^[a-zA-Z]+$/;
		var check = (pat.test(name) && (name.length>3 && name.length<15));
		if(check==true)
			return check;
		else {
			 document.getElementById('error').style.display="block";
			return false;
		}
	}

	function emailValidate(email){
		var pat = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.([a-zA-Z0-9-.])+$/;
		var check = pat.test(email);
		if(check==true)
			return check;
		else {
			 document.getElementsByTagName('span')[1].style.display="block";
			return false;
		}
	}

	function mobileValidate(mobile){
		var pat = /^[0-9]+$/;
		var check = (pat.test(mobile) && mobile.length==10);
		if(check==true)
			return check;
		else{
			 document.getElementsByTagName('span')[2].style.display="block";
		return false;
	}
	}

	function passwordValidate(password){
		var pat =/^.*(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).*$/;
		var check = pat.test(password);
		if(check==true)
			return check;
		else {
			 document.getElementsByTagName('span')[3].style.display="block";
			return false;
		}

	}

	function validateForm(){

		//alert("Checking form");
		var formValues = document.getElementsByTagName('input');

		var a = nameValidate(formValues[0].value);
		var b = emailValidate(formValues[1].value);
		var c = mobileValidate(formValues[2].value);
		//var d = passwordValidate(formValues[5].value);

		if(a&&b&&c/*&&d*/){
			
			return true;
		}
		else{
			return false;
		}

	}

function changeSrc()
	{
		var logo = document.getElementById('img');
		var female = document.getElementById('gender0');
		 if (female.checked) {
			logo.src="user-f.png";
		}
		var male = document.getElementById('gender1');
		if (male.checked){
			logo.src="user_	m.png";
		}	
	}	


	
	var form1 = document.getElementById('submit');
	form1.onsubmit = function(){
		 return validateForm();
	}

	var female = document.getElementById('gender0');
	female.onclick = function(){
		changeSrc();
	}
	var male = document.getElementById('gender1');
	male.onclick = function(){
		changeSrc();
	}

}