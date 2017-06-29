<?php 
	if (isset($_GET['plain_string'])) {
		$string=$_GET['plain_string'];
  		$response_array['md5']=md5($string);
  		header('Content-type: application/json');//preparing correct format for json_encode
    	echo json_encode($response_array);//sending response to ajax
	}
 ?>