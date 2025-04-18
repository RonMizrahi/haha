const express = require('express');
const app = express();
const port = 3000;

app.get('/haha', (req, res) => {
    res.send('HAHA');
});

app.listen(port, () => {
    console.log(`Web app listening at http://localhost:${port}`);
});
