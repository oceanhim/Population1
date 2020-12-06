
/* Saving The Contact
--------------------------------------------------------------------------------*/
let retrievedContacts = localStorage.getItem("ContactsList");
Contacts = [];
Contacts = retrievedContacts;

ContactCount = 0;

function createContact() {
    let fnametxt = document.getElementById("txtFirstname").value;
    let lnametxt = document.getElementById("txtLastname").value;
    let phonenumbertxt = document.getElementById("txtPhone").value;
    let emailtxt = document.getElementById("txteeMAIL").value;

    if(isNaN(fnametxt) && isNaN(lnametxt)) {
        if(lnametxt !== '' || fnametxt !== '' || phonenumbertxt !== '' || emailtxt !== ''){
            if(isNaN(phonenumbertxt)) {
                alert(`Please ebter valid data.`)
            } else {
                let Contact = {}
                Contact.FirstName = fnametxt;
                Contact.PhoneNumber = phonenumbertxt;
                Contact.LastName = lnametxt;
                Contact.Email = emailtxt;
                Contacts.push(Contact);
                console.log(Contacts);
                alert(`Contact Added`)
                localStorage.setItem("ContactsList", Contacts)
                // learnAppend();
            }

        } else {
            alert(`Please enter valid data`)
        }
    } else {
        alert(`Please enter valid data`)
    }
}

function updateContactAmount() {
    ContactCount = Contacts.length;
    let spanforcount = document.getElementById("Contactcountspan");
    spanforcount.innerHTML = `Contact Count: ${ContactCount}`
}

setInterval(updateContactAmount, 100)

// learnAppend();

// function learnAppend(){
//     let conta = document.getElementById("lstContacts")
//     Contacts.forEach(element => {
//         let myselect = document.createElement("select");
//         let myoption= document.createElement("option");
//             myoption.id = "optionValue"
//             myoption.value = element.Name;
//             myoption.innerHTML = element.Name;        
        
//         myselect.appendChild(myoption);
//         conta.appendChild(myselect);  
//     });
// }

/* Testing
--------------------------------------------------------------------------------*/

// addContactToList();

// function addContactToList() {
//     let selecttag = document.getElementById("lstContacts")
//     Contacts.forEach(element => {
        
        
//     });
// }





// function cleantxtboxes(txt1, txt2, txt3, txt4) {

//     txt1 = "type here";
//     txt2 = "type here";
//     txt3 = "type here";
//     txt4 = "type here";
// }