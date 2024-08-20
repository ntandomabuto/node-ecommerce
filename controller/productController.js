import bcrypt from 'bcrypt'
import {getDb,getOneDb,insertOneDb,deleteDb,updateDb} from '../model/productDb.js'

const getPro = async (req,res)=>{
    res.json(await getDb())
}

const getOne = async (req,res)=>{
    res.json(await getOneDb(req.params.id))
}



export {getPro,getOne,insertOne,deleteOne,updateOne}