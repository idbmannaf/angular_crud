<?php

require '../connect.php';

$id = $_GET['id'];

  // Get by id.
$sql = "SELECT * FROM `phone` WHERE `id` ='{$id}' LIMIT 1";

 if($result = $con->query($sql))
{
   $cr = 0;

  $row = $result->fetch_assoc();

    $students['id']    = $row['id'];
    $students['name'] = $row['name'];
    $students['phoneno'] = $row['phoneno'];
    $students['email'] = $row['email'];
    $students['note'] = $row['note'];
    $students['created'] = $row['created'];
   // $cr++;


   //print_r($students);

  echo json_encode($students);
}
else
{
  http_response_code(404);
}
