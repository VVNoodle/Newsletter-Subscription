const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Middleware
app.use(express.static(__dirname + "/public"));

// Parse appliction/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: false }));
// Parse application/json 
app.use(bodyParser.json());

app.post('/', (req, res) => {
    console.log(req.body);
    res.send("success");
});

app.listen(3000, () => {
    console.log('Listening on port 3000');
})