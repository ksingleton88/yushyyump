
var bg;
var bg2;
var gameTimer;
var clockTimer;
var jupiter;
var ryanplan;
var kplan;
var pluto;
var earth;
var neptune;
var purpplan;
var saturn;
var saturn3;
var plutoSpeed;
var jupiterSpeed;
var ryanplanSpeed;
var kplanSpeed;
var marsSpeed;
var earthSpeed;
var neptuneSpeed;
var purpplanSpeed;
var saturnSpeed;
var ufo;
var baseSpeed;

var sndMusic;

var currentTime;
var output;

var leftArrowDown;
var rightArrowDown;
var yushy;


var yushyFallSpeed;
var inAir;

const YUSHY_SPEED = 10;
const GRAVITY = 2;


function init(){
		
		output = document.getElementById('output');

		
		yushyFallSpeed = 0;

		leftArrowDown = false;
		rightArrowDown = false;

		inAir = true;

		bg = document.getElementById('bg');
		bg.style.left = '0px';

		bg2 = document.getElementById('bg2');
		bg2.style.left = '4800px';

		jupiter = document.getElementById('jupiter');
		jupiter.style.width = '100px';
		jupiter.style.height = '100px';
		placeplanet(jupiter);

		ryanplan = document.getElementById('ryanplan');
		placeplanet(ryanplan);
		ryanplan.style.width = '130px';
		ryanplan.style.height = '130px';
		placeplanet(ryanplan);

		kplan = document.getElementById('kplan');
		kplan.style.width = '150px';
		kplan.style.height = '150px';
		placeplanet(kplan);


		pluto = document.getElementById('pluto');
		pluto.style.width = '65px';
		pluto.style.height = '65px';
		placeplanet(pluto);

		mars = document.getElementById('mars');
		mars.style.width = '200px';
		mars.style.height = '200px';
		placeplanet(mars);

		earth = document.getElementById('earth');
		earth.style.width = '280px';
		earth.style.height ='280px';
		placeplanet(earth);

		neptune = document.getElementById('neptune');
		neptune.style.width = '100px';
		neptune.style.height = '100px';
		placeplanet(neptune);

		purpplan = document.getElementById('purpplan');
		purpplan.style.width = '180px';
		purpplan.style.height = '180px';
		placeplanet(purpplan);

		saturn = document.getElementById('saturn');
		saturn.style.width = '335px';
		saturn.style.height = '235px';
		placeplanet(saturn);

		saturn3 = document.getElementById('saturn3');
		saturn3.style.width = '200px';
		saturn3.style.height = '200px';

		yushy = document.getElementById('yushy');
		yushy.style.left = '200px';
		yushy.style.top = '0px';
		yushy.style.width = '100px';
		yushy.style.height = '100px'; 
		yushy.src = 'yushy.gif';

		ufo = document.getElementById('ufo');
		ufo.style.left = '200px';
		ufo.style.top = '200px';
		ufo.style.width = '200px';
		ufo.style.height = '100px';

}

function placeplanet(p){
	var pY = Math.floor(Math.random()*275)+170;
	var pX = Math.floor(Math.random()*2000)+1080;
	p.style.top = pY + 'px';
	p.style.left = pX + 'px';
	if(p.id == "pluto"){
		plutoSpeed = Math.floor(Math.random()*8)+5;
	}
	if(p.id == "jupiter"){ 
		jupiterSpeed = Math.floor(Math.random()*8)+5;
	}
	if(p.id == "ryanplan"){
		ryanplanSpeed = Math.floor(Math.random()*9)+5;
	}
	if(p.id == "kplan"){
		kplanSpeed = Math.floor(Math.random()*7)+5;
	}
	if(p.id == "mars"){
		marsSpeed = Math.floor(Math.random()*9)+7;
	}
	if(p.id == "earth"){
		earthSpeed = Math.floor(Math.random()*9)+7;
	}
	if(p.id == "neptune"){
		neptuneSpeed = Math.floor(Math.random()*9)+7;
	}
	if(p.id == "purpplan"){
		purpplanSpeed = Math.floor(Math.random()*9)+7;
	}
	if(p.id == "saturn"){
		saturnSpeed = Math.floor(Math.random()*9)+7;
	}


}

