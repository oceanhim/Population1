function createAccount() {
    let iD = Math.floor((Math.random() * 10000) + 1)
}

function login() {

}

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