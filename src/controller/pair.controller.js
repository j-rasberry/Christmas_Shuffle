function shuffle() {
    var allPaired = false;
    let pairCounter = 0;
    var pairedList = [
        [0, 0, 0]
    ]


    document.getElementById('user-info-form').submit();


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

    console.log(pairingAssignment);

    //console.log("Pairedlist called");


    pairedList.forEach(pairing => {
        if (pairing[0] == pairingAssignment) {
            if (pairing[1] == null) {
                pairing.fill(uInfoArray, 1, 1);
            } else if (pairing[2] == null) {
                pairing.fill(uInfoArray, 2, 2);
                //ignore and reroll assignment
            }



        }
    })

    // if (paired = false) {
    //     pairedList.push([pairingAssignment, uInfoArray[0], 0])
    //     paired = true;
    // }
    // console.log(pairedList);

};