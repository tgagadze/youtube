const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();

app.use(express.static(__dirname));
app.use(express.urlencoded({extended:true}))
app.use(cookieParser("1234"));

app.set('views', "./views");
app.set('view engine', 'ejs');

app.get('/', (req,res)=>{

    res.render("index",{background: req.cookies.background, color: req.cookies.color});
})

app.post('/',(req,res)=>{
    res.cookie('background', req.body.background);
    res.cookie('color', req.body.color);
    

    res.redirect('/');
})

app.listen(3000, ()=>{console.log('server started....')})