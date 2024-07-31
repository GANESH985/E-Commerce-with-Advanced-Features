const User = require("../models/User")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const supabase = require("../config/supabase")
require('dotenv').config()

exports.register = async (req,res)=>{
    const {email, password} = req.body;
    try{
        const user = await supabase.auth.signUp({email,password})
        if(user.error){
            res.status(400).json({error: user.error.message})
        }
        const newUser = new User({email,password : await bcrypt.hash(password,15)})
        await newUser.save()
        res.status(201).json({message: "User created successfully"})
    }catch(error){
        res.status(500).json({error: error.message})
    }
}


exports.login = async (req,res)=>{
    const {email, password} = req.body;
    try {
        const user = await User.findOne({email});
        if (!user || !(await bcrypt.compare(password, user.password))){
            return res.status(400).json({error: 'Invalid credentials'})
        }
        const token = jwt.sign({id: user._id,role: user.role}.process.env.JWT_SECRET,{
            expiresIn: '1d',
        })
        res.status(200).json({token})
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}