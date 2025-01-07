<?php
# to create an animal
$url = "http://localhost:5000/api/animals";
$data = array(
    'name' => 'Max',  # = + > == =>
    'species' => 'Dog',
    'breed' => 'Golden Retriever',
    'age' => 2,
    'price' => 500,
    'healthStatus' => 'Healthy',
    'description' => 'Friendly and well-trained family dog',
    'foodExpense' => 50,
    'medicalBill' => 150,
    'deliveryDate' => '2024-03-20T10:00:00.000Z'
);

$ch = curl_init($url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, array(
    'Content-Type: application/json'
));

$response = curl_exec($ch);

if(curl_errno($ch)){
    echo 'Error: ' . curl_error($ch);
} else {
    $http_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    echo "Status code: " . $http_code . "\n";
    echo "Response: " . $response;
}

curl_close($ch);
?>

<?php
# to get all animals
$url = "http://localhost:5000/api/animals";

$ch = curl_init($url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HTTPGET, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, array(
    'Accept: application/json'
));

$response = curl_exec($ch);

if(curl_errno($ch)){
    echo 'Error: ' . curl_error($ch);
} else {
    $http_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    echo "Status code: " . $http_code . "\n";
    $animals = json_decode($response, true);
    print_r($animals); // Display the fetched animals
}

curl_close($ch);
?>


<?php
# to get all animal food expenses
$url = "http://localhost:5000/api/animals/food-expenses";

$ch = curl_init($url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HTTPGET, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, array(
    'Accept: application/json'
));

$response = curl_exec($ch);

if(curl_errno($ch)){
    echo 'Error: ' . curl_error($ch);
} else {
    $http_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    echo "Status code: " . $http_code . "\n";
    $animals = json_decode($response, true);
    print_r($animals); // Display the fetched animals
}

curl_close($ch);
?>

<?php
# to get all animal medical bills
$url = "http://localhost:5000/api/animals/medical-bills";

$ch = curl_init($url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HTTPGET, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, array(
    'Accept: application/json'
));

$response = curl_exec($ch);

if(curl_errno($ch)){
    echo 'Error: ' . curl_error($ch);
} else {
    $http_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    echo "Status code: " . $http_code . "\n";
    $animals = json_decode($response, true);
    print_r($animals); // Display the fetched animals
}

curl_close($ch);
?>


<?php
# to get all animal delivery availability
$url = "http://localhost:5000/api/animals/delivery-availability";

$ch = curl_init($url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HTTPGET, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, array(
    'Accept: application/json'
));

$response = curl_exec($ch);

if(curl_errno($ch)){
    echo 'Error: ' . curl_error($ch);
} else {
    $http_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    echo "Status code: " . $http_code . "\n";
    $animals = json_decode($response, true);
    print_r($animals); // Display the fetched animals
}

curl_close($ch);
?>


<?php

/**
 * Update an animal by ID
 * 
 * @param string $animalId The ID of the animal to update
 * @param array $data The updated animal data
 * @return array|null The updated animal data or null on failure
 */
function updateAnimal($animalId, $data) {
    $url = "http://localhost:5000/api/animals/{$animalId}";
    
    // Initialize cURL session
    $ch = curl_init($url);
    
    // Convert data array to JSON
    $jsonData = json_encode($data);
    
    // Set cURL options
    curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "PUT");
    curl_setopt($ch, CURLOPT_POSTFIELDS, $jsonData);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_HTTPHEADER, [
        'Content-Type: application/json',
        'Content-Length: ' . strlen($jsonData)
    ]);
    
    // Execute request
    $response = curl_exec($ch);
    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    
    // Close cURL session
    curl_close($ch);
    
    // Handle response
    if ($httpCode === 200) {
        return json_decode($response, true);
    }
    
    return null;
}

/**
 * Delete an animal by ID
 * 
 * @param string $animalId The ID of the animal to delete
 * @return bool Whether the deletion was successful
 */
function deleteAnimal($animalId) {
    $url = "http://localhost:5000/api/animals/{$animalId}";
    
    // Initialize cURL session
    $ch = curl_init($url);
    
    // Set cURL options
    curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "DELETE");
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    
    // Execute request
    $response = curl_exec($ch);
    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    
    // Close cURL session
    curl_close($ch);
    
    // Return true if successful
    return $httpCode === 200;
}

// Example usage:

// Update an animal
$animalId = "ANIMAL_ID_HERE";
$updateData = [
    "name" => "Max",
    "species" => "Dog",
    "breed" => "Golden Retriever",
    "age" => 3,
    "price" => 1000,
    "healthStatus" => "Excellent",
    "description" => "Friendly family dog",
    "foodExpense" => 150,
    "medicalBill" => 200,
    "deliveryDate" => "2025-02-01"
];

$updatedAnimal = updateAnimal($animalId, $updateData);
if ($updatedAnimal) {
    echo "Animal updated successfully:\n";
    print_r($updatedAnimal);
} else {
    echo "Failed to update animal\n";
}

// Delete an animal
$animalId = "ANIMAL_ID_HERE"; 
if (deleteAnimal($animalId)) {
    echo "Animal deleted successfully\n";
} else {
    echo "Failed to delete animal\n";
}





