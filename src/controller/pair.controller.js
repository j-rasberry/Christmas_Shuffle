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