<?php
header("Access-Control-Allow-Origin: *");

include('./connection.php');


$followers_id = $_POST['user-id'];
$following_id = $_POST['company-id'];


    $sql = "DELETE FROM Followers WHERE FollowerID = ? AND FollowingID = ? AND IsUser = true";
    $query = $mysqli->prepare($sql);
    $query->bind_param("ii", $followers_id, $following_id);
    $query->execute();
    $response['status'] = "success";
    $response['message'] = "user was created successfully";
   

    $response["status"] = "user already exists";
    $response["message"] = "user $name already exist";



echo json_encode($response);