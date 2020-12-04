Names = ["","Riptide","Stinger","Foe Hammer","Mithral","Basher","Arkani","Night Shadow","Clip","Goshlacor","Askavich"]

//Rarity Stats

let Common = {}
Common.Cost = 10;
Common.Durability = 10;
Common.MaxDmg = 5;
Common.MinDmg = 5;
Common.Name = "Common"

let Uncommon = {}
Uncommon.Cost = 20;
Uncommon.Durability = 20;
Uncommon.MaxDmg = 10;
Uncommon.MinDmg = 10;
Uncommon.Name = "Uncommon"

let Rare = {}
Rare.Cost = 40;
Rare.Durability = 40;
Rare.MaxDmg = 20;
Rare.MinDmg = 20;
Rare.Name = "Rare"

let Epic = {}
Epic.Cost = 60;
Epic.Durability = 60;
Epic.MaxDmg = 40;
Epic.MinDmg = 40;
Epic.Name = "Epic"

let Legendary = {}
Legendary.Cost = 100;
Legendary.Durability = 100;
Legendary.MaxDmg = 80;
Legendary.MinDmg = 80;
Legendary.Name = "Legendary"

let GodTier = {}
GodTier.Cost = 200;
GodTier.Durability = 200;
GodTier.MaxDmg = 160;
GodTier.MinDmg = 160;
GodTier.Name = "GodTier"

Rarities = ["",Common,Common,Common,Common,Common,Common,Uncommon,Uncommon,Uncommon,Uncommon,Uncommon,Rare,Rare,Rare,Rare,Epic,Epic,Epic,Legendary,Legendary,GodTier];
LootAvailable = []

let Pug = {}
Pug.Health = 50;
Pug.Speed = 10;
Pug.Name = "Pug"

//HUMAN stats

let player = {}
player.Health = 100;
player.Xp = 0;
player.Speed = 30;
player.Money = 0;
player.Name = `None given yet`;
player.Age = 21;
player.Pet = Pug;
player.Weapon = "none";
player.Class = "none";
player.Race = "human";
player.Inventory = [];

function OceansLog(message) {
    console.log(`---->` + message + `<----`)
}

function OceansAlert(message) {
    alert(`0====||------>` + message + `<------||====0`)
}

function reverseString(string) {
    let manipulatedString = string.split(""); //Split the string into an array of characters

    manipulatedString.reverse(); //Reverse the order of the array of characters

    string = manipulatedString.join("");
    OceansLog(string);

}

function showMessage(message) {
    document.getElementById('showmessagefunctdiv').textContent = message;
}

function changeh1txt() {
    let txtchangertextboxt = document.getElementById("txtchanger");
    if (txtchangertextboxt.style.display == "none") {
        txtchangertextboxt.style.display = "block"
    } else {
        txtchangertextboxt.style.display = "none"
    }

    let txtchangertextbtn = document.getElementById("SubBtn");
    if (txtchangertextbtn.style.display == "none") {
        txtchangertextbtn.style.display = "block"
    } else {
        txtchangertextbtn.style.display = "none"
    }
}

function submittxt() {
    let txtboxvalue = document.getElementById("txtchanger").value
    if (txtboxvalue == "" || txtboxvalue == null) {
        alert(`Please enter valid data`)
    } else {
        showMessage(txtboxvalue)
        console.log(txtboxvalue)
        alert(`Task completed`);
    }

}

// setInterval(paramtest, 100)

// function paramtest(Money, Age, Name) {
//     Money = 5
//     Age = 2
//     Name = "Joe"
//     let displayedMoney = document.getElementById("moneydisplay")
//     let displayedAge = document.getElementById("agedisplay")
//     let displayedName = document.getElementById("namedisplay")
//     displayedMoney.innerHTML = Money;
//     displayedAge.innerHTML = Age
//     displayedName.innerHTML = Name
// }

