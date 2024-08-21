import {pool} from '../config/config.js'

const getDb = async ()=>{
    let [data] = await pool.query('SELECT * from products_table')
    return data
}

const getOneDb = async (id)=>{
    let [[data]] = await pool.query('SELECT * from products_table where prod_id=?',[id])
    return data
}

const insertOneDb = async (prod_name,quantity,amount,category,prod_url)=>{
    let [data] = await pool.query('insert into products_table (prod_name,quantity,amount,category,prod_url) values (?,?,?,?,?)',[prod_name,quantity,amount,category,prod_url])
    return data
}



const deleteDb = async(id)=>{
    await pool.query('delete from products_table where prod_id =?',[id])
}

const updateDb = async(prod_name,quantity,amount,category,prod_url,id)=>{
    let [data] = await pool.query('UPDATE products_table SET prod_name=?,quantity=?,amount=?,category=?,prod_url=? WHERE prod_id=?',[prod_name,quantity,amount,category,prod_url,id])
    return data
    
}




export {getDb,getOneDb,insertOneDb,deleteDb,updateDb}