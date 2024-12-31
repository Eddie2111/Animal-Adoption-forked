<?php
require_once('../db.php');

header("Content-Type: application/json");

$data = json_decode(file_get_contents("php://input"), true);

$name = $data['name'];
$address = $data['address'];
$district = $data['district'];

$sql = "INSERT INTO customers (name, address, district) VALUES (?, ?, ?)";
$stmt = $pdo->prepare($sql);
$stmt->execute([$name, $address, $district]);

echo json_encode(["message" => "Customer data saved successfully."]);
?>
