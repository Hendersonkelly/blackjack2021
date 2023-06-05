# Blackjack Game

This is a basic blackjack game emphasizing skills in JavaScript, Object Oriented Programming, and DOM manipulation.

![blkjckTable](https://github.com/Hendersonkelly/blackjack2021/assets/126027193/34f10cdc-9ca4-43f9-9c45-ad6f2f7802d1)


## Technologies Used
* HTML
* CSS
* Bootstrap
* JavaScript


## Learnings and Challenges
This project was one of the first full functional projects I worked on. I solidified my understanding of using logic as a part of funcitons to manipulate elements of the DOM. I also chose OOP as a way to consider the movement of the cards and decision making deliberately to continue my learning in this area. This was not part of the original assignment. I was challenged along the way with learning aspects of the game and seeing edge cases of how to calculate the Ace. I am looking forward and onward to my next challenge where I can build on these skills to more complicated ends. 

Below is some of the code to consider the Ace in the player's total points:
```
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
  ```
 
 
## How It Works
The game begins by selecting the Deal button. This immediately creates and shuffles the deck as well as deals 2 cards to the dealer and player. At the end of the deal, the deal button goes inactive.


![deal](https://github.com/Hendersonkelly/blackjack2021/assets/126027193/6f33cf75-2204-4eb7-af03-f84340b1495c)


The player will get the opportunity to decide to hit or stand. If the player hits another card is added and the total points are calculated. If the player chooses to stand the dealer then chooses to hit or stand. This logic includes forcing a hit if the dealer is under 17 and forces a stand if at 17 or higher. Modals pop up along the way if anyone busts and also pops up to let the player know who wins.


![busted](https://github.com/Hendersonkelly/blackjack2021/assets/126027193/48643a31-c2f5-4c6b-8e7c-a56a162060f5)


The player is prompted at the end of the game to answer whether they would like to play again. 


![playagain](https://github.com/Hendersonkelly/blackjack2021/assets/126027193/940ec197-5775-4da4-8454-441441491671)