function clockloop(){
	currentTime ++;
	output.innerHTML = currentTime;
}


function gameloop(){
	
	/*baseSpeed += .01;*/

	sndMusic = document.getElementById('sndMusic');
	sndMusic.volume = 0.5;
	sndMusic.loop = true;
	sndMusic.play();	



	var bgX = parseInt(bg.style.left) -1;
	if(bgX< -4800) bgX = 4799;
	bg.style.left = bgX +  'px';

	var bgX = parseInt(bg2.style.left) -1;
	if(bgX< -4800) bgX = 4799;
	bg2.style.left = bgX +  'px';

	var ufoX = parseInt(ufo.style.left) -3;
	ufo.style.left = ufoX + 'px';

	var jupiterX = parseInt(jupiter.style.left) - jupiterSpeed;
	if (jupiterX < -250) placeplanet(jupiter);
	else jupiter.style.left = jupiterX + 'px';
	jupiter.style.top = "400px";

	var ryanplanX = parseInt(ryanplan.style.left) - ryanplanSpeed;
	if (ryanplanX < -250) placeplanet(ryanplan);
	else ryanplan.style.left = ryanplanX + 'px';

	var kplanX = parseInt(kplan.style.left) - kplanSpeed;
	if (kplanX < -250) placeplanet(kplan);
	else kplan.style.left = kplanX + 'px';

	var plutoX = parseInt(pluto.style.left) - plutoSpeed;
	if (plutoX < -250) placeplanet(pluto);
	else pluto.style.left = plutoX + 'px';


	var marsX = parseInt(mars.style.left) - marsSpeed;
	if (marsX < -250) placeplanet(mars);
	else mars.style.left = marsX + 'px';

	var earthX = parseInt(earth.style.left) - earthSpeed;
	if (earthX < -250) placeplanet(earth);
	else earth.style.left = earthX + 'px';

	var neptuneX = parseInt(neptune.style.left) - neptuneSpeed;
	if (neptuneX < -250) placeplanet(neptune);
	else neptune.style.left = neptuneX + 'px';

	var purpplanX = parseInt(purpplan.style.left) - purpplanSpeed;
	if (purpplanX < -250) placeplanet(purpplan);
	else purpplan.style.left = purpplanX + 'px';

	var saturnX = parseInt(saturn.style.left) - saturnSpeed;
	if (saturnX < -300) placeplanet(saturn);
	else saturn.style.left = saturnX + 'px';

	saturn3.style.left = parseInt(saturn.style.left) + 65 + 'px';
	saturn3.style.top = parseInt(saturn.style.top) + 25 + 'px';


	var yushyY = parseInt(yushy.style.top);
	
	yushyFallSpeed += GRAVITY;
	yushy.style.top = (yushyY + yushyFallSpeed) + 'px';
		

	if(yushyY > 710){
		document.getElementById('endScreen').style.display = 'block';
		document.getElementById('endTime').innerHTML = currentTime;
		endTime.innerHTML = "You Survived<br>" + currentTime + "<br>Seconds!" ;
		sndMusic = document.getElementById('sndDie');
		sndMusic.volume = 0.3;
		sndMusic.play(); 
		clearInterval(gameTimer);



	}

	var yushy_src = yushy.src.split('/').pop();
	if(yushy_src == 'yushyjump.gif'){
		//code when jumping
		if(yushy.className == 'flip-H'){
			console.log('jump left');
		}
		else{
			console.log('jump right');
		}
	}
	else{
		//code when not jumping
		if(leftArrowDown || rightArrowDown){
			if(yushy_src != 'yushyjump.gif') yushy.src = 'yushyjump.gif';
		}
		else yushy.src = 'yushy.gif';

		if(leftArrowDown){
			yushy.className = 'flip-H';
		}
		if(rightArrowDown){
			yushy.className = '';
		}
	}

	var yushyX = parseInt(yushy.style.left);
	if(leftArrowDown){
		yushy.style.left = yushyX - YUSHY_SPEED + 'px';
	}
	if(rightArrowDown){
		yushy.style.left = yushyX + YUSHY_SPEED + 'px';
	}


	if(hitPlanet(jupiter)){
		yushy.style.top = jupiter.style.top - yushy.style.height;
		//clearInterval(gameTimer);
		yushyFallSpeed = -5;
		inAir = false;
	}

	if(hitPlanet(ryanplan)){
		yushy.style.top = ryanplan.style.top - yushy.style.height;
		//clearInterval(gameTimer);
		yushyFallSpeed = -5;
		inAir = false;

	}
	if(hitPlanet(mars)){
		yushy.style.top = mars.style.top - yushy.style.height;
		//clearInterval(gameTimer);
		yushyFallSpeed = -5;
		inAir = false;

	}
	if(hitPlanet(saturn3)){
		yushy.style.top = saturn3.style.top - yushy.style.height;
		//clearInterval(gameTimer);
		yushyFallSpeed = -5;
		inAir = false;

	}
	if(hitPlanet(kplan)){
		yushy.style.top = kplan.style.top - yushy.style.height;
		//clearInterval(gameTimer);
		yushyFallSpeed = -5;
		inAir = false;

	}
	if(hitPlanet(pluto)){
		yushy.style.top = pluto.style.top - yushy.style.height;
		//clearInterval(gameTimer);
		yushyFallSpeed = -5;
		inAir = false;

	}
	if(hitPlanet(purpplan)){
		yushy.style.top = purpplan.style.top - yushy.style.height;
		//clearInterval(gameTimer);
		yushyFallSpeed = -5;
		inAir = false;

	}
	if(hitPlanet(neptune)){
		yushy.style.top = neptune.style.top - yushy.style.height;
		//clearInterval(gameTimer);
		yushyFallSpeed = -5;
		inAir = false;

	}
	if(hitPlanet(earth)){
		yushy.style.top = earth.style.top - yushy.style.height;
		//clearInterval(gameTimer);
		yushyFallSpeed = -5;
		inAir = false;

	}
	if(hitPlanet(ufo)){
		//yushy.style.visibility = 'hidden';
		yushy.style.top = ufo.style.top - yushy.style.height;
		yushyFallSpeed = -5;
		inAir = false;
	}

}

