const express = require('express');
const app = express();

// Middleware
app.use(express.static(__dirname + "/public"));

app.get('/d', (req, res) => {
    res.send("Hello der");
});

app.listen(3000, () => {
    console.log('Listening on port 3000');
})