document.addEventListener('DOMContentLoaded', () => {
    const assignBtn = document.getElementById('assignBtn');
    const unassignBtn = document.getElementById('unassignBtn');
    const resultDiv = document.getElementById('result');

    const handleAction = (action) => {
        const customerId = document.getElementById('customerId').value.trim();
        if (!customerId) {
            resultDiv.innerText = "Customer ID is required.";
            return;
        }

        fetch('http://localhost/pet-adoption-app/backend/routes/customerCheck.php', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ customerId, action })
        })
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                resultDiv.innerText = `Error: ${data.error}`;
            } else {
                resultDiv.innerText = `Success: ${data.message} (Employee: ${data.employee}, Customer ID: ${data.customerId})`;
            }
        })
        .catch(err => {
            resultDiv.innerText = `Error: ${err.message}`;
        });
    };

    assignBtn.addEventListener('click', () => handleAction('assign'));
    unassignBtn.addEventListener('click', () => handleAction('unassign'));
});
