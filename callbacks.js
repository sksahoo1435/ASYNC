// Add event listener to the button with ID 'callbackButton'
document.getElementById('callbackButton').addEventListener('click', function() {
    // Execute a function after a delay of 5 seconds
    executeAfterDelay(function() {
        document.getElementById('result').innerText = "Callback executed after 5 seconds";
    }, 5000);
});

// Function to execute a callback after a specified delay
function executeAfterDelay(callback, delay) {
    setTimeout(callback, delay);
}

// Add another event listener to the button with ID 'callbackButton'
document.getElementById('callbackButton').addEventListener('click', function() {
    // Fetch data from the API and display the results
    fetchData(function(data) {
        document.getElementById('result').innerText = data.map(post => post.title).join("\n");
    });
});

// Function to fetch data from the API and execute a callback with the result
function fetchData(callback) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://dummyjson.com/posts', true);
    xhr.onload = function() {
        if (xhr.status === 200) {
            // Parse the response and call the callback with the posts data
            const data = JSON.parse(xhr.responseText);
            callback(data.posts); 
        }
    };
    xhr.send();
}
