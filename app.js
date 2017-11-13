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
    addEmailToMailchimp(req.body.email);
    res.send("success");
});

app.listen(3000, () => {
    console.log('Listening on port 3000');
})

function addEmailToMailchimp(email_address) {
    var request = require("request");

    var options = {
        method: 'POST',
        url: process.env.MAILCHIMP_URL,
        headers:
        {
            'postman-token': '4cf6bcc2-6cb9-c8a6-37a8-3ab693c5d9bb',
            'cache-control': 'no-cache',
            authorization: process.env.AUTHORIZATION,
            'content-type': 'application/json'
        },
        body: { email_address, status: 'subscribed' },
        json: true
    };

    request(options, function (error, response, body) {
        if (error) throw new Error(error);

        console.log(body);
    });
}
