var texto = document.getElementById("contarLineas");
var boton = document.getElementById("boton_lineas");
var color_boton = document.getElementById("boton_color");
var reload_boton = document.getElementById("reload");

// var texto = prompt("¿Cuántas líneas quieres dibujar?");




boton.addEventListener("click", dibujoPorClick);
boton.addEventListener("", dibujoPorClick);
reload_boton.addEventListener("click", reloadPage);

// addEventListener with the "Enter" is pressed: 

texto.addEventListener("keypress", function(event) {
    if (event.keyCode == 13) {
        dibujoPorClick();
    }
});




console.log(boton)

var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var ancho = d.width;

var yi, xf, yf, xi;


function reloadPage() {
    location.reload();
}


function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}

function dibujoPorClick()

{
    
           //alert("hi" + lineas_dibujo)
            console.log(texto);
            var lineas = parseInt(texto.value);
            var l = 0;
            var espacio = ancho / lineas;
          
        
            for(l = 0; l < lineas; (l = l + 1))
        {  
            
            yi = (200+(espacio*l)); 
            xf = espacio* l;
            xi= espacio*l;
            yf=(200-(espacio*l));
            dibujarLinea("#008B8B", 0, yi , xf, 400);
            dibujarLinea("#008B8B", xi, 0 , 0, yf);
            dibujarLinea("#6495ED", (200+(espacio*l)), 0 , 400, espacio*l);
            dibujarLinea("#6495ED", (200+(espacio*l)), 400 , 400, (400-(espacio*l)));
        
            console.log("Linea " + l);
            
            

        }

    
    
            
}