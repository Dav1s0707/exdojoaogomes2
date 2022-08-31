module.exports = (app)=>{
    //definir a resposta para a req "/'
    app.get('/elements', (req,res)=>{
        res.render('elements.ejs')
    })
}