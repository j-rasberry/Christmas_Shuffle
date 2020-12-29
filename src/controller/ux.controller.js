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
            <img src="https://media.giphy.com/media/3o6fJdYXEvMa5ZmlI4/source.gif" >
            <p>Emails Sent! Thank you for using Christmas Shuffle.</p>
            <button onclick="shuffleReset();">Shuffle Again</button>
        </div>
        `;
    document.getElementById('Shuffle-Overlay-Wrapper').classList.remove('hidden');
    document.getElementById('Input-Overlay-Guard').classList.remove('hidden');

}

function shuffleReset() {
    document.getElementById('Shuffle-Overlay-Wrapper').innerHTML = "";
    document.getElementById('Shuffle-Overlay-Wrapper').classList.add('hidden');
    document.getElementById('Input-Overlay-Guard').classList.add('hidden');

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
        <div id="Help-Overlay ">
        
            <p>Help Information</p>
            <button onclick="helpReset();">Done</button>
        </div>
        `;
    document.getElementById('Help-Overlay-Wrapper').classList.remove('hidden');
}

function helpReset() {
    document.getElementById('Help-Overlay-Wrapper').innerHTML = "";
    document.getElementById('Help-Overlay-Wrapper').classList.add('hidden');


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