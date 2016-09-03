var timer = window.setInterval(logout, 500000);

function Validate(object){
	if(typeof object === 'undefined')
	{
		return true;
	}
	return false;
}

function logout() {
	var signoutButton = document.getElementById("gb_71");

	if (!Validate(signoutButton)) {
		alert("Time is up. You will be logged out");
		signoutButton.click();
	}

	clearTimeout(timer);
}