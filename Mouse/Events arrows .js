var teclas = 
// Esto es un objeto, de object notation. Éstos están preprogramados. 
{
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGTH: 39
};
console.log(teclas);
//json java script object notation.  
// Las variables perpetuas, como cuando usamos UP que tiene como 
//cófigo 38 se escribe en mayúsculas. 
document.addEventListener("keydown", drawKeys);
//parte de las buenas prácticas es que las funciones deben empezar con minúscula y la segunda palabra llevar mayúsucla. 
//El evento no sucede en el canvas, por lo que poner el id, como en el mouse no 
//va a funcionar. Por lo tanto debemos usar el objeto "document" que contiene todo 
//lo que hacemos en html.   





var color_boton = document.getElementById("grosor");
grosor.addEventListener("click", changeG1);

var color_boton = document.getElementById("grosor3");
grosor3.addEventListener("click", changeG3);

var color_boton = document.getElementById("grosor5");
grosor5.addEventListener("click", changeG5);

var color_boton = document.getElementById("grosor10");
grosor10.addEventListener("click", changeG10);

var color_boton = document.getElementById("black");
black.addEventListener("click", changeColor);

var borrador_boton = document.getElementById("borrador");
borrador.addEventListener("click", changeColorWhite);

var borrador_boton = document.getElementById("borrador");
borrador.addEventListener("dblclick", eraseAll, (e) => console.log('Double Click.'));

var color_boton = document.getElementById("red");
red.addEventListener("click", changeColorRed);

var color_boton = document.getElementById("blue");
blue.addEventListener("click", changeColorBlue);

var color_boton = document.getElementById("yellow")
yellow.addEventListener("click", changeColorYellow)


var squareDraw = document.getElementById("drawingKeys");
var paper = squareDraw.getContext("2d");
squareDraw.addEventListener("mousedown", drawMouseBegin);
squareDraw.addEventListener("mouseup", drawMouseEnd);
squareDraw.addEventListener("mousemove", drawMouseMove);


var x = 0;
var y = 0;
var moveK = 5;
var thick = 1;
var thickness = 1;

var color1 = "blue";
let mouse = false;



function changeColor()
{color1 = "black"}

function eraseAll()
{thick = 400;
thickness = 400;
dibujarLinea("white",200 ,0 ,200 ,400 ,paper )}

function changeColorWhite()
{color1 = "white"}

function changeColorRed()
{color1 = "red"}

function changeColorBlue()
{color1 = "blue"}

function changeColorYellow()
{color1 = "yellow"}

function changeG1()
{thick = 1;
thickness = 1;}

function changeG3()
{thick = 3;
thickness = 3;}

function changeG5()
{thick = 5;
thickness = 5;}

function changeG10()
{thick = 10;
thickness = 10;}



function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth= thick;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}

function drawMouseBegin(evento1)
{mouse = true;
    console.log("aprieta")
    console.log(evento1);}

function drawMouseEnd()
{mouse = false;
console.log("suelta");}

function drawMouseMove(eventoM)
{if (mouse == true)
    {
        console.log(eventoM);
        dibujarLinea(color1, eventoM.offsetX + thickness, eventoM.offsetY - thickness, eventoM.offsetX+ thickness, eventoM.offsetY + thickness, paper)
    }};


function drawKeys(evento)
{
/*/ se podría usar console.log(evento) 
Usando la consola (recuerda que es crlt+shift+i)
Se pueden ver los datos de cada evento./*/

switch(evento.keyCode)
    {
    
    case teclas.UP : 
    console.log("teclita Up");
    dibujarLinea(color1, x, y, x, y - moveK, paper);
    y = y - moveK
    break;

    case teclas.DOWN :
        console.log("Teclita Down");
        dibujarLinea(color1, x, y + moveK, x, y, paper);
        y = y + moveK;
    break;

    case teclas.LEFT:
        console.log("Teclita Left");
        dibujarLinea(color1, x, y, x - moveK, y, paper);
        x = x - moveK;
    break;

    case teclas.RIGTH:
        console.log("Teclita Right");
        dibujarLinea(color1, x , y, x + moveK, y, paper);
        x = x + moveK;
    break;
    
    
    }


}
//Switch funciona para comparar, algunos nos son muy adeptos a esta 
//función, es muy distinto a otras estructuras de control de script.

