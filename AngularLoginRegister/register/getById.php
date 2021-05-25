<?php

require '../connect.php';

$id = $_GET['id'];

  // Get by id.
$sql = "SELECT * FROM `register` WHERE `id` ='{$id}' LIMIT 1";

 if($result = $con->query($sql))
{
   $cr = 0;

  $row = $result->fetch_assoc();

    $students['id']    = $row['id'];
    $students['username'] = $row['username'];
    $students['firstName'] = $row['first_name'];
    $students['lastName'] = $row['last_name'];
    $students['password'] = $row['password'];
    $students['email'] = $row['email'];
    // $students['salary'] = $row['salary'];
   // $cr++;


   //print_r($students);

  echo json_encode($students);
}
else
{
  http_response_code(404);
}
