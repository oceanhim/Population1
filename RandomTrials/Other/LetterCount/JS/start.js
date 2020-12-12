let myArray = [];
let letterCount = 0;

function Count() {
    let txt = document.getElementById("wordinput1").value;
    let display = document.getElementById("lettercountdiv");

    if(isNaN(txt)) {
        display.innerHTML = `Characteristics in your word: <br> ${txt.length}`;
    }
}