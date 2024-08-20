import {pool} from '../config/config.js'

const getDb = async ()=>{
    let [data] = await pool.query('SELECT * from products_table')
    return data
}

const getOneDb = async (id)=>{
    let [[data]] = await pool.query('SELECT * from products_table where prod_id=?',[id])
    return data
}



export {getDb,getOneDb,insertOneDb,deleteDb,updateDb}