// Add event listener to the button with ID 'fetchDataBtn'
document.getElementById('fetchDataBtn').addEventListener('click', () => {
    // Get the result div element
    const resultDiv = document.getElementById('resultDiv');
    // Display loading text while fetching data
    resultDiv.textContent = 'Loading...';

    // Create a new Promise to fetch data
    const fetchData = new Promise((resolve, reject) => {
        // Set a timeout to reject the promise if operation takes too long
        const timeout = setTimeout(() => {
            reject('Operation timed out');
        }, 5000);

        // Fetch data from the API
        fetch('https://dummyjson.com/posts')
            .then(response => {
                // Clear the timeout if response is received
                clearTimeout(timeout);
                // Check if the network response is ok
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                // Return the response as JSON
                return response.json();
            })
            .then(data => resolve(data.posts)) // Resolve with the posts data
            .catch(err => reject(err.message)); // Reject if an error occurs
    });

    // Handle the resolved or rejected promise
    fetchData
        .then(data => {
            // Map the titles from the posts and display them in the result div
            resultDiv.innerHTML = data.map(item => item.title).join('<br>');
        })
        .catch(error => {
            // Display error message if promise is rejected
            resultDiv.textContent = error;
            // Add an error class for styling if needed
            resultDiv.classList.add('error');
        });
});
