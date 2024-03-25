<?php
include('connection.php');
$email = $_POST['email'];
$password = $_POST['password'];



$query = $mysqli->prepare('select UserID, Username, Email, Password
from users 
where Email=?');
$query->bind_param('s', $email);
$query->execute();
$query->store_result();
$query->bind_result($id, $name, $email, $hashed_password);
$query->fetch();
$num_rows = $query->num_rows();

if ($num_rows == 0) {
    $response['status'] = "user not found";
} else {
    if (password_verify($password, $hashed_password)) {
        

       
        $response['status'] = "logged in";
        $response['UserID'] = $id;
        $response['Username'] = $name;
        $response['Email'] = $email;
       
    } else {
        $response['status'] = "incorrect credentials";
    }
}
echo json_encode($response);
