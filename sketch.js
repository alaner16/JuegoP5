var count =0;
var contCarro = 100;
var contCarro2 = 100;
var contCarro1 = 100;
var img;
var xx = 180;
function setup() {
  createCanvas(400, 400);
	//rectMode(CENTER);
	img = loadImage("./carro.jpg")
	a=10;
	b=10;
	c=10;
}

function draw() {

	image(img,200,200);
	image(img, 0, height/2, img.width/2, img.height/2);
	
	var x = width / 2;
	var y = height - count; 
	var yCarro = height - contCarro1;
	var xCarro = height - contCarro2;
	var zCarro = height - contCarro;
	background(220);
	//jugador
	rect (xx,280,40,70,20);
	//izquierda
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
	count -= 3;
	if(count < -200){
		count = 0;
		// contCarro = velocidad();
		// contCarro2 = velocidad();
	} 
	//generacion de carros a la izquierda
	var carroIzquierda = rect (80,yCarro-400,40,70);
	contCarro1 -= a;
	if(contCarro1 < -400){
		contCarro1 = posicion();
		a = velocidad();
	}
	//generacion de carros al centro
	var carroCentro = rect (180,zCarro-400,40,70);
	contCarro -= b;
	if(contCarro < -400){
		contCarro = posicion();
		b = velocidad();
	}
	//generacion de carros a la derecha
	var carroDerecha = rect (280,xCarro-400,40,70);
	contCarro2 -= c;
	if(contCarro2 < -400){
		contCarro2 = posicion();
		c = velocidad();
	}
}

function keyPressed(){
	if (keyCode == 37){
		if (xx!=80){
			xx -= 100;
		}
	}
	if (keyCode == 39){
		if (xx!=280){
			xx += 100;
		}
	}
}

function velocidad(){
	return random(5,8);
}
function posicion(){
	return random(100,200);
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