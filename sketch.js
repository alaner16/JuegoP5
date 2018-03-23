var count =0;
var contCarro = 100;
function setup() {
  createCanvas(400, 400);
	//rectMode(CENTER);
}

function draw() {
	//generarCarro();
	//contCarro = Math.random() * (0-(101))-(101);
	var x = width / 2;
	var y = height - count; 
	var yCarro = height - contCarro;
	background(220);
	//jugador
	rect (180,280,40,100);
	//izquierda
	//carroIzquierda(10,10,10,10);
	var p = p + random(20,-20);
	rect (40,0,5,400);
	rect (50,y-0,5,30);
	rect (50,y-40,5,30);
	rect (50,y-80,5,30);
	rect (50,y-120,5,30);
	rect (50,y-160,5,30);
	rect (50,y-200,5,30);
	rect (50,y-240,5,30);
	rect (50,y-280,5,30);
	rect (50,y-320,5,30);
	rect (50,y-360,5,30);
	rect (50,y-400,5,30);
	rect (50,y-440,5,30);
	rect (50,y-480,5,30);
	rect (50,y-520,5,30);
	rect (50,y-560,5,30);
	rect (50,y-600,5,30);
	//derecha
	rect (360,0,5,400);
	rect (350,y-0,5,30);
	rect (350,y-40,5,30);
	rect (350,y-80,5,30);
	rect (350,y-120,5,30);
	rect (350,y-160,5,30);
	rect (350,y-200,5,30);
	rect (350,y-240,5,30);
	rect (350,y-280,5,30);
	rect (350,y-320,5,30);
	rect (350,y-360,5,30);
	rect (350,y-400,5,30);
	rect (350,y-440,5,30);
	rect (350,y-480,5,30);
	rect (350,y-520,5,30);
	rect (350,y-560,5,30);
	rect (350,y-600,5,30);
	//lineas centrales
	rect (150,0,5,400);
	rect (250,0,5,400);
	//movimiento de lineas de carril
	ra = Math.random() * (0-(10))-(10);
	count -= 3;
	if(count < -200){
		count = 0;
	} 
	ra = Math.random() * (0-(10))-(10);
	//console.log(ra);
	//generacion de carros a la izquierda
	var carroIzquierda = rect (80,yCarro-400,40,100);
	contCarro -= 2;
	if(contCarro < -400){
		contCarro = 100;
	}
	//generacion de carros a la derecha
	var carroDerecha = rect (280,yCarro-400,40,100);
	contCarro -= 5;
	if(contCarro < -400){
		contCarro = 100;
	}
}

function generarCarro(){
	
	var carroDerecha = rect (280,contCarro-400,40,100);
	contCarro -= 5;
	if(contCarro < -400){
		contCarro = 100;
	}
}
function carroIzquierda(a,b,c,d){
	rect (40,0,5,400);
	rect (50,y-0,5,30);
	rect (50,y-40,5,30);
	rect (50,y-80,5,30);
	rect (50,y-120,5,30);
	rect (50,y-160,5,30);
	rect (50,y-200,5,30);
	rect (50,y-240,5,30);
	rect (50,y-280,5,30);
	rect (50,y-320,5,30);
	rect (50,y-360,5,30);
	rect (50,y-400,5,30);
	rect (50,y-440,5,30);
	rect (50,y-480,5,30);
	rect (50,y-520,5,30);
	rect (50,y-560,5,30);
	rect (50,y-600,5,30);
}