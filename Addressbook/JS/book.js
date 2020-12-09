class Contact{
    constructor(firstName, lastName, phone, email){
        this.FirstName = firstName;
        this.LastName = lastName;
        this.Phone = phone;
        this.Email = email;
    }

    Displayname(){
        return this.FirstName + " " + this.LastName
    }
}
let Contacts = [];


function AddContact(firstname, lastname, phone, email){
    Contacts.push(new Contact(firstname, lastname, phone, email));
}


function find(what){
    return  Contacts.filter(item => item.FirstName.includes(what) || item.LastName.includes(what) || item.Phone.includes(what) || item.Email.includes(what));
}

