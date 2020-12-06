/*This game is a game where the user controls a Village
* They are trying to reach certain goals and achievements 
* They cannot overpopulate their Village
* They must control crime and jobs
* Food an water must be supplied
* Upgrades can be purchased
* If I can, add a small visual
*/ 

/* Things I need to do
* I need to add achievements/goals
* I need to fix the glitch where if you build two or more of the same building and add one worker to only one of the buildings, it counts as two workers and both get a worker, like one willager at two places at once
* I am going to create classes like "Admin" and "Beta-Tester"
*/

let VillagerConsumptionTime;
/* Recource Collection
---------------------------------------------------------------------------------------------*/

let TimberHouse = initWorkStation("TimberHouse",60,7,15,40,15,2,0,0,true,0, false);
let Quarry = initWorkStation("Quarry/Stone Mine",100,5,15,50,10,2,0,0,true,0, false);
let IronMine = initWorkStation("IronMine",150,5,15,30,2,15,0,0,true,0, false);
let Farm = initWorkStation("Farm",30,5,10,30,10,0,0,0,true,0, false);
let Orchard = initWorkStation("Orchard",60,10,20,60,20,5,2,0,true,0, false);
let Tavern = initWorkStation("Tavern",70,3,20,60,25,10,3,0,true,0, false);
let WaterMill = initWorkStation("Water Mill",50,4,20,0,15,5,0,0,true,0, false);
let WaterPlantation = initWorkStation("Water Plantation",150,10,40,0,30,10,5,2,true,0, false);


let JobsArray = [TimberHouse, Quarry, IronMine, Farm, Orchard, Tavern, WaterMill, WaterPlantation]
let JobsArrayActive = [];

function initWorkStation(Name, Health, WorkSlots, Size, Capacity, BuildCostWood, BuildCostStone, BuildCostIron, BuildCostGold, Discovered, FilledWorkSlots, Built){
        return {
            Name : Name,
            Health : Health,
            WorkSlots : WorkSlots,
            Size : Size,
            Capacity : Capacity,
            BuildCostWood : BuildCostWood,
            BuildCostStone : BuildCostStone,
            BuildCostIron : BuildCostIron,
            BuildCostGold : BuildCostGold,
            Discovered : Discovered,
            FilledWorkSlots : FilledWorkSlots, 
            Built : Built
        };
}

/* Village Stats
---------------------------------------------------------------------------------------------*/

let Hut = initBuilding("Hut",5,2,10,5,5,0,0,0,true);
let Cottage = initBuilding("Cottage",20,5,15,10,10,2,0,0,true);
let Clinic = initBuilding("Clinic",30,15,50,30,25,15,10,15,true);
let Mansion = initBuilding("Mansion",1000,20,400,2000,200,150,100,100,false)
let taxCollecter = initBuilding("Tax Building",50,0,75,150,40,60,20,0,false);


function initBuilding(Name, Health, Beds, Size, Capacity, BuildCostWood, BuildCostStone, BuildCostIron, BuildCostGold, Discovered){
        return {
            Name : Name,
            Health : Health,
            Beds : Beds,
            Size : Size,
            Capacity : Capacity,
            BuildCostWood : BuildCostWood,
            BuildCostStone : BuildCostStone,
            BuildCostIron : BuildCostIron,
            BuildCostGold : BuildCostGold,
            Discovered : Discovered
        };
}

let Village = {}
Village.Name = `My Village`;
Village.Population = 1;
Village.Money = 0;
Village.AverageHappiness = 100;
Village.FoodSupply = 0
Village.WaterSupply = 0;
Village.Area = 100;
Village.AreaLeft = 100
Village.Buildings = [Hut, Cottage, WaterMill, Clinic, Mansion, taxCollecter, TimberHouse, Quarry, IronMine, Farm, Orchard, WaterPlantation];
Village.Recources = [Village.Wood, Village.Stone, Village.Iron]
Village.Wood = 20;
Village.Stone = 10;
Village.Iron = 0;
Village.Idle = 1;
Village.PopulationHighScore = 0;
Village.Idle = Village.Population;

/* Taxing
---------------------------------------------------------------------------------------------*/

