function aidensDay() {
    console.log("Today is Aiden's day")
    setTimeout(oceansDay(), 86400000)
}

function oceansDay() {
    console.log("Today is Ocean's day")
    setTimeout(aidensDay(), 86400000)
}




setTimeout(aidensDay(), 86400000)