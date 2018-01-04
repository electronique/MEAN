
let deck =[];

class Cards {
    shuffle(){
      
    }
    deal(){

    }
    reset(){
        for(let i=0;i<53;i++){
            deck.push(i);
        }
    console.log(deck);

    console.log('<p>U+1F0A1</p>');
    }
}
newdeck = new Cards();
newdeck.reset();