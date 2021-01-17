var totalUsers = 0;

function addUser() {




    document.getElementById('user-info-form').insertAdjacentHTML('beforeend', `
    <div class='user'>
    <input type='text' id='username_` + totalUsers + `' name='userInfo'  placeholder=' Username ' autocomplete="off" value="asedf` + totalUsers + `"> 
    <input type='email' id='email_` + totalUsers + `' name='userInfo' placeholder=' Email Address ' autocomplete="off" value="asdf@email` + totalUsers + `">
    </div>
    `)
    totalUsers++;


}

function shuffle() {
    document.getElementById('user-info-form').insertAdjacentHTML('beforeend', `
<input type='text' value='` + totalUsers + `' name='totalUsers' hidden'> 
`)
    document.getElementById('user-info-form').submit();
}

// Overlay Functions
function overlay(overlayID) {
    var content = "";
    switch (overlayID) {
        case "Help-Overlay-Wrapper":
            content = `
            <section id="help-overlay-body-wrapper" class="scroll-none">
            <h1 id="help-overlay-header">Help</h1>
                <h2>What is Christmas Shuffle?</h2>
                <p>Christmas Shuffle is an easy and intuitive way to organize a secret santa meetup. A big problem with
                    secret santa that comes up when setting it up is that if everyone can't meet at once to draw names
                    then
                    its difficult to secretly give all particpants their gift buddies name. Christmas Shuffle aims to
                    solve
                    that problem. Gone are the days of </p>
                <h2>How Does Christmas Shuffle work?</h2>
                <p>Christmas Shuffle takes the names and emails of all the participants in a group. It uses a
                    randomization
                    algorithm to randomly generate a list of groups of two users. Soon after the shuffle is complete the
                    an
                    email will be sent to all of the participants with the name of the partner and any further
                    information
                    that you would like to add.</p>
                <h2>How to use Christmas Shuffle?</h2>
                To add a participant to the group, click the big yellow button on the top left corner of the screen. A
                box
                will appear with a placeholder name and email address. Double click the text of the item you would like
                to
                edit and type. To confirm the information that you have entered simply click off anywhere on the page.
                <h3>Other Help Information</h3>
            </section>
        
            <button onclick="overlayReset('` + overlayID + `');">Done</button>`
            overlayDisplay(overlayID, content);
            break;
        case "Shuffle-Overlay-Wrapper":
            content = `
            <div id="Shuffle-Overlay ">
                <img src="./res/marry_christmas.webp" >
                <p>Emails Sent! Thank you for using Christmas Shuffle.</p>
                <button onclick="overlayReset('` + overlayID + `');">Shuffle Again</button>
            </div>
            `;
            overlayDisplay(overlayID, content);
            break;
        case "Reset-Overlay-Wrapper":
            content = `
                <div id="Reset-Overlay ">
              <h1>Are you sure you want to reset?</h1>
              <div id="button-array">
              <input type="button" value="yes" onclick="setReset(true,` + isChecked(document.getElementById('areyousurecheckbox')) + `);">
              <input type="button" value="no"  onclick="overlayReset('` + overlayID + `')">
              <p> Do not ask me again.
              <input type="checkbox" name="" id="areyousurecheckbox" onclick="toggleChecked()"></p>
              </div>
                    <button onclick="overlayReset('` + overlayID + `');">Close</button>
                </div>
                `;
            overlayDisplay(overlayID, content);
            break;
        default:
            break;
    }


}

function overlayDisplay(overlayID, overlayContent) {
    console.log(overlayID);
    document.getElementById("Overlay-Wrapper").innerHTML += `<div id="` + overlayID + `" class="Overlay hidden">
    </div>`;
    document.getElementById(overlayID).innerHTML = overlayContent;

    document.getElementById(overlayID).classList.remove('hidden');
    document.querySelector('body').classList.add('lock-scroll');
    document.getElementById('Input-Overlay-Guard').classList.remove('hidden');
}

function overlayReset(overlayID) {
    document.getElementById(overlayID).innerHTML = "";
    document.getElementById(overlayID).classList.add('hidden');
    document.getElementById('Input-Overlay-Guard').classList.add('hidden');
    document.querySelector('body').classList.remove('lock-scroll');
}








var doNotAskAgainReset = false;

function isChecked(checkboxID) {
    if (checkboxID == true) {
        console.log("true");

        return true;

    } else {
        console.log("false");

        return false;
    }
}

function setReset(areyousure, areyousuretoggle) {
    doNotAskAgainReset = areyousuretoggle;
}

function toggleChecked() {
    if (isChecked(document.getElementById('areyousurecheckbox')) == true) {
        document.getElementById('areyousurecheckbox') = false;
    } else if (isChecked(document.getElementById('areyousurecheckbox')) == false) {
        document.getElementById('areyousurecheckbox') = true;
    }
}



function reset() {
    totalUsers = 0;

    if (isChecked(document.getElementById('areyousurecheckbox')) == false || doNotAskAgainReset == true) {
        overlay("Reset-Overlay-Wrapper");


    } else {

    }

};