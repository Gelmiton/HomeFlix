const express = require('express')
const app = express()
const port = 3000
const bodyparser = require('body-parser')
const bodyParser = require('body-parser')
const res = require('express/lib/response')
const usuario = require('./database/cadastro_usuario')
//const connection = require('./database/conection')
//const cadastrouser = require('./database/cadastro_usuario')


//configurando body-parser
app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())

//configurando ejs
app.set('view engine' , 'ejs')

//configurando arquivos estaticos
app.use(express.static('public'))

//configuração da conecção com o banco de dados
//connection
  //  .authenticate()
 //   .then(()=>{
 //       console.log('Conexão com bando de dados feito com sucesso!')
 //  }).catch((error)=>{
   //     console.log(error)
  //  })

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

//Rota Validação login

app.post("/login",(req, res)=>{
    var email = req.body.email;
    var password = req.body.password;
    var usuarios = ["gel@gmail.com", "yan@gmail.com"];
    
    if (usuarios.include(email)){
        if (senha != "123" ){
            res.end("Senha incorreta!");
        }else{
            res.end("Usuario não existe!");
        }
        }else {
            res.redirect('/page/main');

    }
        
})
   


    

//Rota Cadastro POST
//app.post('/cadastro-user' , (req , res )=>{
  //  cadastrouser.create({
   //     email: req.body.email, 
   //     senha: req.body.senha,
   //     senha_2: req.body.senha_2
   // }).then(function(){
   //     res.render("/login")
   // }).catch(function(erro){
   //     res.send("Houve erro no cadastro, cadastro não efetuado" + erro)
   // }) 
//})

//Rota filmes
app.get('/filmes', (req , res)=>{
    res.render('page/filmes')
})

//Rota series
app.get('/series', (req , res)=>{
    res.render('page/series')
})

//Rota Documentarios
app.get('/documentarios', (req , res)=>{
    res.render('page/documentarios')
})

//Rota para Play
app.get('/ferro', (req , res)=>{
    res.render('page/ferro')
})

//Iniciando o sevidor
app.listen(port , ()=>{
    console.log('Servidor online!')
})
