//House stats

let House1;
let House2;
let House3;

let houses = [
    House1 = initHouse("Apartment1",5000,0,10,1,1,200,0,false,100),
    House2 = initHouse("Apartment2",10000,0,15,1,2,250,0,false,200),
    House3 = initHouse("Apartment3",15000,0,20,2,2,350,0,false,300)
]

function initHouse(Name, Cost, CostIncrease, Quality, Bedrooms, Bathrooms, SqaureFootage, TaxesAnually, Bought, MonthlyRent){
    return {
        Name : Name,
        Cost : Cost,
        CostIncrease : CostIncrease,
        Quality : Quality,
        Bedrooms : Bedrooms,
        Bathrooms : Bathrooms,
        SqaureFootage : SqaureFootage,
        TaxesAnually : TaxesAnually,
        Bought : Bought,
        MonthlyRent : MonthlyRent 
    };
}

//When the house is bought, the monthly fee will inact/become active
function subtractMonthlyFee(a){
    if(a.Bought == true) {
        console.log(`Current Father's Balance Before Paying Rent: ${HumanFather.Money}`)
        HumanFather.Money -= a.MonthlyRent
        console.log(`Current Father's Balance After Paying Rent: ${HumanFather.Money}`)
    }    
}

function MontlyFee() {
    houses.forEach(a =>{
        subtractMonthlyFee(a);
    });
}

function UpdateHouseStats() {
    return houses;
}

function learnAppend(){
    let conta = document.getElementById("HousingMarket");
    conta.innerHTML = '';
    houses.forEach(element => {
        let mydiv = document.createElement("div");
        let mybutton= document.createElement("input");
            mybutton.classList.add('genBtn');
            mybutton.type='button';
            mybutton.value = "Buy " + element.Name
            mybutton.addEventListener("click", (e)=>{BuyHouse(element);})
            
        mydiv.appendChild(mybutton);
        conta.appendChild(mydiv);     
        
    });
}

function BuyHouse(e) {
   
    let purchaserequest = confirm(`Would you like to buy ${e.Name} for ${e.Cost}?`);
    if (purchaserequest == true) {
        e.Bought = true;
        HumanFather.Money -= e.Cost
        alert(`Nice job! You bought the ${e.Name}`)
    } else {
        alert(`User cancelled prompt`)
    }
}

function ShowHouses() {
    let HousesAvaiable = document.getElementById("HousingMarket");
    if (HousesAvaiable.style.display == "none") {
        HousesAvaiable.style.display = "block"
    } else {
        HousesAvaiable.style.display = "none";
    }
    learnAppend();
}

//Game Loops

setInterval(MontlyFee, 30000)
setInterval(UpdateHouseStats, 100)