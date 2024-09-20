document.getElementById('calculationForm').addEventListener('submit', function (event)  {
    event.preventDefault();

    const salary = document.getElementById("salary").value;
    const days = document.getElementById("days").value;

    // Validate the inputs if necessary
    if (!salary || !days) {
        document.getElementById('result').textContent = 'Please enter valid salary and days.';
        return;
    }
   
    fetch(`http://localhost:8080/calculate?a=${salary}&b=${days}`)
    .then(response => {
        // Check if response is OK (status 200-299)
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.text(); // Assuming text is returned; switch to response.json() if it's JSON
    })
    .then(data => {
        // Display the result in the <p> element
        document.getElementById('result').innerHTML = data;  // Use innerHTML to render HTML
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('result').textContent = 'Request failed. Please try again.';
    });
});
