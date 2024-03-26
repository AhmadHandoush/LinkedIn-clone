<?php

include("connection.php");

$name = $_POST['name'];
$job = $_POST['job'];
$bio = $_POST['bio'];
$experience = $_POST['experience'];
$education = $_POST['education'];
$id = $_POST['UserID'];



$sql = "UPDATE users SET Username= ?, Skills = ?, Bio= ?, Experience = ?, Education= ? WHERE UserID = ?"; 
$data = $mysqli->prepare($sql);
$data->bind_param("sssssi", $name, $job, $bio,$experience,$education,$id);
$result = $data->execute();

if ($result) {

    echo json_encode(array('success' => true));
} else {
    
    echo json_encode(array('success' => false));
}
   