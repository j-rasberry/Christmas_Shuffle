const mail = require('nodemailer');
const express = require('express');
const app = new express();
const port = 3000;
const PATH = require('path');
const bodyParser = require("body-parser");

var userInput = []
require('dotenv').config();


app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

app.use('/', express.static(__dirname + "/src"));

app.get('/get/info', (req, res) => {
    res.send(userInput)
})

app.post('/api', (req, res, next) => {
        var reqUserInfo = []
        var sortedUserInfo = []
        reqUserInfo = req.body.userInfo;


        for (let i = 0; i < reqUserInfo.length; i++) {

            if (i % 2 == 0) {
                sortedUserInfo.push([i, reqUserInfo[i], reqUserInfo[i + 1], false])
            }
        }
        var entry1, entry2 = 0;
        var sorting = true;
        var pairedUserInfo = [];
        pairedCounter = 0;
        //Checks if the amount of participants is odd. If odd error
        if (sortedUserInfo.length % 2 != 0) {
            while (sorting) {
                entry1 = Math.floor(Math.random() * sortedUserInfo.length);
                entry2 = Math.floor(Math.random() * sortedUserInfo.length);
                console.log(entry1 + ":" + entry2);
                if (entry1 == sortedUserInfo.length || entry2 == sortedUserInfo.length) {
                    sorting = false
                }
                if (sortedUserInfo[entry1][3] == false && sortedUserInfo[entry2][3] == false && sortedUserInfo[entry1][0] != sortedUserInfo[entry2][0]) {
                    pairedUserInfo.push([sortedUserInfo[entry1][1], sortedUserInfo[entry1][2], sortedUserInfo[entry2][1], sortedUserInfo[entry2][2]])
                    sortedUserInfo[entry1][3] = true
                    sortedUserInfo[entry2][3] = true
                    pairedCounter += 2;
                    console.log("I can pair these 2");
                    if (pairedCounter == sortedUserInfo.length) {
                        sorting = false;
                    }
                }

            }
        }
        console.log(pairedUserInfo);

        //TODO: clear all arrays once processed
        next()

    },
    function (req, res) {

        res.redirect("./..")
    })

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

var transport = mail.createTransport({
    host: process.env.transport_host_name,
    port: process.env.transport_port,
    auth: {
        user: process.env.transport_auth_user,
        pass: process.env.transport_auth_pass
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