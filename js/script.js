/*
      Author  : Suresh Pokharel
      Email   : suresh.wrc@gmail.com
      GitHub  : github.com/suresh021
      URL     : psuresh.com.np
*/ 

function convert(){
	var plain_string = $( "#txt_input" ).val();
	$.ajax({
		url:'process.php?plain_string=' + plain_string,
		complete: function (response) {
     		var status = JSON.parse(response.responseText);//parsing status from response received from php
     		$('#txt_output').val(status.md5);
        },
     	error: function () {
     		$('#txt_output').val('Bummer: there was an error!');
     	},
    });
}


