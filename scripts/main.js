class Card{
    constructor(name, val,suit, img ){
        this.name = name
        this.val = val
        this.suit = suit
        this.img = img
    }
}

class Player{
    constructor( sum, pCards ){
        this.sum =sum
        this.pCards = pCards
        
    }

totalP(player){
        player.sum =0
       
        for (let i=0; i<pCards.length; i++){

            if(pCards[i].val ==1){
                pCards.push(pCards.splice(i,1)[0])}
        }
         for (let i=0; i<pCards.length; i++){        
            if(pCards[i].val ==1){
               if(player.sum <= 10){
                   pCards[i].val = 11
               }
               
   
            }
         player.sum = pCards[i].val + player.sum

        }
         

         playerPoints.innerHTML = player.sum
         
         
         
        }
       

      
    

hitP(){
    createImg(playerHand, pCards)

    }


}



class Dealer {
    constructor(sum, dCards){
     this.sum =sum   
    this.cards = dCards
    }
    totalD(dealer){
        dealer.sum=0
        
        for (let i=0; i<dCards.length; i++){

            if(dCards[i].val ==1){
                dCards.push(dCards.splice(i,1)[0])}
        }
         for (let i=0; i<dCards.length; i++){        
            if(dCards[i].val ==1){
               if(dealer.sum <= 10){
                   dCards[i].val = 11
               }
               
   
            }
         dealer.sum = dCards[i].val + dealer.sum

        }
        if (dealer.sum == 21){
            
             
            displayMessage('Dealer', 'wins')
             
          }
        dealerPoints.innerHTML = dealer.sum
       
    }
   

    hitD(){
        if(dealer.sum < 17){
           createImg(dealerHand, dCards)
           
        }
        else{

        }
       

    }

}
let player = new Player(0)
let dealer= new Dealer(0)

let deck = []
 let pCards =[]
 let dCards =[]



function createCard(name, val, suit, img){
    name  = new Card(name, val, suit, img) 
    deck.push(name)

}

 createCard('2 Of Spades', 2, 'spade', 'images/2_of_spades.png')
 createCard('3 Of Spades', 3, 'spade', 'images/3_of_spades.png' )
 createCard('4 Of Spades', 4, 'spade', 'images/4_of_spades.png' )
 createCard('5 Of Spades', 5, 'spade', 'images/5_of_spades.png' )
 createCard('6 Of Spades', 6, 'spade', 'images/6_of_spades.png' )
 createCard('7 Of Spades', 7, 'spade', 'images/7_of_spades.png' )
 createCard('8 Of Spades', 8, 'spade', 'images/8_of_spades.png' )
 createCard('9 Of Spades', 9, 'spade', 'images/9_of_spades.png' )
 createCard('10 Of Spades', 10, 'spade', 'images/10_of_spades.png' )
 createCard('J Of Spades',10, 'spade', 'images/jack_of_spades.png' )
 createCard('Q Of Spades', 10, 'spade', 'images/queen_of_spades.png' )
 createCard('K Of Spades', 10, 'spade', 'images/king_of_spades.png' )
 createCard('A Of Spades', 1, 'spade', 'images/ace_of_spades.png' )
 createCard('2 Of Clubs', 2, 'club', 'images/2_of_clubs.png')
 createCard('3 Of Clubs', 3, 'club', 'images/3_of_clubs.png' )
 createCard('4 Of Clubs', 4, 'club', 'images/4_of_clubs.png' )
 createCard('5 Of Clubs', 5, 'club', 'images/5_of_clubs.png' )
 createCard('6 Of Clubs', 6, 'club', 'images/6_of_clubs.png' )
 createCard('7 Of Clubs', 7, 'club', 'images/7_of_clubs.png' )
 createCard('8 Of Clubs', 8, 'club', 'images/8_of_clubs.png' )
 createCard('9 Of Clubs', 9, 'club', 'images/9_of_clubs.png' )
 createCard('10 Of Clubs', 10, 'club', 'images/10_of_clubs.png' )
 createCard('J Of Clubs',10, 'club', 'images/jack_of_clubs.png' )
 createCard('Q Of Clubs', 10, 'club', 'images/queen_of_clubs.png' )
 createCard('K Of Clubs', 10, 'club', 'images/king_of_clubs.png' )
 createCard('A Of Clubs', 1, 'club', 'images/ace_of_clubs.png' )
 createCard('2 Of hearts', 2, 'heart', 'images/2_of_hearts.png')
 createCard('3 Of hearts', 3, 'heart', 'images/3_of_hearts.png' )
 createCard('4 Of hearts', 4, 'heart', 'images/4_of_hearts.png' )
 createCard('5 Of hearts', 5, 'heart', 'images/5_of_hearts.png' )
 createCard('6 Of hearts', 6, 'heart', 'images/6_of_hearts.png' )
 createCard('7 Of hearts', 7, 'heart', 'images/7_of_hearts.png' )
 createCard('8 Of hearts', 8, 'heart', 'images/8_of_hearts.png' )
 createCard('9 Of hearts', 9, 'heart', 'images/9_of_hearts.png' )
 createCard('10 Of hearts', 10, 'heart', 'images/10_of_hearts.png' )
 createCard('J Of hearts',10, 'heart', 'images/jack_of_hearts.png' )
 createCard('Q Of hearts', 10, 'heart', 'images/queen_of_hearts.png' )
 createCard('K Of hearts', 10, 'heart', 'images/king_of_hearts.png' )
 createCard('A Of hearts', 1, 'heart', 'images/ace_of_hearts.png' )
 createCard('2 Of diamonds', 2, 'diamond', 'images/2_of_diamonds.png')
 createCard('3 Of diamonds', 3, 'diamond', 'images/3_of_diamonds.png' )
 createCard('4 Of diamonds', 4, 'diamond', 'images/4_of_diamonds.png' )
 createCard('5 Of diamonds', 5, 'diamond', 'images/5_of_diamonds.png' )
 createCard('6 Of diamonds', 6, 'diamond', 'images/6_of_diamonds.png' )
 createCard('7 Of diamonds', 7, 'diamond', 'images/7_of_diamonds.png' )
 createCard('8 Of diamonds', 8, 'diamond', 'images/8_of_diamonds.png' )
 createCard('9 Of diamonds', 9, 'diamond', 'images/9_of_diamonds.png' )
 createCard('10 Of diamonds', 10, 'diamond', 'images/10_of_diamonds.png' )
 createCard('J Of diamonds',10, 'diamond', 'images/jack_of_diamonds.png' )
 createCard('Q Of diamonds', 10, 'diamond', 'images/queen_of_diamonds.png' )
 createCard('K Of diamonds', 10, 'diamond', 'images/king_of_diamonds.png' )
 createCard('A Of diamonds', 1, 'diamond', 'images/ace_of_diamonds.png' )
 
 
 

 let dealtCard = []


 function createImg(parent, hand){
     let cardEl = document.createElement('img')
     cardEl.setAttribute('class', 'card')
     cardEl.src = deck[deck.length-1].img
     parent.append(cardEl)
     dealtCard =  deck.pop(deck.length-1)
     hand.push(dealtCard)
    }

  function Deal(){
   
    createImg(playerHand, pCards)
    createImg(playerHand, pCards)
    createImg(dealerHand, dCards)
    createImg(dealerHand, dCards)

  }
  function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return deck;
}

