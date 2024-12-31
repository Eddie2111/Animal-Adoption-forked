<?php
$host = '127.0.0.1';
$db = 'pet_adoption';
$user = 'root'; // Replace with your DB username
$password = ''; // Replace with your DB password

$dsn = "mysql:host=$host;dbname=$db;charset=utf8mb4";

try {
    $pdo = new PDO($dsn, $user, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Connection failed: " . $e->getMessage());
}
?>
