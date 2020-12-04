//Human stats

    //variables defined

        //Game Components

        //Food defined

let Steak = {}
Steak.Hunger = 90
Steak.Cost = 30
Steak.Name = "Steak"
let Cereal = {}
Cereal.Hunger = 20
Cereal.Cost = 10
Cereal.Name = "Cereal"
let Madeleine = {}
Madeleine.Hunger = 10
Madeleine.Cost = 2
Madeleine.Name = "Madeleine"
let Cookie = {}
Cookie.Hunger = 30
Cookie.Cost = 6
Cookie.Name = "Cookie"
let Spaghetti = {}
Spaghetti.Hunger = 60
Spaghetti.Cost = 13
Spaghetti.Name = "Spaghetti"
let SpaghettiWithMeatballs = {}
SpaghettiWithMeatballs.Hunger = 70
SpaghettiWithMeatballs.Cost = 26
SpaghettiWithMeatballs.Name = "Spaghetti With Meatballs"
let CannedFood = {}
CannedFood.Hunger = 35
CannedFood.Cost = 15
CannedFood.Name = "CannedFood.Name" 

        //Drinks defined

let CupOfWater = {}
CupOfWater.Thirst = 7
CupOfWater.Name = "Cup Of Water"
let BottleOfWater = {}
BottleOfWater.Thrist = 13
BottleOfWater.Cost = 2
BottleOfWater.Name = "Bottle Of Water"
let GallonOfWater = {}
GallonOfWater.Thirst = 50
GallonOfWater.Cost = 12
GallonOfWater.Name = "Gallon Of Water"
let SodaCan = {}
SodaCan.Thirst = 6
SodaCan.Cost = 5
SodaCan.Name = "Soda Can"
let BottleOfSoda = {}
BottleOfSoda.Thirst = 11
BottleOfSoda.Cost = 10
BottleOfSoda.Name = "Bottle Of Soda" 

        //Stores defined

let AllConsumablesForRestocking = [Steak, Cereal, Madeleine, Cookie, SpaghettiWithMeatballs, Spaghetti, CannedFood, CupOfWater, BottleOfSoda, BottleOfWater, GallonOfWater, SodaCan]

let Safeway = {}
Safeway.Inventory = [Steak, Cereal, Madeleine, Cookie, SpaghettiWithMeatballs, Spaghetti, CannedFood, CupOfWater, BottleOfSoda, BottleOfWater, GallonOfWater, SodaCan]
Safeway.Fame = 10000
Safeway.SqaureFootage = 20000 

let humans = [
    initHuman("Jill",51,120,100,100000,"Surgeon", 100, 30,[BottleOfWater, Madeleine, Cookie],true),
    initHuman("Joe",50,150,100,100000,"Elite Programmer", 100, 30,[BottleOfWater, Madeleine, Cookie],true),
    initHuman("Felix",13,90,100,200,"none", 100, 30,[BottleOfWater, Madeleine, Cookie],true),
    initHuman("Aria",13,80,100,200,"none",100,30,[BottleOfWater, Madeleine, Cookie],true)
];

let HumanMother = humans[0];
let HumanFather = humans[1];
let HumanSon = humans[2];
let HumanDaughter = humans[3];

function initHuman(Name, Age, Weight, Health, Money, Job, Hunger, Water, Inventory, Alive){
        return {
            Name : Name,
            Age : Age,
            Weight : Weight,
            Health : Health,
            Money : Money,
            Job : Job,
            Hunger : Hunger,
            Water : Water,
            Inventory : Inventory,
            Alive : Alive
        };
}

function getpromptResponse(promptText){
  let promptResponse = prompt(promptText);
  if (promptResponse == null || promptResponse == "") {
      return "";
  } else {
      return promptResponse;
  }
}
function addContact() {
  HumanFather.Name = getpromptResponse("The Father's Name:")
  HumanMother.Name = getpromptResponse("The Mother's Name:")
  HumanDaughter.Name = getpromptResponse("The Daughter's Name:")
  HumanSon.Name = getpromptResponse("The Son's Name:")

  if(isNaN(HumanMother.Name) && isNaN(HumanFather.Name) && isNaN(HumanSon.Name) && isNaN(HumanDaughter.Name)){
    alert("Nice Pick!")
  }
  else{
      alert("please enter valid data");
      addContact();
  }

  // if (typeof(Storage) !== "undefined") {
  //     // Store
  //     localStorage.setItem("ContactsBucket", Contacts);
  // }
}

// function FamilyMemberNameCreationFather() {
//     let NameChoosing;
//     let person = prompt("The Dad's Name:");
//     if (person == null || person == "") {
//       NameChoosing = "User cancelled the prompt.";
//     } else {
//       NameChoosing = "Good Pick! " + person + "is the Dad's name!";
//     }
//     HumanFather.Name = person
// }

