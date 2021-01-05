var usersInformation = [];
var totalUsers = 0;

function initUsers() {


}

function addUser() {

    /* TODO: List of information that is needed for users.
        - Name
        - Email Address
       */


    usersInformation.push([totalUsers, "PLACEHOLDER_NAME", "PLACEHOLDER_EMAIL@EMAIL.COM"]);

    document.getElementById('users').innerHTML += `
         <div class="user">

    <div>
        <img src="" alt="">
        <h2 ondblclick="editName(` + totalUsers + `)" id="username_` + totalUsers + `">Username</h2>
        <h3 ondblclick="editEmail(` + totalUsers + `)" id="email_` + totalUsers + `">PLACEHODLER_EMAIL@EMAIL.COM<h3>
    </div>
</div>
         `

    totalUsers++;
}

function shuffle() {

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

function shuffleReset() {
    document.getElementById('Shuffle-Overlay-Wrapper').innerHTML = "";
    document.getElementById('Shuffle-Overlay-Wrapper').classList.add('hidden');
    document.getElementById('Input-Overlay-Guard').classList.add('hidden');
    document.querySelector('body').classList.remove('lock-scroll');

};


function reset() {
    totalUsers = 0;
    usersInformation = []
    document.getElementById('users').innerHTML = "";

}

//When user clicks the help button an overlay displays help information about how to use the website.

document.getElementById('help').addEventListener('click', function () {
    displayHelpInformation();
});

function displayHelpInformation() {
    document.getElementById('Help-Overlay-Wrapper').innerHTML = `
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

        <button onclick="helpReset();">Done</button> 

        `;
    document.getElementById('Help-Overlay-Wrapper').classList.remove('hidden');

    document.querySelector('body').classList.add('lock-scroll');
    document.getElementById('Input-Overlay-Guard').classList.remove('hidden');
}

function helpReset() {
    document.getElementById('Help-Overlay-Wrapper').innerHTML = "";
    document.getElementById('Help-Overlay-Wrapper').classList.add('hidden');
    document.getElementById('Input-Overlay-Guard').classList.add('hidden');
    document.querySelector('body').classList.remove('lock-scroll');


};


// edit function for user information personalization.

function editName(uId) {
    var uIdUsernamePlaceholder = document.getElementById('username_' + uId)
        .value;
    document.getElementById('username_' + uId).innerHTML =
        "<input type='text' id='active-input-username' placeholder='" + uIdUsernamePlaceholder +
        "' onfocusout='changeUsername(" + uId + ")'>";
    document.getElementById('active-input-username').focus();

}

function editEmail(uId) {
    document.getElementById('email_' + uId).innerHTML =
        "<input type='text' id='active-input-email' onfocusout='changeEmail(" + uId + ")'>";
    document.getElementById('active-input-email').focus();


}

function changeUsername(uId) {


    // TODO: Will need to set up input sanitization and invalid entry verification.
    var inputTempName = document.getElementById('active-input-username').value;
    document.getElementById('username_' + uId).innerHTML = "<h2>" + inputTempName + "</h2>";
    usersInformation[uId].splice(1, 1, inputTempName);

};

function changeEmail(uId) {


    // TODO: Will need to set up input sanitization and invalid entry verification.
    var inputTempEmail = document.getElementById('active-input-email').value;
    document.getElementById('email_' + uId).innerHTML = "<h3>" + inputTempEmail + "</h3>";
    usersInformation[uId].splice(2, 1, inputTempEmail);

};