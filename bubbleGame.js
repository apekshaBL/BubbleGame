let randomNumber=0;

function makeBubble(){
   let manyBubbles=""
   for(let i=1;i<=96;i++){
      let randomNum=Math.floor(Math.random()*10);
      manyBubbles +=` <div class="bubble">${randomNum}</div>`;
   }
   let panelbtm=document.querySelector("#panelbtm");
   panelbtm.innerHTML=manyBubbles;
}
makeBubble();

let timer=60;
function RunTimer(){
   let ReduceTimer=setInterval(function(){
      if(timer>0){
      timer--;
      document.querySelector(".timerValue").innerHTML=timer;
      }
      else{
         clearInterval(ReduceTimer);
         document.querySelector("#panelbtm").textContent=""
        // document.querySelector("#panelbtm").innerHTML="Game is over"
      }
   },1000)
}
RunTimer();


function GateNewheat(){
   randomNumber=Math.floor(Math.random()*10);
   document.querySelector(".heats").textContent=randomNumber;
}
GateNewheat();

let Score=0;
function increaseScore(){
   Score=Score+10;
   document.querySelector(".score").textContent=Score;
   makeBubble();
   GateNewheat();
}



document.querySelector("#panelbtm").addEventListener("click",function(event){
   let clickedNum= Number(event.target.textContent);
   if(randomNumber==clickedNum){
      increaseScore();
   }
});
