import {getDb,getOneDb,insertOneDb,deleteDb,updateDb} from '../model/productDb.js'

const getPro = async (req,res)=>{
    try {
        
        res.json(await getDb())
        console.log('fetch successful');
    } catch (err) {
        console.log(err);
        res.status(500).send('failed to fetch')
    }
}

const getOne = async (req,res)=>{
    try {
        
        res.json(await getOneDb(req.params.id))
        console.log('fetch successful');
        
    } catch (err) {
        console.log(err);
        res.status(500).send('failed to fetch')

    }
}

const insertOne = async (req,res)=>{
    try {
        let {prod_name,quantity,amount,category,prod_url} = req.body 
        await insertOneDb(prod_name,quantity,amount,category,prod_url,prod_description)
        res.send('Inserted a product')
        
    } catch (err) {
        console.log(err);
        res.status(500).send('failed to insert')

    }
}



const deleteOne = async(req,res)=>{
    try {
        res.json(await deleteDb(req.params.id))
        console.log('Delete successful');
        
    } catch (err) {
        console.log(err);
        res.status(500).send('failed to delete')

    }
}

const updateOne = async (req,res)=>{
    try {
        let {prod_name,quantity,amount,category,prod_url,prod_description} = req.body
        let products_table =  await getOneDb(req.params.id)
        prod_name? prod_name=prod_name: prod_name=products_table.prod_name
        quantity?quantity=quantity:quantity=products_table.quantity
        amount?amount=amount:amount=products_table.amount
        category?category=category:category=products_table.category
        prod_url?prod_url=prod_url:prod_url=products_table.prod_url
        prod_description?prod_description=prod_description:prod_description=products_table.prod_description
    
        await updateDb(prod_name,quantity,amount,category,prod_url,prod_description,req.params.id)
        console.log('updated product');
        
    } catch (err) {
        console.log(err);
        res.status(500).send('failed to update')

    }
}


export {getPro,getOne,insertOne,deleteOne,updateOne}