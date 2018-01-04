
function Ninja(ninja, health,speed,strength) {
    this.name = ninja;
    this.health = health;
    this.speed = speed;
    this.strength = strength;
    }


Ninja.prototype.sayName = function() {
    console.log('*************');
    console.log(this.name);
    console.log('*************');
  };
  Ninja.prototype.showStats = function() {
    console.log(this.health);
    console.log(this.speed);
    console.log(this.strength);
  };

  Ninja.prototype.showStats = function() {
    console.log(this.health);
    console.log(this.speed);
    console.log(this.strength);
  };
  Ninja.prototype.drinkSake = function(x) {
    if(x=1){
    this.health = this.health+10;
    console.log(this.health);
  }
    if(x=0){
    this.health = this.health-10;
    console.log(this.health);
  }
  
  };
  Ninja.prototype.punch = function(x){
    let punchout = x.health -5;

    console.log(this.name+' punched '+x.name+'. '+x.name+' lost 5 health!');
  }
  Ninja.prototype.kick = function(x){
    console.log(this.name+' kicked '+x.name+'. '+x.name+' lost 5 health!');
  }

const ninja = new Ninja("Hyabusa","Health: "+100,"Speed: "+3,"Strength: "+3);
const blueNinja = new Ninja("Goemon",100,"Speed: "+3,"Strength: "+3);
const redNinja = new Ninja("Bill Gates","Health: "+100,"Speed: "+3,"Strength: "+3);
//redNinja.punch(blueNinja);

ninja.sayName();
ninja.showStats();
ninja.drinkSake();

blueNinja.sayName();
blueNinja.showStats();
redNinja.sayName();

redNinja.punch(blueNinja);
blueNinja.kick(redNinja);
