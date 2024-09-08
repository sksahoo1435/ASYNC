// Add event listener to the button with ID 'asyncButton'
document.getElementById('asyncButton').addEventListener('click', async function() {
    try {
        // Display loading text while fetching data
        document.getElementById('result').innerText = "Loading...";
        // Fetch data using the async/await function
        const data = await fetchDataWithAsyncAwait();
        // Display the titles from the fetched data
        document.getElementById('result').innerText = data.map(post => post.title).join("\n");
    } catch (error) {
        // Display error message if an exception occurs
        document.getElementById('result').innerText = `Error: ${error.message}`;
    }
});

// Async function to fetch data with async/await
async function fetchDataWithAsyncAwait() {
    try {
        // Fetch data from the API
        const response = await fetch('https://dummyjson.com/posts');
        // Check if the response is ok
        if (!response.ok) {
            throw new Error("An error occurred while fetching the data");
        }
        // Parse the response JSON
        const data = await response.json();
        // Return the posts data
        return data.posts;
    } catch (error) {
        // Throw a new error with a message if fetching fails
        throw new Error("Failed to fetch data: " + error.message);
    }
}
