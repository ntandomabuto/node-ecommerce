import express from 'express'
import cors from 'cors'
import useRoute from './routes/useRoute.js'
import productRoute from './routes/productRoute.js'

let port = process.env.PORT || 2024

const app = express()
app.use(express.json())
app.use(cors({
    origin: '',
    credentials:true
}))
app.use('/user',useRoute)
app.use('/product',productRoute)
app.use(express.static('public'))
app.listen(port,()=>{
    console.log('http://localhost:'+port);
})