function taxVillager() {
    if(VillagersTaxed < Village.Population) {
        VillagersTaxed += 1;
        taxVillagersUpdate();
    }
}

function untaxVillager() {
    if(VillagersTaxed > 0) {
        VillagersTaxed -= 1;
        taxVillagersUpdate();
    }
}

function OpenTaxingOption () {
    let taxOptions = document.getElementById("taxDiv");
    if (taxOptions.style.display == "none") {
        taxOptions.style.display = "block";
    } else {
        taxOptions.style.display = "none";
    }

    taxVillagersUpdate();
}

function taxVillagersUpdate() {
    let conta = document.getElementById("taxDiv");
    conta.innerHTML = '';
        let mydiv = document.createElement("div");
        let myspan= document.createElement("span");
        let mybutton= document.createElement("input");
        let mybutton1= document.createElement("input");
            mybutton.classList.add('bootstrap-imatation');
            mybutton1.classList.add('bootstrap-imatation');
            mybutton.type='button';
            mybutton.value = "+"
            mybutton.addEventListener("click", (e)=>{taxVillager();})
            mybutton1.type='button';
            mybutton1.value = "-"
            mybutton1.addEventListener("click", (e)=>{untaxVillager();})
            myspan.textContent = `Villagers taxed out of total Population: ${VillagersTaxed}/${Village.Population}`;
            
        mydiv.appendChild(myspan);
        mydiv.appendChild(mybutton);
        mydiv.appendChild(mybutton1);
        conta.appendChild(mydiv);      
}

/* Buy Buildings
---------------------------------------------------------------------------------------------*/

function showBuildings() {
    let buildingsp = document.getElementById("constructiondiv");
    if (buildingsp.style.display === "none") {
        buildingsp.style.display = "block";
    } else {
        buildingsp.style.display = "none";
    }

    learnAppend();
}

function learnAppend(){
    let conta = document.getElementById("constructiondiv");
    conta.innerHTML = '';   
    DiscoveredBuildings.forEach(element => {
        let mydiv = document.createElement("div");
        let mybutton= document.createElement("input");
            mybutton.classList.add('bootstrap-imatation');
            mybutton.type='button';
            mybutton.value = "Build " + element.Name
            mybutton.addEventListener("click", (e)=>{buildHome(element);})
            
        mydiv.appendChild(mybutton);
        conta.appendChild(mydiv);  
        // if(conta.style.display == "none") {
        //     conta.style.display = "block"
        // } else {
        //     conta.style.display = "none";
        // }
    });
}

/* Audio
---------------------------------------------------------------------------------------------*/

let x = document.getElementById("myAudio"); 

function playAudio() { 
  x.play(); 
} 

function pauseAudio() { 
  x.pause(); 
} 

/* Updating Game Stats and more
---------------------------------------------------------------------------------------------*/

let DiscoveredBuildings = [];

function builtOrNot() {
    JobsArray.forEach(a =>{if(a.Built == true)JobsArrayActive.push(a)});
}

function organizeBuildings() {
    DiscoveredBuildings = []
    Village.Buildings.forEach(a =>{if(a.Discovered == true)DiscoveredBuildings.push(a)});
}

function ItemDiscovered() {
    let handook = document.getElementById("handbookdiv");
    handook.innerHTML = ``;
    return Village.Buildings.forEach(a =>{if(a.Discovered == true)handook.innerHTML += `<h4>${a.Name}: ${a.BuildCostWood} wood, ${a.BuildCostStone} stone, ${a.BuildCostIron} iron, ${a.BuildCostGold} gold, ${a.Beds || a.WorkSlots} beds, (if a worker builing, this is work slots), ${a.Size} size<h4> <br>`});
}

function collectRecources() {
    Village.Wood += TimberHouse.FilledWorkSlots;
    Village.Stone += Quarry.FilledWorkSlots;
    Village.Iron += IronMine.FilledWorkSlots;
    Village.FoodSupply += Farm.FilledWorkSlots;
    Village.FoodSupply += Orchard.FilledWorkSlots * 2;
    Village.WaterSupply += WaterMill.FilledWorkSlots;
    Village.WaterSupply += WaterPlantation.FilledWorkSlots * 2;
}

