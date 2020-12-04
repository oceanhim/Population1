let Cottage = initBuilding("Cottage",1,10,0,10);
let Hut = initBuilding("Hut",5,15,30,20);
let Clinic = initBuilding("Clinic",15,25,50,30);
let Well = initBuilding("Well",30,50,100,60);
let taxCollecter = initBuilding("Tax Building",50,100,200,135);


function initBuilding(Name, minDmg, maxDmg, Cost, value){
        return {
            Name : Name,
            minDamage : minDmg,
            maxDamage : maxDmg,
            Cost : Cost,
            SellAmount : value
        };
}