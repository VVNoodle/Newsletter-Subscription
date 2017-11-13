const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// API Key: a76c33bd41aa20886eb678780671169c-us17 

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
        url: 'https://us17.api.mailchimp.com/3.0/lists/ab1c57f800/members',
        headers:
        {
            'postman-token': '4cf6bcc2-6cb9-c8a6-37a8-3ab693c5d9bb',
            'cache-control': 'no-cache',
            authorization: 'Basic YW55c3RyaW5nOmE3NmMzM2JkNDFhYTIwODg2ZWI2Nzg3ODA2NzExNjljLXVzMTc=',
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
