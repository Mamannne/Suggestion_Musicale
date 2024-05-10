const data = { 'test': 'test' };
fetch('http://localhost:3000/api', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
}).then(response => {
    console.log(response);
});
//# sourceMappingURL=app.js.map