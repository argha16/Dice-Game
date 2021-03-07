'user strict'
			const score0=document.querySelector('#score--0');
			const score1=document.querySelector('#score--1');
			const currentScr0=document.querySelector('#current--0');
			const currentScr1=document.querySelector('#current--1');
			const player1=document.querySelector('.player--0');
			const player2=document.querySelector('.player--1');
			
			const dicEe=document.querySelector('.dice');
			const btnNew=document.querySelector('.btn--new');
			const btnRoll=document.querySelector('.btn--roll');
			const btnHold=document.querySelector('.btn--hold');
			const playernm1=document.querySelector('#name--0');
			const playernm2=document.querySelector('#name--1');
			


//reseting value//
				score0.textContent=0;
				score1.textContent=0;
				dicEe.classList.add('hidden');
	
	            let score;
				let crrntScore;
				let activePlayer;
				let playing;
				
				
				
				const init=function(){
					score = [0, 0];
					crrntScore=0;
				    activePlayer=0;
					playing=true;
					score0.textContent=0;
					score1.textContent=0;
					currentScr0.textContent=0;
					currentScr1.textContent=0;
					player1.classList.remove('player--winner');
					player2.classList.remove('player--winner');
					player1.classList.add('player--active');
					player2.classList.remove('player--active');
   
					
					
				}
				
				init()
				
		const switchplayer=function(){
				  document.getElementById(`current--${activePlayer}`).textContent=0;
		            crrntScore = 0;
					activePlayer= activePlayer === 0 ? 1 : 0 ;
					player1.classList.toggle('player--active')
					player2.classList.toggle('player--active')	
					
				}
			



// when button roll//


     btnRoll.addEventListener('click',function(){
		 if(playing){
		 const dice=Math.trunc(Math.random()*6)+1
		  dicEe.classList.remove('hidden');
		  dicEe.src=`dice-${dice}.png`;
		  
		// checking value !== 1//
				if(dice!==1){
					crrntScore=crrntScore+dice;
					document.getElementById(`current--${activePlayer}`).textContent=crrntScore;
					
				}
				else{
			         switchplayer();
		 }}
		
});
btnHold.addEventListener('click',function(){
	if(playing){
	score[activePlayer]=score[activePlayer]+crrntScore ;
	document.getElementById(`score--${activePlayer}`).textContent=score[activePlayer];
	
	if(score[activePlayer]>=30){
		playing=false;
		dicEe.classList.add('hidden');
        document.querySelector(`player--${activePlayer}`).classList.add('player--winner');
		document.querySelector(`player--${activePlayer}`).classList.remove('player--active');
		document.querySelector(`name--${activePlayer}`).classList.add('player--winner');
		
	}
	else{
		
		switchplayer();
	}}
	
});

//reset all hte score//
		btnNew.addEventListener('click',init)