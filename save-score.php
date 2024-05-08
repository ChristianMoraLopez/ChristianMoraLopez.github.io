<?php
// Conexión a la base de datos
$servername = "database-2.culxyrdczvz6.us-east-2.rds.amazonaws.com";
$username = "admin";
$password = "4682oscuridad";
$database = "database-2";

// Crear conexión
$conn = new mysqli($servername, $username, $password, $database);

// Verificar conexión
if ($conn->connect_error) {
    die("Error de conexión: " . $conn->connect_error);
}

// Obtener datos del formulario
$playerName = $_POST['player-name'];
$score = $_POST['score'];

// Preparar la consulta SQL para insertar los datos
$sql = "INSERT INTO puntajes (nombre_jugador, puntaje) VALUES ('$playerName', '$score')";

// Ejecutar la consulta
if ($conn->query($sql) === TRUE) {
    echo "Puntaje guardado exitosamente.";
} else {
    echo "Error al guardar el puntaje: " . $conn->error;
}

// Cerrar conexión
$conn->close();
?>
