//imortar o express
const express = require('express')

//executar o express aplicattion
const app = express()

//configurar a porta remora e local
const porta = process.env.PORT || 2

//definir o express como urlenconder
app.use(express.urlencoded({extended:false}))

//importa o pacote consig
const consign = require('consign')

//execultat o configurar consign
consign().include('./routes').into(app)

//definir a pasta do assets
app.use(express.static('./src/'))

//configurar os conteudos com acesso externo
module.exports = {app,porta}