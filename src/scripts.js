const $ = require("jquery");

$('form').submit((event) => {
    event.preventDefault();
    console.log("event called");
    $.ajax({
        url: '/',
        type: 'POST',
        data: {
            email: 'ebisma@ucsc.edu'
        },
        success: (response) => {
            console.log(response);
        }
    });
});

