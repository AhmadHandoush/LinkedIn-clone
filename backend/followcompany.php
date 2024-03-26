<?php
header("Access-Control-Allow-Origin: *");

include('./connection.php');


$followers_id = $_POST['user-id'];
$following_id = $_POST['company-id'];


    $sql = "INSERT INTO Followers (FollowerID, FollowingID, IsUser) VALUES (?,?, false)";
    $query = $mysqli->prepare($sql);
    $query->bind_param("ii", $followers_id, $following_id);
    $query->execute();
    $response['status'] = "success";
    $response['message'] = " successfully followed";
   

 


echo json_encode($response);