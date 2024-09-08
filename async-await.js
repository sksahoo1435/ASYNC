document.getElementById('asyncButton').addEventListener('click', async function() {
    try {
        document.getElementById('result').innerText = "Loading...";
        const data = await fetchDataWithAsyncAwait();
        document.getElementById('result').innerText = data.map(post => post.title).join("\n");
    } catch (error) {
        document.getElementById('result').innerText = `Error: ${error.message}`;
    }
});

async function fetchDataWithAsyncAwait() {
    try {
        const response = await fetch('https://dummyjson.com/posts');
        if (!response.ok) {
            throw new Error("An error occurred while fetching the data");
        }
        const data = await response.json();
        return data.posts;
    } catch (error) {
        throw new Error("Failed to fetch data: " + error.message);
    }
}
