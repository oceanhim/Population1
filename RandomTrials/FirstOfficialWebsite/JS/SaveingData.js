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