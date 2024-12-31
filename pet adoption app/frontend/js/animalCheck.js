document.addEventListener('DOMContentLoaded', () => {
    const animalCheckForm = document.getElementById('animalCheckForm');
    const resultDiv = document.getElementById('result');

    animalCheckForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const petId = document.getElementById('petId').value.trim();
        if (!petId) {
            resultDiv.innerHTML = "<p>Please enter a Pet ID.</p>";
            return;
        }

        fetch('http://localhost/pet-adoption-app/backend/routes/animalCheck.php', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ petId })
        })
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                resultDiv.innerHTML = `<p>Error: ${data.error}</p>`;
            } else {
                resultDiv.innerHTML = `
                    <h3>Animal Details</h3>
                    <p><strong>Name:</strong> ${data.name}</p>
                    <p><strong>Animal Proof Home Check:</strong> ${data.animalProofHome}</p>
                    <p><strong>Vaccination Check:</strong> ${data.vaccination}</p>
                    <p><strong>Neuter Check:</strong> ${data.neuter}</p>
                `;
            }
        })
        .catch(err => {
            resultDiv.innerHTML = `<p>Error: ${err.message}</p>`;
        });
    });
});
