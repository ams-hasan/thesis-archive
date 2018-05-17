
function sendForm(){
	var regexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	var name = $('#name').val();
	var email = $('#email').val();
	var pass = $('#pass').val();
	var cpass = $('#cpass').val();
	var id = $('#id').val();
	var stat = $('#stat').val();
	var year = $('#yr').val();
	var level= $('#lvl').val();
	var phone = $('#phone').val();
	if (name==''){
		alert('Please fill up all the fields with valid info');
		return;
	}
	if (email!='' && !email.match(regexp)){
		alert('Please enter a valid email address');
		return;
	}
	if (pass.length<4){
		alert('Password length needs to be at least 4');
		return;
	}
	if (pass!==cpass){
		alert('Passwords don\'t match');
		return;
	}
	$.ajax({
		type : 'POST',
		data : { name, id, stat, level, year, phone, email, pass },
		url : '/su',
		success : function(json){
			if (json.hasOwnProperty('error')){
				toastr.error(json.error, '', {timeOut: 1300});
				return;
			}
			else if (json.hasOwnProperty('inserted')){
				localStorage.setItem('name', name);
				localStorage.setItem('id', id);
				window.open('/thesislist', '_self');
			}
		}
	});
}