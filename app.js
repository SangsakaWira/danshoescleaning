const express = require('express');
const hbs = require('hbs');

const app = express();

var port = process.env.port || 3000;

app.set('view engine','hbs');
app.use(express.static(__dirname+'/public'));
hbs.registerPartials(__dirname+"/viewspartials")


app.listen(port,function(){
    console.log("Server is running at "+port);
})

app.get('/',function(req,res){
    res.render("index");
})

app.get('/blog',function(req,res){
    res.render("blog");
})

app.get('/blog-details',function(req,res){
    res.render("blog-details");
})