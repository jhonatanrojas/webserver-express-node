const express = require('express')
const app = express()

const port =8080;
const hbs = require('hbs');


app.use(express.static(__dirname + '/public'));

//Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');



app.get('/',  (req, res)  =>{
    res.render('home',{
        nombre:'jhonatan rojas',
        titulo:'curso de NOde'
    });
})


app.get('/generic',  (req, res)  =>{
    res.render('generic',{
        nombre:'jhonatan rojas',
        titulo:'curso de NOde'
    });
})

app.get('/elements',  (req, res)  =>{
    res.render('elements',{
        nombre:'jhonatan rojas',
        titulo:'curso de NOde'
    });
})



app.get('*',  (req, res)  =>{
    res.send('404  pagina no encontrada')
})

app.listen(port,()=>{
    console.log('servidor levantado')
});