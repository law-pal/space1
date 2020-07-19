    //ship shwarzeneeger
function USSship (hull, firepower, accuracy) {
    this.hull = hull;
    this.firepower = firepower;
    this.accuracy = accuracy;
}
let USSship1 = new USSship(20, 5, 0.7);

//alien ships
function AlienShips(hull, firepower, accuracy){
    this.hull = Math.floor(Math.random()*4)+3;
    this.firepower = Math.floor(Math.random()*3)+2;
    this.accuracy = (Math.floor(Math.random()*3)+6)/10;

    for(let i = 0; i <= AlienShips.length; i++) {
        AlienShips[i] = {
            hull: this.hull,
            firepower: this.firepower,
            accuracy: this.accuracy
        };
    }
}  
let AlienShip1 = new AlienShips();
let AlienShip2 = new AlienShips();
let AlienShip3 = new AlienShips();
let AlienShip4 = new AlienShips();
let AlienShip5 = new AlienShips();
let AlienShip6 = new AlienShips();

//Atack function for USSship1//
function UssAtack() {
    let attack = this.USSship1;
    let target = AlienShip1;
        if (attack >= target) {
    let damage = AlienShip1.hull - this.firepower;
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
        if (this.USSship.hull && this.AlienShips.hull <= 0) {
            alert("Ship Kabloo-ey"); 
        }
        let anyAccuracy = this.USSship.accuracy + this.AlienShips.accuracy;
        if (anyAccuracy <= Math.random()) {
            return "Succesful hit";
        }
        else {
            return "No hit"
        }
    },
//function alien attack//        
    alienAttack: function() {
        let target = this.USSship * accuracy;
        if (Math.random() > target) {
            let alienAttack = this.AlienShips * this.AlienShips.firepower * this.AlienShips.accuracy;
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
        let option1 = "Attack";
        let endGame = "Game is Over"; 
        let retreat = endGame;
        let option2 = retreat;
        let destroy = 0;
        if(this.USSship.hull > this.AlienShips.hull * destroy)
        return option1 && option2;
        else {
            return endGame;
        }
    }   
    
};
































    
    
    