function createHumanRandom(Age, Money, Gender) {
    Age = Math.floor((Math.random() * 100) + 1)
    Money = Math.floor((Math.random() * 1000) + 1)
    let b = Math.floor((Math.random() * 10) + 1)
    if(b>5) {
        Gender = "Male";
    } else {
        Gender = "Female";
    }
    console.log(`Age is: ${Age}, Money is: ${Money}, Gender is ${Gender}`)
    let displayedMoney = document.getElementById("moneydisplay")
    let displayedAge = document.getElementById("agedisplay")
    let displayedName = document.getElementById("namedisplay")
    displayedMoney.innerHTML = `Money: ${Money}`;
    displayedAge.innerHTML = `Age: ${Age}`;
    displayedName.innerHTML = `Gender: ${Gender}`;  
}


function addInts(Number1, Number2) {
    let equationmat1 = document.getElementById("onenumbers").value
    let equationmat2 = document.getElementById("twonumbers").value
    if(isNaN(Number1) || isNaN(Number2)) {
        alert(`Please enter valid data`)
    } else {
        Number1 = equationmat1
        Number2 = equationmat2
        Number1 -= Number2;
        console.log(Number1)
        return Number1;
    }
}

function usercodeattempt() {
    let h1value = document.getElementById("showmessagefunctdiv")
    let equationmat1 = document.getElementById("onenumbers").value
    if(equationmat1 == "showMessage") {
        h1value.innerHTML = getpromptResponse(`What would you like the header to look like?`)
    } else {

    }
}

function getpromptResponse(promptText){
    let promptResponse = prompt(promptText);
    if (promptResponse == null || promptResponse == "") {
        return "";
    } else {
        return promptResponse;
    }
}

function akinator(Name, Age, Money) {
    let txtboxvalue1 = document.getElementById("nameinptxtbox").value
    let txtboxvalue2 = document.getElementById("agecreationtxtbox").value
    let txtboxvalue3 = document.getElementById("moneycreationtxtbox").value
    if(isNaN(txtboxvalue2) && isNaN(txtboxvalue3)) {
        alert("Please enter valid data.")
    } else {
        Name = txtboxvalue1
        Age = txtboxvalue2
        Money = txtboxvalue3
        alert("Character Created")
    }
    OceansLog(`Name: ${Name}, Age: ${Age}, Money: $${Money}`)
}

//This function RANDOMIZES the value of some variables, I need help with the randomization process.

//When a rarity is picked, I want some of the variables values to be changed accordingly
//Give a base stat system, and with each upcoming rarity, just increase it.

/*My problem is: I want to influence the values of the other variables, based on the rarity
*I don't want to haave to define each rarity 
*Then have to add another line of code 
*/



function weaponCreator(NameofSword, MinDmg, MaxDmg, Durability, Rarity, Cost) {
    Rarity = rarityRandimization();
    NameofSword = nameRandimization();
    Cost = Math.floor((Math.random() * 100) + 1) + Rarity.Cost
    MinDmg = Math.floor((Math.random() * 10) + 1) + Rarity.MinDmg
    MaxDmg = Math.floor((Math.random() * 11) + 25) + Rarity.MaxDmg
    Durability = Math.floor((Math.random() * 100) + 1) + Rarity.Durability

    OceansLog(`Name: ${NameofSword}, Minimum Dmagae: ${MinDmg}, Maximum Damage: ${MaxDmg}, Durability: ${Durability}, Rarity; ${Rarity.Name}, Cost: ${Cost}`)
}

//Possible use for later

// function getDamage(Weapon){
//     return Math.floor(Math.random() * (Weapon.maxDamage - Weapon.minDamage + 1)) + Weapon.minDamage;
// }

function nameRandimization(Name) {
    let nameDictator = Math.floor((Math.random() * 10) + 1)
    Name = Names[nameDictator]
    OceansLog(Name)
    return Name;
}

