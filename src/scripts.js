const $ = require("jquery");

$('form').submit((event) => {
    var userEmail = $('#email').val();
    console.log(userEmail);
    event.preventDefault();
    $.ajax({
        url: '/',
        type: 'POST',
        data: {
            email: userEmail
        },
        success: (response) => {
            console.log(response);
        }
    });
});

