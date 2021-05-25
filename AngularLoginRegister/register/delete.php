<?php
require '../connect.php';
$id=$_GET['id'];

$sql = "DELETE FROM `register` WHERE `id` ='{$id}' LIMIT 1";

if($con->query($sql))
{
  http_response_code(204);
}
else
{
  return http_response_code(422);
}