const Session = require('../models/Session')

exports.recordLogin = async (userId,ipAddress) =>{
    const session = new Session({
        userId,
        ipAddress,
        loginTime: Date.now()
    })
    await session.save()
}

exports.recordLogout = async(sessionId)=>{
    const session = await Session.findById(sessionId)
    session.logoutTime = Date.now()
    await session.save()
}

exports.getSessions = async (req,res)=>{
    try {
        const sessions = await Session.find({userId:req.userId.id})
        res.status(200).json(sessions)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}