function drawStstusbar(){
    document.getElementById("Contactcountspan").innerText = "Current contact count: " + Contacts.length
}


function createContact(){
    AddContact(
        document.getElementById("txtFirstname").value,
        document.getElementById("txtLastname").value,
        document.getElementById("txtPhone").value,
        document.getElementById("txteeMAIL").value
    )
    clearContactForm();
    drawStstusbar();
}
function findContacts(){
    clearlistBox();
    let items = find(document.getElementById("txtSearch").value);
    var listbox = getListBox();
    console.log(items);

    if(items.length===0){
        var option = document.createElement("option");
        option.text = "NONE FOUND";
        listbox.add(option);        
    }else{
        items.forEach(e=>{
            var option = document.createElement("option");
            option.text = e.Displayname();
            listbox.add(option);        
        })
    }

}

function getListBox(){
    return document.getElementById("lstContacts");
}

function clearContactForm(){
    document.getElementById("txtFirstname").value="";
    document.getElementById("txtLastname").value="";
    document.getElementById("txtPhone").value="";
    document.getElementById("txteeMAIL").valu="";
    document.getElementById("txtFirstname").focus();
}
function save(){
    saveToLocalStorage();
    // any ui work ?!?
}
function load(){
    loadToLocalStorage();
    clearlistBox();
    drawStstusbar();

}
function clearlistBox(){
    getListBox().innerHTML = "";
}

function saveToLocalStorage(){
    localStorage.setItem('savedContacts', JSON.stringify(Contacts));
}

function loadToLocalStorage(){
    var savedContacts = localStorage.getItem('savedContacts');
    Contacts = JSON.parse(savedContacts);
}