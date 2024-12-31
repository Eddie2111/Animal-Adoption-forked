<?php
require_once('../db.php');

header("Content-Type: application/json");

$petId = $_GET['pet_id'];

$sql = "SELECT animal_proof_home, vaccination, neuter FROM pets WHERE pet_id = ?";
$stmt = $pdo->prepare($sql);
$stmt->execute([$petId]);
$result = $stmt->fetch(PDO::FETCH_ASSOC);

if ($result) {
    echo json_encode($result);
} else {
    echo json_encode(["error" => "Pet not found."]);
}
?>
