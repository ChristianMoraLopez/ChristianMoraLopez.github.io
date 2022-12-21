


// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

// Requisitos:
// - Debe funcionar solo con letras minúsculas
// - No deben ser utilizados letras con acentos ni caracteres especiales
// - Debe ser posible convertir una palabra para la versión encriptada también devolver una palabra encriptada para su versión original.

// Por ejemplo:
// "gato" => "gaitober"
// gaitober" => "gato"

// La página debe tener campos para
// inserción del texto que será encriptado o desencriptado, y el usuario debe poder escoger entre as dos opciones.
// El resultado debe ser mostrado en la pantalla.


// Función para encriptar




var texto = document.getElementById("texto").value;
var resultado = document.getElementById("resultado");
var desencriptarTexto = false;
const encriptar = document.getElementById('encriptar');

const desencriptar = document.getElementById('desencriptar');

encriptar.addEventListener('click', activateButtonEncriptar);
desencriptar.addEventListener('click', activateButtonDesencriptar);


function activateButtonEncriptar() {
    var texto = document.getElementById("texto").value;
    var resultado = document.getElementById("resultado");
    var textoEncriptado = "";
    console.log("Activate");
    buttonActive = true;
 if (texto.length == 0)
 {
        resultado.innerHTML = "Por favor ingrese un texto";
 }
    else    
    { encriptarTexto()}

}

function activateButtonDesencriptar()

{  var texto = document.getElementById("texto").value;
    var resultado = document.getElementById("resultado");
    var textoEncriptado = "";
    buttonActive = true;
    console.log("Activate");
    if (texto.length == 0)
    {
           resultado.innerHTML = "Por favor ingrese un texto";
    }
       else    
       { decryptText()}

}


function decryptText()
{ 
    var texto = document.getElementById("texto").value;
    var resultado = document.getElementById("resultado");
    var textoDesencriptado = "";
    for (var i = 0; i < texto.length; i++) {
        if (texto[i] == "i" && texto[i+1] == "m" && texto[i+2] == "e" && texto[i+3] == "s")
        {
            textoDesencriptado += "i";
            i += 3;
        }

        else if (texto[i] == "a" && texto[i+1] == "i")
        {
            textoDesencriptado += "a";
            i += 1;
        }
        else if (texto[i] == "o" && texto[i+1] == "b" && texto[i+2] == "e" && texto[i+3] == "r")
        {
            textoDesencriptado += "o";
            i += 3;
        }
        else if (texto[i] == "u" && texto[i+1] == "f" && texto[i+2] == "a" && texto[i+3] == "t")
        {
            textoDesencriptado += "u";
            i += 3;
        }
        else
        {
            textoDesencriptado += texto[i];
        }
    }
    resultado.innerHTML = textoDesencriptado;
    console.log("textoEncriptado");

    if (textoDesencriptado == texto)
    {
        resultado.innerHTML = "El texto ingresado no está encriptado";
    }

}



function encriptarTexto()
{
    var texto = document.getElementById("texto").value;
    var resultado = document.getElementById("resultado");
    var textoEncriptado = "";
    for (var i = 0; i < texto.length; i++) {
        if (texto[i] == "i") {
            textoEncriptado += "imes";
        } else if (texto[i] == "a") {
            textoEncriptado += "ai";
        } else if (texto[i] == "o") {
            textoEncriptado += "ober";
        } else if (texto[i] == "u") {
            textoEncriptado += "ufat";
        } else {
            textoEncriptado += texto[i];
        }
    }
    resultado.innerHTML = textoEncriptado;
}



