document.getElementById('checkoutForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const district = document.getElementById('district').value;

    await fetch('http://localhost/pet-adoption-app/backend/routes/checkout.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, address, district }),
    });

    alert('Customer data saved successfully.');
});
