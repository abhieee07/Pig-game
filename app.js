	var score,result,activePlayer,gameplaying;
	
    // iniitialie player names   //
var play1=prompt("enter player 1 name","Player1");
    var play2=prompt("enter player 2 name","Player2");
    startgame();
     
	dice=Math.ceil(Math.random() * 6);
	
	    //hiding the dice at the start
	                          
            /// rolling the dice
	document.querySelector(".btn-roll").addEventListener('click', function(){
		if(gameplaying){
			var dice=Math.ceil(Math.random() * 6);
	    var diceDom=document.querySelector(".dice");
	    diceDom.style.display="block";
	    diceDom.src="dice-" + dice +".png";
  
	    if(dice!==1){
	    	result+=dice;
	    	document.getElementById("current-" + activePlayer).textContent=result;
                 }
        else{
        	document.querySelector(".dice").src="dice-1.png";
        	nextplayer();
         }
		}	
		
	});
 //// hold the dice and update the result 
 document.querySelector(".btn-hold").addEventListener('click', function(){
 	if(gameplaying){
 			score[activePlayer]+=result;
 	document.querySelector("#score-"+ activePlayer).textContent=score[activePlayer];

 	if(score[activePlayer]>=100){
 		document.querySelector("#name-"+activePlayer).textContent="Winner!!!";
 		document.querySelector(".player-"+activePlayer+"-pannel").classList.add('winner');
 		document.querySelector(".player-"+activePlayer+"-pannel").classList.remove('active');
 		gameplaying = false;
 	}
    else{
    	nextplayer();
    } 

 	}
 
 });

 document.querySelector(".btn-new").addEventListener('click',startgame)



 function startgame(){
score=[0,0];
	result=0;
	activePlayer=0;
	gameplaying=true;
 
  document.querySelector(".dice").style.display="none";   
   document.getElementById("score-0").innerHTML=0;
	document.getElementById("current-0").textContent=0;
	document.getElementById("score-1").textContent=0;
	document.getElementById("current-1").innerHTML=0;
    
      document.getElementById("name-0").textContent=play1;
    document.getElementById("name-1").textContent=play2;

	    document.querySelector(".player-0-pannel").classList.remove('winner');
        document.querySelector(".player-1-pannel").classList.remove('winner');
 		document.querySelector(".player-0-pannel").classList.remove('active');
 		document.querySelector(".player-1-pannel").classList.remove('active');
 		document.querySelector(".player-0-pannel").classList.add('active');

 }


 function nextplayer(){
 	(activePlayer==0) ? activePlayer=1 :activePlayer=0;
        	 
        	 result=0;

             document.querySelector(".dice").style.display="none";
         	document.getElementById("current-0").textContent=0;
        	document.getElementById("current-1").textContent=0;


         
            document.querySelector(".player-0-pannel").classList.toggle("active");
            document.querySelector(".player-1-pannel").classList.toggle("active");
            	

            }

	


