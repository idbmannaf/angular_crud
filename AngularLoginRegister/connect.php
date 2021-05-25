<?php
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Credentials: true');
header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Authorization");
header("Content-Type: application/json; charset=UTF-8");
// db credentials
define('DB_HOST', 'localhost');
define('DB_USER', 'root');
define('DB_PASS', '');
define('DB_NAME', 'ng_crud');

// Connect with the database.
function connect()
{
  //$connect = mysqli_connect(DB_HOST ,DB_USER ,DB_PASS ,DB_NAME);
  $connect = new mysqli(DB_HOST ,DB_USER ,DB_PASS ,DB_NAME);

  if ($connect->errno) {
    die("Failed to connect:" . $connect->error);
  }

  $connect->set_charset("utf8");

  return $connect;
}

$con = connect();
