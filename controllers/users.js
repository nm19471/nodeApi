import { User } from "../models/user.js";
export const getAllUsers=async (req,res)=>{
    // console.log(req.query)
    const users = await User.find({});
       res.json({
        "success": true,
        users,
       })
}

export const register = async (req,res)=>{
    const {id} = req.params;
    const users = await User.findById(id);

    res.json({
        "success":true,
        "name": users.name,
        "email": users.email,        
    })
    
}

export const signUp=async (req,res)=>{
    
    const {name,email,password} = req.body;
    await User.create({
        name,
        email,
        password,
    });
       res.cookie("tempi","lol").json({
        "success": true,
        "message": "Registered", 
       })
}

