    //ship shwarzeneeger
function USSship (hull, firepower, accuracy) {
    this.hull = hull;
    this.firepower = firepower;
    this.accuracy = accuracy;
let USSship1 = new USSship(20, 5, 0.7);
}
//alien ships
function AlienShips(AlienShip1,AlienShip2,AlienShip3,AlienShip4,AlienShip5,AlienShip6) {

    this.hull = Math.floor(Math.random()*4)+3;
    this.firepower = Math.floor(Math.random()*3)+2;
    this.accuracy = (Math.floor(Math.random()*3)+6)/10;
    for(let i = 0; i < AlienShips.length; i++) {
        AlienShips[i] = {
            hull: this.hull,
            firepower: this.firepower,
            accuracy: this.accuracy
        }
    }
}
let AlienShip1 = new AlienShips();
let AlienShip2 = new AlienShips();
let AlienShip3 = new AlienShips();
let AlienShip4 = new AlienShips();
let AlienShip5 = new AlienShips();
let AlienShip6 = new AlienShips();

//console.log(AlienShips);
//Atack function for USSship1//
function UssAtack() {
    let attack = USSship;
    let target = AlienShips;
        if (attack >= target) {
    let damage = AlienShips.hull - this.firepower;
        if (damage == this.accuracy) {
    let accuracy = 0.7;
        if (Math.random() <= accuracy){
        console.log("Attack was succesful");
        }
        else if (Math.random() > accuracy){
        console.log("We've missed the attack");
        }

    }
  }
}

//Game object

let Game = {
    player1: USSship,
    player2: AlienShips,
    checkWin: function() {
        if (this.player1.hull && this.player2.hull <= 0) {
            alert("Ship Kabloo-ey"); 
        }
        let anyAccuracy = this.player1.accuracy + this.player2.accuracy;
        if (anyAccuracy <= this.player1.hull || this.player2.hull) {
            return "Succesful hit";
        }
        else {
            return "No hit"
        }
    },
    //function alien attack//        
    alienAttack: function() {
        let target = this.player1 * accuracy;
        if (Math.random() > target) {
            let alienAttack = this.player2 * this.player2.firepower * this.player2.accuracy;
            if (alienAttack > target) {
                console.log("We hit USS ship");
            }
            else {
                console.log("We've missed the attack");
            }
        }
    },
    //End Game method//
    endGame: function() {
        let option1 = UssAtack;
        let endGame = "Game is Over"; 
        let retreat = this.endGame + endGame;
        let option2 = retreat;
        let destroy = 0;
        if(this.player1.hull > this.player2.hull * destroy) {
        return option1 && option2;
        }         
        else {
            return endGame;
        }
    }
};
