<?php
require '../connect.php';
error_reporting(E_ERROR);
$students = [];
$sql = "SELECT * FROM  phone";

if($result = $con->query($sql))
{
  $cr = 0;
  while($row = $result->fetch_assoc())
  {
    $students[$cr]['id']    = $row['id'];
    $students[$cr]['name'] = $row['name'];
    $students[$cr]['phoneno'] = $row['phoneno'];
    $students[$cr]['note'] = $row['note'];
    $students[$cr]['email'] = $row['email'];
    $students[$cr]['created'] = $row['created'];
    $cr++;
  }

    //print_r($students);

  echo json_encode($students);
}
else
{
  http_response_code(404);
}
?>
