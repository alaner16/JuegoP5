var count =0;
var contCarro = 1000;
var contCarro2 = 100;
var contCarro1 = 100;
var img;
var xx = 140;

function preload(){
	img = loadImage("../carro.png")
	avi = loadImage("../plane2.png")
}
function setup() {
  createCanvas(400, 400);
	//rectMode(CENTER);
	a=10;
	b=10;
	c=10;
}

function draw() {
	background(220);
	
	var x = width / 2;
	var y = height - count; 
	var yCarro = height - contCarro1;
	var xCarro = height - contCarro2;
	var zCarro = height - contCarro;
	
	//jugador
	var jugador = image(img,xx,260);
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
	} 
	//generacion de carros a la izquierda
	var carroIzquierda = image (avi,70,yCarro-400);//,40,70);
	contCarro1 -= a;
	if(contCarro1 < -400){
		contCarro1 = posicion();
		a = velocidad();
	}
	//generacion de carros al centro
	var carroCentro = image (avi,170,zCarro-400);//,40,70);
	contCarro -= b;
	if(contCarro < -400){
		contCarro = posicion();
		b = velocidad();
	}
	//generacion de carros a la derecha
	var carroDerecha = image (avi,270,xCarro-400);//,40,70);
	contCarro2 -= c;
	if(contCarro2 < -400){
		contCarro2 = posicion();
		c = velocidad();
	}

	var choke = collideRectRect(jugador.xx, jugador.y, 128, 128, carroCentro.xx, carroCentro.y,70,70);
	if(choke){
		console.log("hola");
	}
}

function keyPressed(){
	if (keyCode == 37){
		if (xx!=40){
			xx -= 100;
		}
	}
	if (keyCode == 39){
		if (xx!=240){
			xx += 100;
		}
	}
}

function velocidad(){
	return random(5,8);
}
function posicion(){
	return random(100,300);
}

/* function generarCarro(){
	
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
} */