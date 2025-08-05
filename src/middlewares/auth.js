import { User } from "../models/user.js"
import jwt from 'jsonwebtoken'
const userAuth = async (req, res, next) =>{

    try{
    const cookies = req.cookies
    const { token } = cookies

    if(!token){
        throw new Error("token not found")
    }

    const decoded = jwt.verify(token, 'shhhhh')

    const {_id} = decoded

    const user = await User.findById(_id)

    if(!user){
        throw new Error("user not found")
    }
    req.user = user;
    next()
    }

    catch(err){
        res.status(401).send("Error " + err)
    }



}

export default userAuth