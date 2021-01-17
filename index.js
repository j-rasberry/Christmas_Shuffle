const mail = require('nodemailer');
const express = require('express');
const app = new express();
const port = 3000;
const PATH = require('path');
const bodyParser = require("body-parser");
const {
    userInfo
} = require('os');

var userInput = []
require('dotenv').config();


app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

app.use('/', express.static(__dirname + "/src"));

// app.get('/', function (req, res) {
//     //app.send(index.html)
// })

app.get('/get/info', (req, res) => {
    res.send(userInput)
})

app.post('/api', (req, res, next) => {


        // var tu = "userInfo_" + req.body.totalUsers;
        // for (let i = 0; i < (req.body.totalUsers - 1); i++) {
        //     req.body.userInfo_i;


        // }
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
        while (sorting) {
            entry1 = Math.floor(Math.random() * sortedUserInfo.length);
            entry2 = Math.floor(Math.random() * sortedUserInfo.length);
            console.log(entry1 + ":" + entry2);
            // if (entry1 == 12 || entry2 == 12) {
            //     sorting = false
            // }
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
        console.log(pairedUserInfo);

        //clear all arrays once processed
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


// //Checks if the amount of participants is odd. If odd error
// if (usersInformation.length % 2 != 0) {
//     console.error("THERE CAN NOT BE A ODD NUMBER OF USERS.")
//     }    else {
//     while (allPaired == false) {
//         console.log(usersInformation);

//         for (let i = 0; i < usersInformation.length; i++) {

//             uInfoArray = usersInformation[i][0];

//             console.log("called" + i);

//             //   pairedList.push([assignment,uID1,uID2])
//             var pairingAssignment = (Math.random() * usersInformation.length) / 2;
//             // cheaks if pairing exists at assign# if exist it populates 1st than 2nd. If populated ingores and rerolls
//             checkAssignment(uInfoArray, pairedList, pairingAssignment);
//             usersInformation[i][3] = true;

//         }

//         pairCounter++;
//         //Breaks while loop if usersInformation Sorted Bool = True

//         if (pairCounter == usersInformation.length) {
//             allPaired = true;
//         }

//     };
// }