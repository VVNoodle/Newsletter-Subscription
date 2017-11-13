const express = require('express');
const app = express();

// Middleware
app.use(express.static(__dirname + "/public"));

app.post('/', (req, res) => {
    res.send("success");
});

app.listen(3000, () => {
    console.log('Listening on port 3000');
})