const data = { 'artiste': 'Drake', 'titre': 'IDGAF' };
fetch('http://localhost:3000/post', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
}).then(response => {
    // return the response body as JSON
    return response.json();
}).then(data => {
    // process the JSON data
    console.log(data);
}).catch(error => {
    // handle errors
    console.error('Error:', error);
});
setTimeout(() => {
    fetch('http://localhost:5000/BEST', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
    }).then(response => {
        // return the response body as JSON
        console.log(response);
        return response.json();
    }).then(data => {
        // process the JSON data
        const best = data['best_suggest'];
        console.log(best);
        console.log(best);
    }).catch(error => {
        // handle errors
        console.error('Error:', error);
    });
}, 30000);
//# sourceMappingURL=app.js.map