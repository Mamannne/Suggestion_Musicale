import express from 'express';
const app = express();
app.get('/api', (req, res) => {
    res.send('Hello World!');
});
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
//# sourceMappingURL=server.js.map