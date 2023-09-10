require('dotenv').config();
const express = require('express')
const hbs = require('hbs');

const app = express()
const port = process.env.PORT;

// ? Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials( __dirname + '/views/partials');

// Servir contenido estatico
app.use( express.static('public'))

// seria la ruta de generic
app.get('/',(req,res) => {
    res.render('home', {
        nombre: 'Fernando Herrera',
        titulo: 'Curso de Node'
    });
});

app.get('/elements',(req,res)=>{
    res.render('elements',{
        nombre: 'Fernando Herrera',
        titulo: 'Curso de Node',
        subTitulo: 'Elements'
    });
});

app.get('/generic',(req,res) => {
    res.render('generic', {
        nombre: 'Fernando Herrera',
        titulo: 'Curso de Node',
        subTitulo: 'Generic'
    })
})

app.get('*', (req,res) => {
    res.render('404',{
        subTitulo: 'Curso de Node',
        code: '404',
        titulo: 'Error Page'
    })
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})