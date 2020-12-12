function customGroup(message) {
    console.group();
    console.log(`----->` + message + `<-----`)
    console.groupEnd();
}

function customLog(message) {
    console.log(`----->` + message + `<-----`)
}

customLog("Ocean");
customGroup(`ocean`)