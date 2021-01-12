const mail = require('nodemailer');
const express = require('express');
const app = new express();
const port = 3000;
const PATH = require('path');
const bodyParser = require("body-parser");

var userInput = []
require('dotenv').config();


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', express.static(__dirname + "/src"));

// app.get('/', function (req, res) {
//     //app.send(index.html)
// })

app.get('/get/info', (req,res)=>{
    res.send(userInput)
})

app.post('/api', (req,res,next)=>{
    console.log(req.body);
    userInput.push(req.body)
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