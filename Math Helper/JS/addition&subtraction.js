

function subEquation() {
    let txt1 = document.getElementById("numb1").value;
    let txt2 = document.getElementById("numb2").value;
    let errorDis = document.getElementById("errorDisplay");
    let question = document.getElementById("+or-Div");
    if(isNaN(txt1) || isNaN(txt2) || txt1 == '' || txt2 == '') {
        errorDis.style.display = "block"
    } else {
        errorDis.style.display = "none"
        question.style.display = "block"
    }
}

function addNums() {
    let txt1 = document.getElementById("numb1").value;
    let txt2 = document.getElementById("numb2").value;
    let answer = document.getElementById("answerDisplay");
    txt1 += txt2;
    console.log(typeof txt1)
    console.log(typeof txt2);
    answer.innerHTML = txt1;
}

function subNums() {
    let txt1 = document.getElementById("numb1").value;
    let txt2 = document.getElementById("numb2").value;
    let answer = document.getElementById("answerDisplay");
    txt1 -= txt2;
    console.log(typeof txt1)
    console.log(typeof txt2);
    answer.innerHTML = txt1;
}