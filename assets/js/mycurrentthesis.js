
$(document).ready(function(){
	$.ajax({
		type: 'POST',
		url: '/mycurthesispost',
		success: function(json){
			if (json.hasOwnProperty('error')){
				toastr.error(json.error, '', {timeOut: 1300});
				return;
			}
			for (var i=0; i<json.length; i++){
				var div = '<div><div class="box">';
				div += '<div class="content">';
				div += '<header class="align-center"><font>Category:</font><p>'+json[i].category+'</p>';
				div += '<h2>'+json[i].title+'</h2></header>';
				div += '<h4 style="margin-bottom:2px" class="pull-right"><strong>Supervisor</strong></h4>';
				div += '<h4 style="margin-bottom:2px"><strong>Authors</strong></h4>';
				div += '<h5 class="pull-right">'+json[i].supervisor[1]+'</h5>';
				div += '<h5>'+json[i].authors[1]+'<br>'+json[i].authors[3]+'<br>'+json[i].authors[5]+'</h5>';
				div += '<footer class="align-center"><a href="/editcurthesissupervisor?id='+json[i]._id+'" class="button alt">Give Feedback</a></footer>';
				div += '</div></div></div>';
				$('.thesiswrapper').append(div);
			}
		}
	})
})