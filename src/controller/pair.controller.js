function shuffle() {
    var allPaired = false;
    let pairCounter = 0;
    var pairedList = [
        [0, 0, 0]
    ]

    //Checks if the amount of participants is odd. If odd error
    if (usersInformation.length % 2 != 0) {
        console.error("THERE CAN NOT BE A ODD NUMBER OF USERS.")
    } else {
        while (allPaired == false) {
            usersInformation.forEach(uInfoArray => {


                //     pairedList.push([assignment,uID1,uID2])
                var pairingAssignment = (Math.random() * usersInformation.length) / 2;
                // cheaks if pairing exists at assign# if exist it populates 1st than 2nd. If populated ingores and rerolls
                checkAssignment(uInfoArray, pairedList, pairingAssignment);

                //pairedList[pairingAssignment][pairedList.fill(uInfoArray[0], 0, 0)]

            });
            pairCounter++;
            //Breaks while loop if usersInformation Sorted Bool = True

            if (pairCounter == usersInformation.length) {
                allPaired = true;
            }

        };
    }




    document.getElementById('Shuffle-Overlay-Wrapper').innerHTML = `
        <div id="Shuffle-Overlay ">
            <img src="./res/marry_christmas.webp" >
            <p>Emails Sent! Thank you for using Christmas Shuffle.</p>
            <button onclick="shuffleReset();">Shuffle Again</button>
        </div>
        `;
    document.querySelector('body').classList.add('lock-scroll');

    document.getElementById('Shuffle-Overlay-Wrapper').classList.remove('hidden');
    document.getElementById('Input-Overlay-Guard').classList.remove('hidden');

}

function checkAssignment(uInfoArray, pairedList, pairingAssignment) {
    var paired = false;
    console.log("Pairedlist called");


    pairedList.forEach(pairing => {

        pairingBreak: if (pairing[0] == pairingAssignment) {
            console.log(pairing[0] + " | " + pairingAssignment);

            paired = true;
            if (pairing[1] == null) {
                pairing.fill(uInfoArray[0], 1, 1);
                break pairingBreak;
            } else if (pairing[2] == null) {
                pairing.fill(uInfoArray[0], 2, 2);
                break pairingBreak;
                //ignore and reroll assignment
            }



        }
    })

    if (paired = false) {
        pairedList.push([pairingAssignment, uInfoArray[0], null])
        paired = true;
    }
    console.log(pairedList);

};