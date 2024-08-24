import express from 'express'
import cors from 'cors'
import useRoute from './routes/useRoute.js'
import productRoute from './routes/productRoute.js'

let port = process.env.PORT || 2024

const app = express()
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Methods", "*");
    res.header("Access-Control-Request-Methods", "*");
    res.header("Access-Control-Allow-Headers", "*");
    res.header("Access-Control-Expose-Headers", "Authorization");
    next()
})
app.use(cors())
app.use(express.json())
app.use('/user',useRoute)
app.use('/product',productRoute)
app.use(express.static('public'))
app.listen(port,()=>{
    console.log('http://localhost:'+port);
})  