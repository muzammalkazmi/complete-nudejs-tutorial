const express=require('express')
const app= express()
app.get('/',(req,res)=>{
    res.send('Muzammal kazmi')
})
app.listen(3200)