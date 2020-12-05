
/* Logging in
---------------------------------------------------------------------------------------------*/

function login() {
    let creationDivEnter = document.getElementById("userInfoLoginDiv")
    if(creationDivEnter.style.display == "none") {
        creationDivEnter.style.display = "block"
    } else {
        creationDivEnter.style.display = "none"
    }
}

let loginAttempt = 0
let loggedIn = false
localStorage.setItem("loggedInYesOrNo", loggedIn)

function checkEnter() {
    let userNametxtEnter = document.getElementById("usernametxtboxEnter").value
    let passwordtxtEnter = document.getElementById("passwordtxtboxEnter").value
    let retrievedUser = localStorage.getItem("UserInfoPop")
    let retrievedPass = localStorage.getItem("PassInfoPop")
    if(isNaN(userNametxtEnter) && isNaN(passwordtxtEnter) && passwordtxtEnter !== '' && passwordtxtEnter !== '' && loginAttempt < 5) {
        if(userNametxtEnter == retrievedUser && passwordtxtEnter == retrievedPass) {
            alert(`Epic, You have logged in successfully! You progress in Population 1 will now be saved.`)
            loggedIn = true;
            localStorage.setItem("loggedInYesOrNo", loggedIn)
            warrningToggle();
        } else {
            loginAttempt++;
            alert(`Please try again`)
        }
    } else {
        alert(`You have either tried to login too many times, or you have entered invalid data.`)
    }
}

/* Mod Application
---------------------------------------------------------------------------------------------*/

function refreshFrom() {
    let errorTXT = document.getElementById("errorDisplay")
    errorTXT.innerHTML = '';
}

let subCounter = 0;

function subForm() {
    let letters = ["", "a", "b", "c", "d", "e", "h"]
    let letterChooser = Math.floor((Math.random() * 6) + 1)
    let letterChooser1 = Math.floor((Math.random() * 6) + 1)
    let modID = Math.floor((Math.random() * 10000) + 1) + letters[letterChooser] + letters[letterChooser1]
    let fnametxt = document.getElementById("fnametxtbox").value
    let lnametxt = document.getElementById("lnametxtbox").value
    let div1 = document.getElementById("thxForFeedbackDiv")
    if (subCounter == 1) {
        alert(`It looks like you have already submitted an application already. Ask the admin to help you if there is a problem`)
    } else {
        if(fnametxt == '' || lnametxt == '') {
            let errorTXT = document.getElementById("errorDisplay")
            errorTXT.innerHTML = `You need to fill out all of the boxes correctly please.`
        } else {
            if (isNaN(fnametxt) || isNaN(lnametxt)) {
                div1.innerHTML = '';
                let errorTXT = document.getElementById("errorDisplay")
                errorTXT.innerHTML = '';
                div1.innerHTML = `Thank you for your application! We will notify you when we have decided.`; 
                div1.innerHTML = div1.innerHTML + ` Mod ID: ${modID}`;
                div1.style.display = "block";
                subCounter += 1
            }
        }
    }
}

/* Signing Up
---------------------------------------------------------------------------------------------*/

function signUp() {
    let creationDiv = document.getElementById("userInfoCreationDiv")
    if(creationDiv.style.display == "none") {
        creationDiv.style.display = "block"
    } else {
        creationDiv.style.display = "none"
    }
}

function subCreationInfo() {
    let userNametxt = document.getElementById("usernametxtbox").value
    let passwordtxt = document.getElementById("passwordtxtbox").value
    if(isNaN(userNametxt) && isNaN(passwordtxt) && userNametxt !== '' && passwordtxt !== '') {
        localStorage.setItem("UserInfoPop", userNametxt)
        localStorage.setItem("PassInfoPop", passwordtxt)
        alert(`Thanks for signing up! You can now log in and have your progress saved on our website!`)
    } else {
        alert(`Please enter valid data.`)
    }
}