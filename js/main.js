window.onload = function() {
    // TODO:: Do your initialization job

    // add eventListener for tizenhwkey
    document.addEventListener('tizenhwkey', function(e) {
        if (e.keyName === "back") {
            try {
                tizen.application.getCurrentApplication().exit();
            } catch (ignore) {}
        }
    });

    // Sample code
   
};


function login(){
	var loginuser = $('#emailtext').val() ;
	var pwduser = $('#pwdtext').val() ;


	
	 var data= "email="+loginuser+"&password="+pwduser;
	 if (loginuser=="" && pwduser=="")
		 {return ;}
		var request = new XMLHttpRequest();

	 request.open("POST", "http://192.168.1.5:3000/login");
	    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	request.onreadystatechange = function (){
		if (request.readyState==4  && request.status == 200)
			{
		    window.location = "petz/adoption.html";

			}
	}
	
	request.send('email='+loginuser+'&password='+pwduser);
}

function signup(){
	var loginuser = $('#emailtext').val() ;
	var pwduser = $('#pwdtext').val() ;


	
	 var data= "email="+loginuser+"&password="+pwduser;
	 if (loginuser=="" && pwduser=="")
		 {return ;}
		var request = new XMLHttpRequest();

	 request.open("POST", "http://192.168.1.5:3000/signup");
	    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	request.onreadystatechange = function (){
		if (request.readyState==4  && request.status == 200)
			{
		    window.location = "petz/adoption.html";

			}
	}
	
	request.send('email='+loginuser+'&password='+pwduser);
}
