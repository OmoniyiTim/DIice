var score, roundScore, activePlayer,gamePlaying;
  

init();




document.querySelector('#roll').addEventListener('click',function(){
   if(gamePlaying){
   // we need a random number as soon as the icon is clicked
    var dice = Math.floor(Math.random()*6)+1;

    var diceDom = document.querySelector('.dice');
    diceDom.style.display = 'block';
    diceDom.src = 'dice-' + dice + '.png';
    
    if( dice !== 1){
    roundScore += dice;
    document.querySelector('#current-' + activePlayer).textContent = roundScore;

    
    }else{
       nextPlayer();
    }
   }


   
    
});


document.getElementById('hold').addEventListener('click',function(){
   if(gamePlaying){
      score[activePlayer] += roundScore;

      document.getElementById('score-' + activePlayer ).textContent = score[activePlayer];
     if(score[activePlayer]>= 20){
        document.querySelector('.play-' + activePlayer).textContent = 'WINNER!';   
        gamePlaying = false; 
     }else{
        nextPlayer();
     };
   }


});

function nextPlayer(){
    activePlayer === 0 ? activePlayer = 1: activePlayer =0;
    roundScore =0;
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-1').classList.toggle('active');
    document.querySelector('.player-2').classList.toggle('active');     
    document.querySelector('.dice').style.display = 'none'; 
};

function init(){
   score = [0,0];
   roundScore = 0;
   activePlayer = 0;
   gamePlaying =true;


   
   document.querySelector('.dice').style.display= 'none';
   document.getElementById('score-1').textContent = '0';
   document.getElementById('score-0').textContent = '0';
   document.getElementById('current-0').textContent = '0';
   document.getElementById('current-1').textContent = '0';

   document.querySelector('.play-0').textContent = 'PLAYER-1';
   document.querySelector('.play-1').textContent = 'PLAYER-2';

   document.querySelector('.play-0').classList.remove('WINNER!');   
   document.querySelector('.play-1').classList.remove('WINNER!');  

   document.querySelector('.play-0').classList.remove('active');   
   document.querySelector('.play-1').classList.remove('active');  
   document.querySelector('.play-0').classList.add('active')
}


document.querySelector('.new').addEventListener('click', init); 
 