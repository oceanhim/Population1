//Possibly change for next attempt
let Contacts = []

function getpromptResponse(promptText){
    let promptResponse = prompt(promptText);
    if (promptResponse == null || promptResponse == "") {
        return "";
    } else {
        return promptResponse;
    }
}
function addContact() {
    let Contact = {}
    Contact.Name = getpromptResponse("The Contacts Name:")
    Contact.PhoneNumber = getpromptResponse("The Contacts Phone Number:")

    if(Contact.Name && Contact.PhoneNumber.length > 8){
        Contacts.push(Contact)
    }
    else{
        alert("please enter valid data");
    }
    learnAppend();

    // if (typeof(Storage) !== "undefined") {
    //     // Store
    //     localStorage.setItem("ContactsBucket", Contacts);
    // }
}

// function addContact2() {
//     let Contact = {}
//     Contact.Name;
//     Contact.PhoneNumber;
//     let ContactNameChoosing;
//     let person = prompt("The Contacts Name:");
//     if (person == null || person == "") {
//         ContactNameChoosing = "User cancelled the prompt.";
//     } else {
//         ContactNameChoosing = "Ok, " + person + "is the Contacts name!";
//         Contact.Name = person
//     }

//     let ContactNumberChoosing;
//     let personNum = prompt("The Contacts Phone Number:");
//     if (personNum == null || personNum == "") {
//         ContactNumberChoosing = "User cancelled the prompt.";
//     } else {
//         ContactNumberChoosing = "Ok, " + personNum + "is the Contacts Phone Number!";
//         Contact.PhoneNumber = personNum
//         Contacts.push(Contact)
//     }
    
//     learnAppend();

    
// }
function OpenContactInfo() {

}

function learnAppend(){
    let conta = document.getElementById("ContactsList");
    conta.innerHTML = '';
    Contacts.forEach(element => {
        let mydiv = document.createElement("div");
        let mybutton= document.createElement("input");
            mybutton.classList.add('contactBtn');
            mybutton.type='button';
            mybutton.value = element.Name
            mybutton.addEventListener("click", (e)=>{OpenContactInfo(element);})
            
        mydiv.appendChild(mybutton);
        conta.appendChild(mydiv);     
        
    });
}

function ForceReload() {
    learnAppend();
}

// function retrieveContactsList() {
    
//     if (typeof(Storage) !== "undefined") {
//         // Retrieve
//         localStorage.getItem("ContactsBucket");
//     }
//     learnAppend();
// }