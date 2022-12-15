




function enterData(event) {
    if (event.keyCode == 13) {
        nombre = document.getElementById("nombre").value;
        peso = document.getElementById("peso").value;
        altura = document.getElementById("altura").value;
        document.getElementById("nombre").value = "";
        document.getElementById("nombre").placeholder = nombre;
        imcCalculate(peso,altura);
        console.log("El IMC de " + nombre + " es: " + imcCalculate(peso,altura));
        mensaje.innerHTML = "El IMC de " + nombre + " es: " + imcCalculate(peso,altura);
        imcTable.innerHTML = "Prueba2"
        imcTableFunction();


    }

}

function calculateImc()
{
    nombre = document.getElementById("nombre").value;
    peso = document.getElementById("peso").value;
    altura = document.getElementById("altura").value;
    document.getElementById("nombre").value = "";
    document.getElementById("nombre").placeholder = nombre;
    imcCalculate(peso,altura);
    mensaje.innerHTML = "El IMC de " + nombre + " es: " + imcCalculate(peso,altura);
    imcTable.innerHTML = "Prueba2"
    imcTableFunction();

    
}


    
function br() {
    document.write("<br>");
    document.write("<br>");
    
}

function print(message) {
    document.write(message);
    br();
    
}

function imcCalculate(peso,altura)
{   
    imc = peso / (altura * altura);
    imc = imc.toFixed(1);
    return imc;
}


// Tabla IMC


function imcTableFunction() {
if  (imc < 18.5) {
    imcTable.innerHTML = "Peso inferior al normal";
}

else if (imc >= 18.5 && imc <= 24.9) {
    imcTable.innerHTML = "Peso normal";
}

else if (imc >= 25 && imc <= 29.9) {
    imcTable.innerHTML= "Sobrepeso";
}

else if (imc >= 30 && imc <= 34.9) {
    imcTable.innerHTML = "Obesidad grado I";
}

else if (imc >= 35 && imc <= 39.9) {
    imcTable.innerHTML = "Obesidad grado II";
}

else if (imc >= 40) {
    imcTable.innerHTML = "Obesidad grado III";
}

else {
    imcTable.innerHTML = "Error";
}
console.log(imcTable.innerHTML);
}



