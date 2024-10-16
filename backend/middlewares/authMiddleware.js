import JWT from 'jsonwebtoken'
import usermodel from '../models/usermodel.js';
//protect user(token based)

export const  requireLogin = async (req,res,next)=>{
    //next is used for validaton and when validation is done the res is sent
    try {
        const decode=JWT.verify(req.headers.authorization,process.env.JWT_SECRET);
        //the token is present in headers not in body
        req.user=decode
        next();
        
    } catch (error) {
        console.log(error);
    }

}

export const isAdmin= async (req,res,next)=>{
    try {
        //check user if admin or nt
        const user = await usermodel.findById(req.user._id)
        if(user.role !==1){
            return res.status(400).send({
                success: false,
                message: "Unauthorized Access",
            })
        }else{
            next();
        }
        
    } catch (error) {
        return res.status(401).send({
            success: false,
            message: "Error in Admin middleware",
            error,
        })
    }

}