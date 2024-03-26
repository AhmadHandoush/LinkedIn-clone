<?php
header("Access-Control-Allow-Origin: *");

include('./connection.php');


$id = $_POST['user-id'];
$content = $_POST['content'];


$sql = "INSERT INTO Posts (UserID, PostContent) VALUES (?,?)";
$query = $mysqli->prepare($sql);
$query->bind_param("is", $id, $content);
$query->execute();
$response['status'] = "success";
$response['message'] = "post created successfully";

echo json_encode($response);