<?php
require '../connect.php';

// Get the posted data.

$postdata = file_get_contents("php://input");

//print_r($postdata);

if(isset($postdata) && !empty($postdata))
{
  // Extract the data.
  $request = json_decode($postdata);


  // Sanitize.
  $id = $con->real_escape_string(trim($request->id));
  $name = $con->real_escape_string(trim($request->name));
  $phoneno = $con->real_escape_string(trim($request->phoneno));
  $email = $con->real_escape_string(trim($request->email));
  $note = $con->real_escape_string(trim($request->note));
  // Update.
   $sql = "UPDATE `phone` SET `name`='$name', `phoneno`='$phoneno',`email`='$email',`note`='$note'  WHERE `id` = '{$id}' LIMIT 1";

  if($con->query($sql))
  {
    //http_response_code(204);
  }
  else
  {
    return http_response_code(422);
  }
}
