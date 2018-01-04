class Sensei {
    constructor(x, y, z,j) {
        this.name = x;
        this.health = y;
        this.speed = z;
        this.strength = j;
    }
    speakWisdom(){
        console.log('What one programmer can do in one month, two programmers can do in two months.');
    }
    showStats(){
        console.log('Name:'+this.name,"Health: "+this.health,'Speed: '+this.speed,'Health: '+this.strength);
    }
}




// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"


// example output
const superSensei = new Sensei("Master Splinter",210,10,10);
superSensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
superSensei.showStats();
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"
