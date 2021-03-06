var express = require('express');

var app = express();

var PORT = process.env.PORT ||3080;
app.all('/*', function (request, response) {
    response.send('\
        <!DOCTYPE html>\
            <html lang="en">\
                <head>\
                    <meta charset="UTF-8">\
                    <title>Title</title>\
                    <base href="/">\
            </head>\
            <body>\
                <div ui-view></div>\
                <script src="bundle.js"></script>\
            </body>\
        </html>\
    ')
    
});

app.listen(PORT, function () {
    console.log('server running on ' + PORT);
});