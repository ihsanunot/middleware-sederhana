const express = require('express')
const app = express()
const morgan = require('morgan');

// app.use(morgan('tiny'))

app.use(morgan('dev'))

// middleware
app.use((req,res,next) => {
    // res.send('hello middleware')
    console.log('hello middleware')
    next()
})

app.listen(3000,() => {
    console.log(`berjalan di http://localhost:3000`)
})

app.get('/', (req,res) =>{
    res.send('Hello Again')
})

app.get('/halaman', (req, res) => {
    res.send('Ayana Shahab')
})

// simple handling halaman yang tidak ada
app.use((req,res) => {
    res.status(404).send(' Error: 404 - Halaman tidak ditemukan')
})