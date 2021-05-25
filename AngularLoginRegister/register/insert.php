<?php
require '../connect.php';

$postdata = file_get_contents("php://input");

if (isset($postdata) && !empty($postdata)) {
  $request = json_decode($postdata);

  //print_r($request);

  // Sanitize.
  $username = $con->real_escape_string(trim($request->username));
  $password = $con->real_escape_string(trim($request->password));
  $firstname = $con->real_escape_string(trim($request->firstName));
  $lastname = $con->real_escape_string(trim($request->lastName));
  // $age = $con->real_escape_string(trim($request->age));
  // $salary = $con->real_escape_string(trim($request->salary));
  $email = $con->real_escape_string(trim($request->email));


  // Store.
  $selectSQL = "SELECT * FROM register WHERE username='" . $username . "' LIMIT 1";
  // echo $selectSQL;
  // die;
  $res = $con->query($selectSQL);
  if ($res->num_rows) {
    $result = array('success' => false, 'message' => "Username Taken");
    // $result = ['success' => false, 'message' => "Username Taken"];
    echo json_encode($result);
    exit;
  }
  $sql = "INSERT INTO `register`(`username`,`password`,`first_name`,`last_name`,`email` ) VALUES ('{$username}','{$password}','{$firstname}','{$lastname}','{$email}')";
// echo $sql;
// die;
  if ($con->query($sql)) {
    http_response_code(201);
  } else {
    http_response_code(422);
  }
}
