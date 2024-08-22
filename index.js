import express from 'express'
import cors from 'cors'
import useRoute from './routes/useRoute.js'
import productRoute from './routes/productRoute.js'

let port = process.env.PORT || 2024

const app = express()
app.use(cors({
    origin: 'http://localhost:8083',
    credentials:true
}))
app.use(express.json())
app.use('/user',useRoute)
app.use('/product',productRoute)
app.use(express.static('public'))
app.listen(port,()=>{
    console.log('http://localhost:'+port);
})