require('./config/config.js');
const express = require('express'),
    app= express(),
    bodyParser = require('body-parser'),
    port= process.env.PORT

    
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

//get
app.get('/usuarios', function (req, res) {
   
    res.send('get info')
  
})  
//post
app.post('/usuario', function (req, res) {
    let body= req.body
    
    if (body.nombre===undefined) {
        res.status(400).json({
            status:400,
            def:"bad request"
        })
    } else {
        res.json({persona:body})
        
    }

})  
//put
app.put('/usuario/:id', function (req, res) {
    let identificadorUsuario=req.params.id
    res.json({
        id:identificadorUsuario
    })
    

})  
//delete
app.delete('/usuario', function (req, res) {

    res.send('delete info')

})  
    app.listen(port,()=>{
        console.log(`Server by ${port} port`)
    })
    
