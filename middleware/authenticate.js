import {compare} from "bcrypt";
import jwt from 'jsonwebtoken'
import {config} from 'dotenv'
import {fetchUserDb} from '../model/userDb.js'

config()

const checkUser = async (req, res, next) => {
  try {
    const {email_add, user_pass} = req.body
    let pass = (await fetchUserDb(email_add)).user_pass
    // console.log(pass);
    compare(user_pass, pass, (err, result) => {
      if (err) throw err
      if (result == true) {
        let token = jwt.sign({email_add: email_add, user_pass: user_pass,}, process.env.SECRET_KEY)
        console.log(token);
        req.body.token = token
        next()
        return
      }
    })
  } catch (err) {
    console.log(err)
    res.status(500).send('Incorrect login info')
  }
}

const verifyAToken = (req, res, next) => {
  try {
    jwt.verify(req.body.token, process.env.SECRET_KEY, (err, decoded) => {
      if (err) throw err
      req.body.user = decoded.email_add
      console.log(decoded);        
    })
    next()
  } catch (err) {
    console.log(err)
    res.status(400).send('Invalid token')
  }
}

export {checkUser, verifyAToken}