function updateVillage() {
    return Village;
}

function showVillage() {
    let Villagestats = document.getElementById("statsDisplay")
    Villagestats.innerHTML = `<strong>Name: ${Village.Name} <br> Population: ${Village.Population} <br> Happiness: ${Village.AverageHappiness} <br> Food Supply: ${Village.FoodSupply} <br> Water Supply: ${Village.WaterSupply} <br> Area: ${Village.Area} <br> Area left: ${Village.AreaLeft} <br> Wood: ${Village.Wood} <br> Stone: ${Village.Stone} <br> Iron: ${Village.Iron}<br> Money: ${Village.Money} <br> Idle Villagers: ${Village.Idle} <br> Population High Score: ${Village.PopulationHighScore}<strong>`
}

function youLose() {
    if(Village.FoodSupply < Village.Population || Village.WaterSupply < Village.Population) {
        alert(`You Lost.`)
        window.location = `file:///C:/_code/JSpractices/RandomTrials/FirstOfficialWebsite/index.html`;
    } else {
        alert(`YES! Your people now have food and water. Continue`)
    }
    
}

function checkPopulation() {
    if(typeof Village.Population == String) {
        console.log(`Now`)
    }
}

function villagersEat() {
    if(Village.FoodSupply < Village.Population || Village.WaterSupply < Village.Population / 2) {
        clearInterval(VillagerConsumptionTime)
        alert(`Your people don't have enough food or water to sustain them!`)
        let deathTimeout = setTimeout(youLose, 60000)
    } else {
        Village.FoodSupply -= (Village.Population / 2);
        Village.WaterSupply -= (Village.Population / 2);
    }
}

let VillagersTaxed = 0;

function checkTaxing() {
    Village.Money += (VillagersTaxed/2)
}

// setInterval(checkAchievements, 100)

let loopCount = 0;

function gameloop(){
    loopCount++;
    // do evey 100 ms items
    organizeBuildings();
    ItemDiscovered();
    updateVillage();
    showVillage();
    checkPopulation();
    if(loopCount == 150){
        // do evey 150 ms items
        collectRecources();
        saveGame();
        checkTaxing();
        loopCount=0;
    }
}

function showVillageStats() {
    let Village = document.getElementById("villageInfo");
    if(Village.style.display == "none") {
        Village.style.display = "block"
    } else {
        Village.style.display = "none"
    }
}


/* Construction
---------------------------------------------------------------------------------------------*/

function workBuilding(item) {
    return JobsArray.find( ele => ele === item)
}

function buildHome(item) {
    if(Village.AreaLeft >= item.Size) {
        if(Village.Wood >= item.BuildCostWood && Village.Stone >= item.BuildCostStone && Village.Iron >= item.BuildCostIron) {
            if(workBuilding(item)) {
                Village.Wood -= item.BuildCostWood;
                Village.Stone -= item.BuildCostStone;
                Village.Iron -= item.BuildCostIron;
                Village.AreaLeft -= item.Size;
                JobsArrayActive.push(item);
            } else {
                Village.Wood -= item.BuildCostWood;
                Village.Stone -= item.BuildCostStone;
                Village.Iron -= item.BuildCostIron;
                Village.AreaLeft -= item.Size;
                Village.Population += item.Beds;
                Village.Idle = (Village.Population - totalWorking);
                console.log(typeof Village.Population);
                // playAudio();
            }
        }
    }
}

/* Jobs
---------------------------------------------------------------------------------------------*/

function OpenJobs () {
    let jobs = document.getElementById("jobsDiv");
    if (jobs.style.display == "none") {
        jobs.style.display = "block";
    } else {
        jobs.style.display = "none";
    }
    showJobs();
}

function subtractIdle() {
    if(Village.Idle > 0) {
        Village.Idle -= 1;
    } else {
        alert(`There are no available villagers to send.`)
    }
}

function addIdle() {
    if(Village.Idle < Village.Population) {
        Village.Idle += 1;
    } else {
        alert(`There are no available villagers to send.`)
    }
}

let totalWorking = 0;
let jobspang = document.getElementById("jobspan");