function rarityRandimization(Rarity) {
    let rarityDictator = Math.floor((Math.random() * 21) + 1)
    Rarity = Rarities[rarityDictator]
    OceansLog(`Rarity type: ${Rarity.Name}`)
    return Rarity;
}
setInterval(weaponCreator, 2000)

OceansLog(`Rarities Array Length: ${Rarities.length}`)


//THIS WHOLE PART IS UNDER MAINTANINCE


//Adding numbers together function 
//Can add user interaction system

function sumAll() {
    let i;
    let sum = 0;
    for(i = 0; i < arguments.length; i++) {
      sum += arguments[i];
    }
    OceansLog(sum);
    OceansAlert(sum);
    return sum;
}

function userCalc(Number1, Number2, Number3, Number4, Number5) {
    let calctxtbox1 = document.getElementById("equationnumtxtbox1").value
    let calctxtbox2 = document.getElementById("equationnumtxtbox2").value
    let calctxtbox3 = document.getElementById("equationnumtxtbox3").value
    let calctxtbox4 = document.getElementById("equationnumtxtbox4").value
    let calctxtbox5 = document.getElementById("equationnumtxtbox5").value
    Number1 = calctxtbox1
    Number2 = calctxtbox2
    Number3 = calctxtbox3
    Number4 = calctxtbox4
    Number5 = calctxtbox5
    sumAll(Number1, Number2, Number3, Number4, Number5);
    // return Number1, Number2, Number3, Number4, Number5;
    
    // if(Number1 !== "") {
    //     OceansLog(`User inputed data`)
    // } else {
    //     OceansLog(`User didn't input data`)
    // }
}

function characterCustomizationAndCreation() {
    
    let statChange = prompt(`What stat would you like to change`).toLowerCase();
    switch(statChange) {
        case "name":
        let nameChange = prompt(`What would you like your name to be?`)
        if(isNaN(nameChange)) {
            player.Name = nameChange
            OceansAlert(`Your new name is ${player.Name}`)
        } else {
            OceansAlert(`I'm sorry, but "${nameChange}" cannot be your name. :(`)
        }
        break;
        case "age":
        let ageChange = prompt(`What would you like your age to be?`)
        if(isNaN(ageChange) && nameChange > 100) {
            alert(`I'm sorry, but that "${ageChange}" cannot be your age. :(`)
        } else {
            player.Age = ageChange;
            OceansAlert(`Your new age is ${player.Age}`)
        }
        break;
        case "pet":
        let petChange = prompt(`What would you like your pet to be?`)
        if(isNaN(petChange)) {
            player.Pet = petChange;
            OceansAlert(`Congrats! your new pet is a ${player.Pet}`)
        } else {
            OceansAlert(`Sorry, but a "${petChange}"? Really, you can do better than that. ;)`)
        }
        break;
        case "weapon":
        let weaponChange = prompt(`What would you like your weapon to be?`)
        if(isNaN(weaponChange)) {
            player.Weapon = weaponChange;
            OceansAlert(`Epic! Your new weapon is a ${player.Weapon}!`)
        } else {
            OceansAlert(`Bruh, that is not a weapon, choose something else.`)
        }
        break;
        case "class":
        let classChange = prompt(`What would you like your class to be?`)
        if(isNaN(classChange)) {
            player.Class = classChange;
            OceansAlert(`Nice choice! Your new class is a ${player.Class}`)
        }
        break;
        case "race":
        let raceChange = prompt(`What would you like your new race to be?`)
        if(isNaN(raceChange)) {
            player.Race = raceChange;
            OceansAlert(`Ooooo, you have changed my friend, your new race is a ${player.Race}`)
        }
        break;
      default:
        OceansAlert(`Sorry, but that stat doesn't exist, or you can't change it...`);
    }

    // player.Health = 100;
    // player.Xp = 0;
    // player.Speed = 30;
    // player.Money = 0;
    // player.Name = "";
    // player.Age = 21;
    // player.Pet = Pug;
    // player.Weapon = "none";
    // player.Class = "none";
    // player.Race = "human";
    // player.Inventory = [];

    //Attempt in a for loop for defining variables.
    
    // let x;
    // for (x in player) {
    //     let character = prompt("Please enter the values you want for your character to have:", x);

    //     if (character != null || character != undefined) {
    //         x.value = character;
    //     } else {
    //         OceansAlert(`Please enter valid data.`)
    //     }
    // }
    OceansLog(player)
}

