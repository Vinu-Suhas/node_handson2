const express=require('express')

const app=express()

app.get('/api/main',(request,response)=>{
    response.send('Express.js, or simply Express, is a back end web application framework for building RESTful APIs with Node.js, released as free and open-source software ')
})

app.listen(5000,()=>console.log('running on 5000'))