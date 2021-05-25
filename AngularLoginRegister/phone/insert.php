<?php
require '../connect.php';

 $postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata))
{
  $request = json_decode($postdata);

  //print_r($request);

  // Sanitize.
  $username = $con->real_escape_string(trim($request->username));
  $phoneno = $con->real_escape_string(trim($request->phoneno));
  $email = $con->real_escape_string(trim($request->email));
  $note = $con->real_escape_string(trim($request->note));


  // Store.
  $sql = "INSERT INTO `phone` VALUES (NULL,'{$username}','{$phoneno}','{$email}','{$note}', NULL )";

  if($con->query($sql))
  {
    http_response_code(201);
  }
  else
  {
    echo $sql;
    // http_response_code(422);
  }
}
