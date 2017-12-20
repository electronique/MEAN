function Ninja(ninja1) {

    const name = ninja1;
    this.getName = function() {
        
      return name;

    };
    
  }
Ninja.prototype.sayName = function() {
    console.log(name);
  };

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();

// -> "My ninja name is Hyabusa!"
//ninja1.showStats();
// -> "Name: Hayabusa, Health: 100, Speed: 3, Strength: 3"
