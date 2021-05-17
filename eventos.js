var canvas = document.getElementById("canvas");
var lienzo = canvas.getContext("2d");
var color = document.getElementById("seleccionarColor");
var ancho = document.getElementById("seleccionarAncho");

canvas.addEventListener("mousedown", startMouse);
canvas.addEventListener("mousemove", dibujarMouse);
canvas.addEventListener("mouseup", finishMouse);

var xi, yi, xf, yf;
var mouseClickeado = false;
var color = "black";
var ancho = 3;

function defColor(c)
{
    color = c;
}

function defAncho(a)
{
    ancho = a;
}

function startMouse(evento)
{
    mouseClickeado = true;
    xi = evento.layerX;
    yi = evento.layerY;
}

function dibujarMouse(evento)
{
    if(mouseClickeado)
    {
        xf = evento.layerX;
        yf = evento.layerY;
        dibujarLinea(color, xi, yi, xf, yf);
        xi = xf;
        yi = yf;
    }
}

function finishMouse(evento)
{
    mouseClickeado = false;
}

function dibujarLinea(color, xi, yi, xf, yf) 
{
	lienzo.beginPath();
	lienzo.strokeStyle = color;
	lienzo.lineWidth = ancho;
	lienzo.moveTo(xi, yi);
	lienzo.lineTo(xf, yf);
	lienzo.stroke();
	lienzo.closePath();
}