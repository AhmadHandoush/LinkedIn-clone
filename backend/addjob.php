<?php
header("Access-Control-Allow-Origin: *");

include('./connection.php');


$id = $_POST['company-id'];
$title = $_POST['job-title'];
$desc = $_POST['job-desc'];


    $sql = "INSERT INTO Jobs (CompanyID, JobTitle, JobDescription) VALUES (?,?,?)";
    $query = $mysqli->prepare($sql);
    $query->bind_param("is", $id, $title,$desc);
    $query->execute();
    $response['status'] = "success";
    $response['message'] = "job post created successfully";
   
echo json_encode($response);