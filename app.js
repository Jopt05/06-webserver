const express = require('express');
const app = express();
const hbs = require('hbs');
require('dotenv').config();

hbs.registerPartials(__dirname + '/views/partials', function(err){});

// HBS 
app.set('view engine', 'hbs');

// Servir contenido estático
app.use( express.static( 'public' ) );

app.get('/', function(req,res) {
    res.render('home', {
        nombre: 'Omar',
        titulo: 'Curso Node'
    })
});

app.get('/generic', function(req,res) {
    res.render('generic', {
        nombre: 'Omar',
        titulo: 'Curso Node'
    })
});

app.get('/elements', function(req,res) {
    res.render('elements', {
        nombre: 'Omar',
        titulo: 'Curso Node'
    })
});

// Comodin, si entras a una ruta que no existe te envía a ésta
app.get('*', function(req,res) {
    res.sendFile(__dirname + '/public/404.html');
})

app.listen(process.env.PORT);