function Win(){

    if(dealer.sum > player.sum || dealer.sum == player.sum){
        displayMessage('Dealer', 'Wins')
        
    }
    else if(player.sum > dealer.sum || player.sum == 21){
       displayMessage('Player', 'Wins')
       
       
    }

}

function displayMessage(person, message){
    setTimeout(() => {
        confirm(`${person} ${message} `)
        StartOver()
    }, 300)
}

function StartOver(){
    

    let input = prompt('Do you want to play again? Type yes or no.==> ')

    if(input.toLocaleLowerCase() == 'yes'){
        let reset = document.getElementById('dealer-hand')
    while (reset.hasChildNodes()) {
        reset.removeChild(reset.firstChild);
      }
    let restart = document.getElementById('player-hand')
    while (restart.hasChildNodes()) {
        restart.removeChild(restart.firstChild);
      }
    }

    else if(input.toLocaleLowerCase() != 'yes'){
        alert('Thanks for playing!')
        let reset = document.getElementById('dealer-hand')
    while (reset.hasChildNodes()) {
        reset.removeChild(reset.firstChild);
      }
    let restart = document.getElementById('player-hand')
    while (restart.hasChildNodes()) {
        restart.removeChild(restart.firstChild);
      }
    }
    playerPoints.innerHTML = 0
    dealerPoints.innerHTML = 0
    pCards = []
    dCards =[]
    dealButton.disabled = false
}
   
    
    
    let hitButton = document.getElementById('hit-button')
    let playerPoints = document.getElementById('player-points')
    let dealerPoints = document.getElementById('dealer-points')
    let playerHand = document.getElementById('player-hand')
    let dealerHand = document.getElementById('dealer-hand')
//! HIT BUTTON

hitButton.addEventListener('click',() => {
    player.hitP()
   
        player.totalP(player)
        
        if (player.sum > 21){
            displayMessage('Player', 'busted')
            // StartOver()
        }
        if (player.sum == 21){
            displayMessage('Player', 'wins') 
            // StartOver()
        }
       

    


    
})


//!Deal Button

let dealButton = document.getElementById('deal-button')
    
    
 dealButton.addEventListener('click', () => {
    playerPoints.innerHTML = 0
    dealerPoints.innerHTML = 0
    
    shuffleArray(deck)
    Deal()
    player.totalP(player)
   
        
    
    if (player.sum == 21){
        displayMessage('Player', 'wins') 
        
    }
    dealer.totalD(dealer)    
    if (dealer.sum == 21){
        displayMessage('Dealer', 'wins') 
        
    }
    dealButton.disabled = true
    })


//! Stand Button

let standButton = document.getElementById('stand-button')

    standButton.addEventListener('click', () => {
       while(dealer.sum <17){

           dealer.hitD()
           dealer.totalD(dealer)   
             if (dealer.sum > 21){
               
                displayMessage('Dealer', 'busted')
                // StartOver()
             }
       }
      
         

        Win(player, dealer)
    //    StartOver()
       
    })



