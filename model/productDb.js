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



export {getDb,getOneDb,insertOneDb,deleteDb,updateDb}