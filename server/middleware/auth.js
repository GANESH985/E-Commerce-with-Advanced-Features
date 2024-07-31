const jwt = require('jsonwebtoken')
require('dotenv').config()

exports.auth = (req,res,next)=>{
    const token = req.header('Authorization')

    if(!token){
        return res.status(401).json({error: 'No token, authorization denied'})
    }
    try {
        const decode = jwt.verify(token, process.env.JWT_SECRET)
        req.user = decode
        next()
    } catch (error) {
        res.status(401).json({error: ' Token is not valid'})
    }
}

exports.admin=(req,res,next)=>{
    if(req.user.role !== 'admin'){
        return res.status(403).json({error: 'Admin resource. Acces denied'})
    }
    next();
};