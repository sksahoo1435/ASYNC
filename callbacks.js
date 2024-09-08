document.getElementById('callbackButton').addEventListener('click', function() {
    executeAfterDelay(function() {
        document.getElementById('result').innerText = "Callback executed after 5 seconds";
    }, 5000);
});

function executeAfterDelay(callback, delay) {
    setTimeout(callback, delay);
}

document.getElementById('callbackButton').addEventListener('click', function() {
    fetchData(function(data) {
        document.getElementById('result').innerText = data.map(post => post.title).join("\n");
    });
});

function fetchData(callback) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://dummyjson.com/posts', true);
    xhr.onload = function() {
        if (xhr.status === 200) {
            const data = JSON.parse(xhr.responseText);
            callback(data.posts); 
        }
    };
    xhr.send();
}
