<?php
require_once('../db.php');

header("Content-Type: application/json");

$sql = "SELECT * FROM employees WHERE customer_check = 0 LIMIT 1";
$stmt = $pdo->prepare($sql);
$stmt->execute();
$employee = $stmt->fetch(PDO::FETCH_ASSOC);

if ($employee) {
    $updateSql = "UPDATE employees SET customer_check = 1 WHERE id = ?";
    $updateStmt = $pdo->prepare($updateSql);
    $updateStmt->execute([$employee['id']]);

    echo json_encode(["employeeName" => $employee['name']]);
} else {
    echo json_encode(["error" => "No available employee."]);
}
?>
