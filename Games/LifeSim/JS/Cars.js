//car stats

let lamborgini = initCar("lamborghini","Red base with white stripes and a black dotted front",10000,100,800000,8000, false, 500, 1000000, 1000);
let Tesla = initCar("Tesla","White base with black stripes",9000,60,600000,6000, false, 400, 800000, 1000);

function initCar(Name, Style, Fame, HorsePower, WorthAfterBought, WorthIncreaseRate, Bought, GasMileage, Cost, Durability){
        return {
            Name : Name,
            Style : Style,
            Fame : Fame,
            HorsePower : HorsePower,
            WorthAfterBought : WorthAfterBought,
            WorthIncreaseRate : WorthIncreaseRate,
            Bought : Bought,
            GasMileage : GasMileage,
            Cost : Cost,
            Durability : Durability
        };
}

//game loops

setInterval(IncreaseCarWorth, 5000)
setInterval(UpdateLamborgini, 100)
setInterval(CheckStats, 100000)

//Interest rate for car

function IncreaseCarWorth () {
    if (lamborgini.Bought == true) {
        lamborgini.WorthAfterBought += lamborgini.WorthIncreaseRate
        console.log(`This is the current worth of your car: ${lamborgini.WorthAfterBought}`)
    } 
}

//Updating the games stats

function UpdateLamborgini() {
    return lamborgini
}

function CheckStats() {
    console.log(`Car Cost: ${lamborgini.Cost}, Style: ${lamborgini.Style}, Fame: ${lamborgini.Fame}, Horsepower: ${lamborgini.HorsePower}, Worth After Bought: ${lamborgini.WorthAfterBought}, Interest rate: ${lamborgini.WorthIncreaseRate}`)
}
