const data = {'artiste': 'Justine Bieber', 'titre': 'baby'};

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