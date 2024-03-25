<?php
header("Access-Control-Allow-Origin: *");

include 'connection.php';

$id = $_GET["id"];

 $query = $mysqli->prepare("SELECT * FROM users WHERE UserID = ?");
 $query->bind_param('i', $id);
 $query->execute();
 $query->store_result();
 $query->bind_result($id, $user_name, $user_email, $user_password,$bio,$experience,$education,$skills);
 $query->fetch();
 $response['status'] = "success";
 $response['user'] = array(
            'UserID' => $id,
            'Username' => $user_name,
            'Email' => $user_email,
            'Password' => $user_password,
            'Bio' =>$bio,
            'Experience'=>$experience,
            'Education'=>$education,
            'Skills'=>$skills,
        );

 






echo json_encode($response);
