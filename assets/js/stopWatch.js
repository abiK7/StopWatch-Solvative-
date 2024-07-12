var startControlClicked=false;
var startCtrl,startCtrlLi,pauseCtrl,pauseCtrlLi,stopCtrl,stopCtrlLi,resetCtrl,resetCtrlLi;
var msecVal,secondsVal,minutesVal,hoursVal,count;
function fetchValues(){
startCtrl=document.getElementById("startTimer");
startCtrlLi=startCtrl.parentNode;
pauseCtrl=document.getElementById("pauseTimer");
pauseCtrlLi=pauseCtrl.parentNode;
stopCtrl=document.getElementById("stopTimer");
stopCtrlLi=stopCtrl.parentNode;
resetCtrl=document.getElementById("resetTimer");
resetCtrlLi=resetCtrl.parentNode;
}
function startTimer(){
	startControlClicked=true;
	if(startCtrl.getAttribute("data-isPaused")=="false"){
		secondsVal=00;
		minutesVal=00;
		hoursVal=00;
		msecVal=00;
	}else{
		startCtrl.setAttribute("data-isPaused","false");
	}
	startCtrlLi.setAttribute("class","hiddenIcon");
	pauseCtrlLi.setAttribute("class","");
	stopCtrlLi.setAttribute("class","");
	if(startControlClicked){
		var timer=setInterval(function(){				
			msecVal++;
			if(msecVal==100){
				secondsVal++;
				msecVal=00;
			}
			if(secondsVal==60){
				minutesVal++;
			}
			if(minutesVal==60){
				hoursVal++;
			}
			if(msecVal<10){
				document.getElementsByClassName("counterMSec")[0].innerHTML="0"+msecVal;
			}else{
				document.getElementsByClassName("counterMSec")[0].innerHTML=msecVal;
			}
			if(secondsVal<10){
				document.getElementsByClassName("counterSec")[0].innerHTML="0"+secondsVal;
			}else{
				document.getElementsByClassName("counterSec")[0].innerHTML=secondsVal;
			}			
			if(minutesVal<10){
				document.getElementsByClassName("counterMin")[0].innerHTML="0"+minutesVal;
			}else{
				document.getElementsByClassName("counterMin")[0].innerHTML=minutesVal;
			}
			if(hoursVal<10){
				document.getElementsByClassName("counterHr")[0].innerHTML="0"+hoursVal;
			}else{
				document.getElementsByClassName("counterHr")[0].innerHTML=hoursVal;
			}
			if(startControlClicked==false){
				clearInterval(timer);
			}
		},10);
	}
}
function pauseTimer(){
	startControlClicked=false;
	startCtrl.setAttribute("data-isPaused","true");
	startCtrlLi.setAttribute("class","");
	pauseCtrlLi.setAttribute("class","hiddenIcon");	
	resetCtrlLi.setAttribute("class","");
}
function stopTimer(){
	startControlClicked=false;
	startCtrlLi.setAttribute("class","");
	stopCtrlLi.setAttribute("class","hiddenIcon");
	pauseCtrlLi.setAttribute("class","hiddenIcon");	
	resetCtrlLi.setAttribute("class","");
	startCtrl.setAttribute("data-isPaused","true");
}
function resetTimer(){
	startControlClicked=false;
	startCtrlLi.setAttribute("class","");
	stopCtrlLi.setAttribute("class","hiddenIcon");	
	resetCtrlLi.setAttribute("class","hiddenIcon");
	startCtrl.setAttribute("data-isPaused","false");
	document.getElementsByClassName("counterHr")[0].innerHTML="00";
	document.getElementsByClassName("counterMin")[0].innerHTML="00";
	document.getElementsByClassName("counterSec")[0].innerHTML="00";
	document.getElementsByClassName("counterMSec")[0].innerHTML="00";
}

