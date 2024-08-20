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



const deleteOne = async(req,res)=>{
    res.json(await deleteDb(req.params.id))
    console.log('Delete successful');
}

const updateOne = async (req,res)=>{
    let {prod_name,quantity,amount,category,prod_url} = req.body
    let products_table =  await getOneDb(req.params.id)
    prod_name? prod_name=prod_name: prod_name=products_table.prod_name
    quantity?quantity=quantity:quantity=products_table.quantity
    amount?amount=amount:amount=products_table.amount
    category?category=category:category=products_table.category
    prod_url?prod_url=prod_url:prod_url=products_table.prod_url

    await updateDb(prod_name,quantity,amount,category,prod_url,req.params.id)
}


export {getPro,getOne,insertOne,deleteOne,updateOne}