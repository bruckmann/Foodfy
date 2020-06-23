const express = require('express')
const server = express()
const nunjucks = require('nunjucks')
const dados = require('../Foodfy/public/assets/data')


server.use(express.static('public'))

nunjucks.configure("views", {
    express: server,
    noCache: true,
    autoescape: false
})

server.set("view engine" , "njk")


server.get("/" , (req, res) => {

    return res.render('index')

})

server.get('/about', (req, res) => {

    return res.render('about')

})


server.get('/recips', (req, res) => {
    return res.render('recips' , {recips:dados})
})


server.get('/recips/:id', (req, res) => {
    const id = req.params.id;

    const info = dados.find((info) => {
        return info.id == id
    })

    if (!info) {
        return res.send("page not found")
    }

    return res.render('onepage' , {item:info})
})




server.listen(3000 , () => {
    console.log('ONLINE')
})