function addToJob(e) {
    if(e.FilledWorkSlots < e.WorkSlots && totalWorking < Village.Population)  {
        e.FilledWorkSlots += 1;
        totalWorking += 1;
        subtractIdle();
        showJobs();
    }
}

function subFromJob(e) {
    if(e.FilledWorkSlots > 0)  {
        e.FilledWorkSlots -= 1;
        totalWorking -= 1;
        addIdle();
        showJobs();
    }
}

function collectWood() {
    Village.Wood += 1;
    addIdle();
}

function sendVillager() {
    if(Village.Idle > 0) {
        subtractIdle();
        setTimeout(collectWood, 5000)
    }
}


function showJobs() {
    let conta = document.getElementById("nonepremadejobs");
    conta.innerHTML = '';
    JobsArrayActive.forEach(element => {
        let mydiv = document.createElement("div");
        let myspan= document.createElement("span");
        let mybutton= document.createElement("input");
        let mybutton1= document.createElement("input");
            mybutton.classList.add('bootstrap-imatation');
            mybutton1.classList.add('bootstrap-imatation');
            mybutton.type='button';
            mybutton.value = "+"
            mybutton.addEventListener("click", (e)=>{addToJob(element);})
            mybutton1.type='button';
            mybutton1.value = "-"
            mybutton1.addEventListener("click", (e)=>{subFromJob(element);})
            myspan.textContent = `${element.FilledWorkSlots}/${element.WorkSlots} Slots Filled for the ${element.Name}`;
            myspan.id="jobspan";
            
        mydiv.appendChild(myspan);
        mydiv.appendChild(mybutton);
        mydiv.appendChild(mybutton1);
        conta.appendChild(mydiv);      
    });

}

/* Achievements
---------------------------------------------------------------------------------------------*/

let SmallNeighborhood = {};
SmallNeighborhood.achievedPoint = 10
SmallNeighborhood.achieved = false;
let SmallVillage = {};
SmallVillage.achievedPoint = 20
SmallVillage.achieved = false;
let FlourishingVillage = {};
FlourishingVillage.achievedPoint = 50
FlourishingVillage.achieved = false;
let EnviedCity = {};
EnviedCity.achievedPoint = 100
EnviedCity.achieved = false;
let FamousCity = {};
FamousCity.achievedPoint = 200
FamousCity.achieved = false;
let Stocked = 500;
Stocked.achieved = false;
Stocked.completionBonus = 50;
let Lively = 1;
Lively.achieved = false;
Lively.completionBonus = 15;
let WellWaterd = 10;
WellWaterd.achieved = false;
WellWaterd.completionBonus = 15;

let achievementsPop = [SmallNeighborhood, SmallVillage, FlourishingVillage, EnviedCity, FamousCity]

//Work In progress

// function checkAchievements() {
//     achievementsPop.forEach(a =>{if(a.achievedPoint >= Village.Population && a.achieved == false)a.achieved = true, Village.Wood += a.achievedPoint, Village.Stone += a.achievedPoint, Village.Iron += a.achievedPoint, alert(`YAY! For your achivement completion, you are awarded free supplies!`)});
// }

/* Saving The Game
---------------------------------------------------------------------------------------------*/

function setPopToHighscore() {
    let highscorePop = localStorage.getItem("PopulationHighScore");
    Village.Population = highscorePop;
    Village.Idle = (Village.Population - totalWorking)
}

function saveGame() {
    if(Village.Population > Village.PopulationHighScore && loggedIn == true) {
        Village.PopulationHighScore = Village.Population;
        localStorage.setItem("PopulationHighScore", Village.PopulationHighScore);
    }
}

function autoset() {
    if(Village.Population > Village.PopulationHighScore && loggedIn == true) {
        Village.PopulationHighScore = Village.Population
        localStorage.setItem("PopulationHighScore", Village.PopulationHighScore)
    }
}

function startGame() {
    let highscorePop = localStorage.getItem("PopulationHighScore");
    Village.PopulationHighScore = highscorePop;
    warrningToggle();
}

