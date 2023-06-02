//!build a card deck

let cardDeck = []

let suitMap = {
    D: 'diamonds',
    C: 'clubs',
    H: 'hearts',
    S: 'spades'


}

const createCardObj = (points, suit) => {
    let card = {
        points: points,
        suit: suit,

    }
    let imageURL = ""
  if (points >1 && points<=10)  {
    imageURL = `images./${points}_of_${suitMap[suit]}.png`
  }
  switch(points){
    case 1:
        imageURL = `images/ace_of_${suitMap[suit]}`
        break
    case 11: 
    card.points = 10
    imageURL = `images/jack_of_${suitMap[suit]}`
    break
    case 12:
        card.points = 10
        imageURL = `images/queen_of_${suitMap[suit]}`
        break   
    case 13:
        card.points = 10
    imageURL = `images/king_of_${suitMap[suit]}`
    break
  }
  card.imageURL = imageURL
  return card
}

const buildDeck = () => {
    for(let suit in suitMap){
        for(let points = 1; points<=13; points++){
            cardDeck.push(createCardObj(points, suit))
        }
    }
    return shuffleArray(cardDeck)
}




//!multiple decks
let cardDeck = []; 


let suitMap = {
    D: 'diamonds', 
    C: "clubs", 
    H : 'hearts', 
    S : 'spades'
}



const multipleDecks = () => {

    for(let numOfDecks = 0; numOfDecks < 3; numOfDecks++){
        cardDeck.push(...buildDeck())
    }

    shuffleArray(cardDeck)
    
    console.log(cardDeck);
    console.log(cardDeck.length);
}

const buildDeck = () => {
    
    let deck = []
    for (let suit in suitMap){

        for(let points = 1; points<=13; points++){

            deck.push(createCardObj(points, suit))
        }
    }

    return shuffleArray(deck)

}


const createCardObj = (points, suit) => { 
    
    let card = {
        points: points, 
        suit: suit
    }

    let imageURL = ""

    //points_of_suit.png
    if(points > 1 && points <=10){
        imageURL = `images/${points}_of_${suitMap[suit]}.png`
    }

    switch(points){
        case 1: 
            imageURL = `images/ace_of_${suitMap[suit]}.png`
            break; 
        case 11: 
            card.points = 10; 
            imageURL = `images/jack_of_${suitMap[suit]}.png`;
            break; 
        case 12:
            card.points = 10;
            imageURL = `images/queen_of_${suitMap[suit]}.png`;
            break;
        case 13:
            card.points = 10;
            imageURL = `images/king_of_${suitMap[suit]}.png`;
            break;

    }

    card.imageURL = imageURL

    return card;

 }


function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
}


multipleDecks()


class Card{
    constructor(name, val,suit, img ){
        this.name = name
        this.val = val
        this.suit = suit
        this.img = img
    }
}

let deck = [

  
]


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
 
 let playerCards= []
 
 let dealerCards = []
 let dealtCard = []
 function createImg(parent, hand){
   
     let cardEl = document.createElement('img')
     cardEl.setAttribute('class', 'card')
     cardEl.src = deck[deck.length-1].img
     parent.append(cardEl)
     dealtCard =  deck.pop(deck.length-1)
     hand.push(dealtCard)
     
    }

    let sum = 0
    function total(cards){
        for (i=0; i<cards.length; i++){
         sum = cards[i].val + sum

        }

        playerPoints.innerHTML = sum
    }
    
    let dealButton = document.getElementById('deal-button')
    let playerHand = document.getElementById('player-hand')

    let dealerHand = document.getElementById('dealer-hand')
    
    
    dealButton.addEventListener('click', () => {
            
    })
    
    let hitButton = document.getElementById('hit-button')
    let playerPoints = document.getElementById('player-points')



hitButton.addEventListener('click',() => {

createImg(playerHand, playerCards)
if(dealtCard.val ==1){
let input =   prompt('Would you like to use this Ace as a 1 or 11? Enter 1 0r 11')
if (input == '11'){
    dealtCard.val = 11
}
else{
    dealtCard.val = 1
}
}
total(playerCards)

if (sum > 21){
    playerPoints.innerHTML = sum
    alert('You Busted! Game over')
}

if(dealerCards<16){
 return   createImg(dealerHand, dealerCards)
}
total(dealerCards)
    
})






