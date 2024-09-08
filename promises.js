document.getElementById('fetchDataBtn').addEventListener('click', () => {
    const resultDiv = document.getElementById('resultDiv');
    resultDiv.textContent = 'Loading...';

    const fetchData = new Promise((resolve, reject) => {
        const timeout = setTimeout(() => {
            reject('Operation timed out');
        }, 5000);

        fetch('https://dummyjson.com/posts')
            .then(response => {
                clearTimeout(timeout);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => resolve(data.posts))
            .catch(err => reject(err.message));
    });

    fetchData
        .then(data => {
            resultDiv.innerHTML = data.map(item => item.title).join('<br>');
        })
        .catch(error => {
            resultDiv.textContent = error;
            resultDiv.classList.add('error');
        });
});