/* Upgrades
---------------------------------------------------------------------------------------------*/
let woodBoostCommon = {};
woodBoostCommon.Name = "Common Wood Boost";
woodBoostCommon.Cost = 10;
woodBoostCommon.Boost = 50;
let woodBoostRare = {}
woodBoostRare.Name = "Rare Wood Boost";
woodBoostRare.Cost = 25;
woodBoostRare.Boost = 100;
let woodBoostLegendary = {}
woodBoostLegendary.Name = "Legendary Wood Boost";
woodBoostLegendary.Boost = 200;
woodBoostLegendary.Cost = 50;
let stoneBoostCommon = {}
stoneBoostCommon.Name = "Common Stone Boost";
stoneBoostCommon.Cost = 10;
stoneBoostCommon.Boost = 50;
let stoneBoostRare = {}
stoneBoostRare.Name = "Rare Stone Boost";
stoneBoostRare.Cost = 25;
stoneBoostRare.Boost = 100;
let stoneBoostLegendary = {}
stoneBoostLegendary.Name = "Legendary Stone Boost";
stoneBoostLegendary.Cost = 100;
stoneBoostLegendary.Boost = 250;
let ironBoostCommon = {}
ironBoostCommon.Name = "Common Iron Boost";
ironBoostCommon.Cost = 10;
ironBoostCommon.Boost = 50;
let ironBoostRare = {}
ironBoostRare.Name = "Rare Iron Boost";
ironBoostRare.Cost = 25;
ironBoostRare.Boost = 100;
let ironBoostLegendary = {}
ironBoostLegendary.Name = "Legendary Iron Boost";
ironBoostLegendary.Cost = 100;
ironBoostLegendary.Boost = 250;

let upgradesArray = [woodBoostCommon, woodBoostRare, woodBoostLegendary, stoneBoostCommon, stoneBoostRare, stoneBoostLegendary, ironBoostCommon, ironBoostRare, ironBoostLegendary]

function buyUpgrade(booster) {
    if(Village.Money >= upgrade.Cost) {
        if(booster.Name == "Common Wood Boost" || booster.Name == "Rare Wood Boost" || booster.Name == "Legendary Wood Boost") {
            Village.Wood += booster.Boost;
            Village.Money -= booster.Cost;
            Village.Money -= booster.Cost;
        }
        if(booster.Name == "Common Stone Boost" || booster.Name == "Rare Stone Boost" || booster.Name == "Legendary Stone Boost") {
            Village.Stone += booster.Boost;
            Village.Money -= booster.Cost;
        }
        if(booster.Name == "Common Iron Boost" || booster.Name == "Rare Iron Boost" || booster.Name == "Legendary Iron Boost") {
            Village.Iron += booster.Boost;
            Village.Money -= booster.Cost;
        }
    }
}

function OpenUpgrades () {
    let upgrades = document.getElementById("upgradesDiv");
    if (upgrades.style.display === "none") {
        upgrades.style.display = "block";
    } else {
        upgrades.style.display = "none";
    }

    openUpgradeOptions();
}

function openUpgradeOptions() {
    let conta = document.getElementById("upgradesDiv");
    conta.innerHTML = '';
    upgradesArray.forEach(element => {
        let mydiv = document.createElement("div");
        let mybutton= document.createElement("input");
            mybutton.classList.add('bootstrap-imatation');
            mybutton.type='button';
            mybutton.value = "Buy " + element.Name + " for " + element.Cost + " Coins which gives you a boost of " + element.Boost
            mybutton.addEventListener("click", (e)=>{buyUpgrade(element);})
            
        mydiv.appendChild(mybutton);
        conta.appendChild(mydiv);  
    });
}

/* Other
---------------------------------------------------------------------------------------------*/

function showHandbook() {
    let handook = document.getElementById("handbookDiv");
    if(handook.style.display == "none") {
        handook.style.display = "block"
    } else {
        handook.style.display = "none";
    }
}

function gameSequencesStart() {
    let startBtn = document.getElementById("startbtn")
    startBtn.style.display = "none";
    let startDiv = document.getElementById("beforeGamediv")
    startDiv.style.display = "none";
    setInterval(gameloop, 100)
    alert(`Game Started!`)
}

function warrningToggle() {
    let warningDivShow = document.getElementById("warningToLogin")
    if(loggedIn == true) {
        warningDivShow.style.display = "none"
    } else {
        warningDivShow.style.display = "block"
    }
}