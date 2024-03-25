<?php
header("Access-Control-Allow-Origin: *");

include('./connection.php');


$name = $_POST['name'];
$email = $_POST['email'];
$password = $_POST['password'];



$check_email = $mysqli->prepare('select Email from users where Email=?');
$check_email->bind_param('s', $email);
$check_email->execute();
$check_email->store_result();
$email_exists = $check_email->num_rows();

if ($email_exists == 0) {
    
    $hashed_password = password_hash($password, PASSWORD_BCRYPT);
    $sql = "INSERT INTO users (Username, Email,Password) VALUES (?, ?, ?)";
    $stmt = $mysqli->prepare($sql);
    $stmt->bind_param("sss", $name, $email, $hashed_password);
    $stmt->execute();
    $response['status'] = "success";
    $response['message'] = "user was created successfully";
   
} else {
    $response["status"] = "user already exists";
    $response["message"] = "user $name already exist";
}


echo json_encode($response);



