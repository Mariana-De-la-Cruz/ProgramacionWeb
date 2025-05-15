const express = require("express");
const morgan = require("morgan"); 
const cors = require('cors'); 
const app=express();

app.use(express.json());
app.use(morgan('combined'))
app.use(cors())
app.use(express.urlencoded({extended: true}));

app.get('/tenistas', (req, res) =>{
    //OBTIENE CLIENTE
    const mysql = require('mysql2');
    
    //CREA CONEXIÓN A LA BASE DE DATOS
    const connection = mysql.createConnection({
      host: 'localhost',
      port: 3306,
      user: 'root',
      password: 'ne04lm00_7978mc',
      database: '22100178',
    });
    
    connection.query(
      'SELECT * FROM tenistas',
      function (err, results, fields) {
      console.log(results) 
      res.json(results) 
    });
});

app.post('/peliculas', (req, res) =>{
    console.log(req.body);
    res.send("servidor express contestando a peticion post");
})

//parametros de cadena de consultas
app.delete('/peliculas', (req, res) =>{
    console.log(req.params);
    res.send('servidor express conectado a peticion delete');
});

app.patch('/peliculas', (req, res) =>{
    console.log(req.params);
    res.send('servidor express conectado a peticion patch');
});

app.listen(8000, () => {
    console.log('Server express corriendo en el puerto 8000');
});
