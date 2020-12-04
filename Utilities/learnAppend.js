function learnAppend(){
    let conta = document.getElementById("ItemsInShop");
    conta.innerHTML = '';
    Store.Inventory.forEach(element => {
        let mydiv = document.createElement("div");
        let myspan= document.createElement("span");
        let mybutton= document.createElement("input");
            mybutton.classList.add('tooltip');
            mybutton.type='button';
            mybutton.value = "Buy " + element.Name
            mybutton.addEventListener("click", (e)=>{BuyItem(element);})
            myspan.textContent = `Buy for ${element.Cost} Gold:`;
            
        mydiv.appendChild(myspan);
        mydiv.appendChild(mybutton);
        conta.appendChild(mydiv);      
    });
}