function showStats() {
    let statArea = document.getElementById("statp")
    statArea.innerHTML = `Your health: ${player.Health} <br> Your XP: ${player.Xp} <br> Your Speed: ${player.Speed} <br> Your Money: ${player.Money} <br> Your Name: ${player.Name} <br> Your Age: ${player.Age} <br> Your pet: ${player.Pet.Name} <br> Your Weapon: ${player.Weapon} <br> Your Class: ${player.Class} <br> Your Race: ${player.Race}`
    if(statArea.style.display == "none") {
        statArea.style.display = "block"
    } else {
        statArea.style.display = "none";
    }
}

//Under Maintanance 

let comNumber = Math.floor((Math.random() * 100) + 1)
let guessattempts = 0

//Problem with definition
let guessAttemptHighscore = 100;

function guessMyNumber() {
    //Variables defined and Top of the list items
    let guessingNumBox = document.getElementById("guessMyNumBox").value
    let displayGuess = document.getElementById("showGuessCorrectly")
    let guessDisplay = document.getElementById("guessAttempts")
    // localStorage.setItem("highScore", guessAttemptHighscore);

    //Displaying
    document.getElementById("highScoreDisplayDiv").innerHTML = `(Under Maintanence) <br> High Score:` + localStorage.getItem("highScore")
    guessDisplay.innerHTML = `Guess Attempts: ${guessattempts}`
    
    if(guessingNumBox > 100 || isNaN(guessingNumBox)) {
        displayGuess.innerHTML= `Please enter a VALID guess.`;
    } else {
        if(guessingNumBox < comNumber) {
            displayGuess.innerHTML = `Your guess is lower than the computers number.`;
            guessattempts += 1;
            guessDisplay.innerHTML = `Guess Attempts: ${guessattempts}`
        }
        if(guessingNumBox > comNumber) {
            displayGuess.innerHTML = `Your guess is higher than the computers number`;
            guessattempts += 1;
            guessDisplay.innerHTML = `Guess Attempts: ${guessattempts}`
        }
    
        if(guessingNumBox == comNumber) {
            displayGuess.innerHTML = `YAY! You Guessed The Computers Number Correctly`;
            comNumber = Math.floor((Math.random() * 100) + 1)
            OceansLog(comNumber)
            guessDisplay.innerHTML = `Guess Attempts: ${guessattempts}`
            if(guessattempts < guessAttemptHighscore) {
                guessAttemptHighscore = guessattempts
                localStorage.setItem("highScore", guessAttemptHighscore);
            }
            guessattempts = 0;
        }
    }
    OceansLog(comNumber)
}
//Timer - Under Maintanence

let Timer = 0;

function startTimer(time) {
    Timer = time;
}

function countdown() {
    let timeDisplay = document.getElementById("timerdisplay");
    timeDisplay.innerHTML = Timer + `s`;
    if(Timer > 0) {
        Timer--;
    } else {
        alert(`TIMES UP!`)
    }
    console.log(Timer)
}

let stopwatch = setInterval(startStopwatch, 1000)



function startStopwatch(time) {

}

//COIN COLLECT MINIGAME



//WORK IN PROGRESS

// let shanesMusic = document.getElementById("myAudio");

// function musicPlay() {
//     shanesMusic.play();
//     let pauseMusicDisplay = document.getElementById("pauseMusicBtn");
//     pauseMusicDisplay.style.display = "block";
// }

// function musicPause() {
//     shanesMusic.pause();
//     let pauseMusicDisplay = document.getElementById("pauseMusicBtn");
//     pauseMusicDisplay.style.display = "none";

// }



