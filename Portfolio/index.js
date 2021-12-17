const express = require('express');
const app = express();
app.set('view engine','ejs');
app.use(express.static('public'));
app.get('/', function(req,res){
    res.render('home.ejs');
});
app.get('/projects', function(req,res){
    res.render('projects.ejs');
});
app.get('/comming', function(req,res){
    res.render('comming.ejs');
});

app.get('/about', function(req,res){
    res.render('about.ejs');
});

app.get('/resume',(req,res) => {
    res.render('resume.ejs');
})

app.get('/testes', function(req,res){
    res.render('testes.ejs');
})

const door = 3000;
app.listen (door, function(){
    console.log('Server Working');
});

