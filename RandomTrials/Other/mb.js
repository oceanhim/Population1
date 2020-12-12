let MobsArray = [];

function Mob(Dmg, Health, Lvl, Speed) {
    this.Damage = Dmg;
    this.Health = Health;
    this.Level = Lvl;
    this.Speed = Speed;
}

function createMob() {{
    let mobDictator = Math.floor((Math.random() * 5) + 1);
    if(mobDictator <= 10){
        let creeper = new Mob(50,25,1,5);
        console.log(creeper);
        MobsArray.push(creeper)
        showMob();
    }
}}

createMob();

function showMob() {
    MobsArray.forEach(e => {
        let createdEle = document.createElement("input");
        createdEle.style.backgroundColor = "red"
        // createdEle.width = "200px"
        // createdEle.height = "400px"
    });
}
