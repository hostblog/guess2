var selectedImageID = 'id_0';
function PreviewPhoto(url, url2, name)
{
	var imgPhotoDetail = document.getElementById('abc');
	var hlPhoto = document.getElementById('abcd_show');
	var simgPhoto = document.getElementById(id);
	var sselectedImageID = document.getElementById(selectedImageID);
	imgPhotoDetail.src = url;
	hlPhoto.href= url2;
	simgPhoto.style.border = '1px solid #cccccc';
}
function OnmouseoutPhoto(id)
{	
	document.getElementById(id).style.border = '1px solid #cccccc';
}
function delete_pic(id){
	$.ajax({
		type: 'POST',
		url: '/vn/delete_pic.php',
		data: 'record_id='+id,
		success: function(msg){
		  if(msg!=''){
		  	alert( msg );
				$('#'+id).remove();
		  }
		}
	});
}

function trim_1(sString){
	while(sString.substring(0,1) == ' '){
		sString = sString.substring(1, sString.length);
	}
	while(sString.substring(sString.length-1, sString.length) == ' '){
		sString = sString.substring(0,sString.length-1);
	}
		return sString;
}
function checkblank_1(str){
	if(trim_1(str) == '') return true;
	else return false;
}	
function isemail_1(email) {
	var re = /^(\w|[^_]\.[^_]|[\-])+(([^_])(\@){1}([^_]))(([a-z]|[\d]|[_]|[\-])+|([^_]\.[^_])*)+\.[a-z]{2,3}$/i
	return re.test(email);
}
function changtab(id,count){
	for(i=0;i<=count;i++){		
		try{
			document.getElementById('menu'+i).className='menulink_1';
			if(i==count) document.getElementById('menu'+i).className='menulink';
		}
		catch(e){}			
	}	
	//document.getElementById('menu'+id).className='menu-active';
}
