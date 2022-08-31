module.exports = (app)=>{
    //definir a resposta para a req "/'
    app.get('/generic', (req,res)=>{
        res.render('generic.ejs')
    })
}