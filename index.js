const express = require('express')
const app = express()
const port = 3000
const bodyparser = require('body-parser')
const bodyParser = require('body-parser')
const res = require('express/lib/response')


//configurando body-parser
app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())

//configurando ejs
app.set('view engine' , 'ejs')

//configurando arquivos estaticos
app.use(express.static('public'))

//Rota principal
app.get('/', (req , res)=>{
    res.render('index')
})

//Rota home
app.get('/home', (req , res)=>{
    res.send('<h1>Pagina Home</h1>')
})

//Rota main
app.get('/main', (req , res)=>{
    res.render('page/main')
})

//Rota Login
app.get('/login', (req , res)=>{
    res.render('login')
})

//Rota Cadastro
app.get('/cadastro', (req , res)=>{
    res.render('cadastro')
})

//Rota filmes
app.get('/filmes', (req , res)=>{
    res.render('filmes')
})

//Iniciando o sevidor
app.listen(port , ()=>{
    console.log('Servidor online!')
})