document.addEventListener('keydown', function(event){
        if(event.keyCode==37) leftArrowDown = true;
        if(event.keyCode==39) rightArrowDown = true;
        if(event.keyCode==38 && ! inAir) jump();
});

document.addEventListener('keyup', function(event){
        if(event.keyCode==37) leftArrowDown = false;
        if(event.keyCode==39) rightArrowDown = false;
});

function hitPlanet(planet){

	var hit = false;

	if(yushyFallSpeed>0){
		var halfPlanetsWidth = parseInt(planet.style.width)/2;
		var yushyX = parseInt(yushy.style.left) + 75;
		var yushyY = parseInt(yushy.style.top) + 100;
		var planetX = parseInt(planet.style.left) + halfPlanetsWidth;
		var planetY = parseInt(planet.style.top);



		if( Math.abs(yushyX - planetX) <  halfPlanetsWidth){
			if(yushyY > planetY && yushyY < planetY + 40){	
				hit = true;
			}
		}
	}

	return hit;
}


function jump(){
	sndMusic = document.getElementById('sndJump');
	sndMusic.volume = 0.1;
	sndMusic.play();

	inAir = true;
	yushy.src = 'yushyjump.gif';
	yushyFallSpeed = -30;
	var yushyY = parseInt(yushy.style.top);
	if(yushyY >= 700) yushy.style.top = '699px';
}

function beginGame(){
	document.getElementById('instructionScreen').style.display = 'none';
	gameTimer = setInterval(gameloop, 50);

	clockTimer = setInterval(clockloop, 1000);
	currentTime = 0;
	output.innerHTML = currentTime;
}

function startGame(){
	document.getElementById('introScreen').style.display = 'none';
	
}

function replay(){
	document.getElementById('endScreen').style.display = 'none';
	clearInterval(clockTimer);

	init();
	gameTimer = setInterval(gameloop, 50);

	clockTimer = setInterval(clockloop, 1000);
	currentTime = 0;
	output.innerHTML = currentTime;

	
}