// function FamilyMemberNameCreationMother() {
//     let NameChoosing;
//     let person = prompt("The Mothers Name:");
//     if (person == null || person == "") {
//       NameChoosing = "User cancelled the prompt.";
//     } else {
//       NameChoosing = "Good Pick! " + person + "is the Mothers name!";
//     }
//     HumanMother.Name = person
// }

// function FamilyMemberNameCreationSon() {
//     let NameChoosing;
//     let person = prompt("The Son's Name:");
//     if (person == null || person == "") {
//       NameChoosing = "User cancelled the prompt.";
//     } else {
//       NameChoosing = "Good Pick! " + person + "is the Son's name!";
//     }
//     HumanSon.Name = person
// }

// function FamilyMemberNameCreationDaughter() {
//     let NameChoosing;
//     let person = prompt("The Daughter's Name:");
//     if (person == null || person == "") {
//       NameChoosing = "User cancelled the prompt.";
//     } else {
//       NameChoosing = "Good Pick! " + person + "is the Daughter's name!";
//     }
//     HumanDaughter.Name = person
// }

// FamilyMemberNameCreationFather();
// FamilyMemberNameCreationMother();
// FamilyMemberNameCreationSon();
// FamilyMemberNameCreationDaughter();

addContact();

//Game loops

setInterval(UpdateHumans, 100)
setInterval(checkFoodAndWater, 100)
let ShelfRestock = setInterval(ReStockSafeway, 3000)
setInterval(isHumanDead, 100)
// setInterval(WorkOnAndOff, 21000)

function UpdateHumans() {
    return HumanMother && HumanSon && HumanFather && HumanDaughter
}

// let HumanWorkingMother = false
// let HumanWorkingFather = false
// let SurgeonSalary = 200
// let EliteProgrammerSalary = 300

// function WorkOnAndOff() {
//     if (HumanWorkingMother == false) {
//         HumanWorkingMother = true
//     } else {
//         HumanWorkingMother = false
//     }

//     if (HumanWorkingFather == false) {
//         HumanWorkingFather = true
//     } else {
//         HumanWorkingFather = false
//     }
    
//     setInterval(CollectSalaryPro, 2000)
//     // if (HumanWorkingFather == true) {
//     //     setInterval(CollectSalaryPro, 2000)
//     // }

//     // // if (HumanWorkingMother == true) {
//     // //     let FatherCollectingSalary
//     // //     FatherCollectingSalary = setInterval(CollectSalarySur, 2000)
//     // // }

//     // // if (HumanWorkingFather == false) {
//     // //     clearInterval(FatherCollectingSalary)
//     // // }
//     //console.log(`After the parents shift, they now have ${HumanFather.Money + HumanMother.Money} together`)
// }

// function CollectSalaryPro() {   
//     if (HumanWorkingFather = true) {
//         HumanFather.Money += EliteProgrammerSalar
//     }
// }

// function CollectSalarySur() {
//     if (HumanWorkingMother = true) {
//         HumanMother.Money += SurgeonSalary
//     }
// }

function checkFoodAndWater() {
    humans.forEach(a =>{if(a.Hunger <=0 || a.Water <=0) a.Health=0});

    return;
}

//Restocking the stores

//Fix this function
function ReStockSafeway() {
  if (Safeway.Inventory.length <= 36) {
    clearInterval(ShelfRestock)
  } else {
    Safeway.Inventory.push(Steak, Cereal, Madeleine, Cookie, SpaghettiWithMeatballs, Spaghetti, CannedFood, CupOfWater, BottleOfSoda, BottleOfWater, GallonOfWater, SodaCan)
    console.log(`These are the items in Safeway currently available to buy: ${Safeway.Inventory}`) 
  }

}

function isHumanDead() {
    humans.forEach(a =>{if(a.Health <=0) a.Alive = false});
    humans.forEach(a =>{if(a.Health <=0) console.log(`${a.Name} has died!`)});
}

function ShowFamily() {
    let FamilyPhotos = document.getElementById("FamilyImagesAndLabels")
    if (FamilyPhotos.style.display == "none") {
        FamilyPhotos.style.display = "block"
    } else {
        FamilyPhotos.style.display = "none"
    }
}

function ForceRestock() {
  Safeway.Inventory.push(Steak, Cereal, Madeleine, Cookie, SpaghettiWithMeatballs, Spaghetti, CannedFood, CupOfWater, BottleOfSoda, BottleOfWater, GallonOfWater, SodaCan)
  console.log(`These are the items in Safeway currently available to buy: ${Safeway.Inventory}`) 
}