 function Ninja(ninja, health,speed,strength) {
    this.name = ninja;
    this.health = health;
    this.speed = speed;
    this.strength = strength;
    }


Ninja.prototype.sayName = function() {
    console.log(this.name);
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
  Ninja.prototype.drinkSake = function() {
    console.log('Cheers');
    this.health = this.health+10;
    console.log(this.health);
  };

const ninja = new Ninja("Hyabusa",100,3,3);
ninja.sayName();
ninja.showStats();
ninja.drinkSake();


