import bcrypt from 'bcrypt'
import {getDb,getOneDb,insertOneDb,deleteDb,updateDb} from '../model/productDb.js'

const getPro = async (req,res)=>{
    res.json(await getDb())
}

const getOne = async (req,res)=>{
    res.json(await getOneDb(req.params.id))
}

const insertOne = async (req,res)=>{
    let {prod_name,quantity,amount,category,prod_url} = req.body 
    await insertOneDb(prod_name,quantity,amount,category,prod_url)
    res.send('Inserted a product')
}



export {getPro,getOne,insertOne,deleteOne,updateOne}