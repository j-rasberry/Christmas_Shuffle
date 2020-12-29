const mail = require('nodemailer');
const express = require('express');
const app = new express();
const port = 3000;
const PATH = require('path');
require('dotenv').config();
app.use('/home', express.static(__dirname + "/src"));

// app.get('/', function (req, res) {
//     //app.send(index.html)
// })

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

var transport = mail.createTransport({
    host: process.env.transport_host_name,
    port: process.env.transport_port,
    auth: {
        user: transport_auth_user ,
        pass: transport_auth_pass
    }
});


var mailOptions = {
    from: '',
    to: '',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
}

// transport.sendMail(mailOptions, function (error, info) {
//     if (error) {
//         console.log(error);
//     } else {
//         console.log('Email sent: ' + info.response);
//     }
// });

console.log('Server sent message but, not really.');
