// Conectar con la base de datos en MongoDB Atlas
const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const uri = "mongodb+srv://KhisKhan:4682oscuridad@cluster0.pr5f4tt.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
let collection;

client.connect(err => {
  if (err) throw err;
  collection = client.db("test").collection("ClickCounter");
  console.log("Conexión con la base de datos establecida");

  // Obtener el valor actual del contador en la base de datos y actualizar la página
  collection.findOne({}, function(err, result) {
    if (err) throw err;
    if (result) {
      contador.innerText = result.total_clics;
    } else {
      collection.insertOne({ total_clics: 0 }, function(err, res) {
        if (err) throw err;
        contador.innerText = 0;
      });
    }
  });
});

// Obtener el botón y el contador
const botonContador = document.getElementById('boton-contador');
const contador = document.getElementById('contador');

// Agregar un evento de clic al botón
botonContador.addEventListener('click', function() {
  // Incrementar el contador en la base de datos
  collection.updateOne({ total_clics: { $exists: true } }, { $inc: { total_clics: 1 } }, function(err, res) {
    if (err) throw err;
    // Obtener el valor actual del contador en la base de datos
    collection.findOne({}, function(err, result) {
      if (err) throw err;
      // Actualizar el texto del contador en la página con el valor obtenido
      contador.innerText = result.total_clics;
    });
  });
});
