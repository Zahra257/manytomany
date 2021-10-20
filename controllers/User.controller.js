const User = require('../models/User')


const getUsers = async(req,res,next) => {
    try{
        //USE ASYNC + AWAIT IN ANY QUERY OPERATION !!
        const user = await User.find()
        res.json({success: true, data: user})
    }catch(error){
        res.json({success: false, data: 'Something happened'})
    }
}


const oneUser = async(req,res,next) => {
    try{
        //USE ASYNC + AWAIT IN ANY QUERY OPERATION !!
        const user = await User.findById(req.params.id)
        res.json({success: true, data: user})
    }catch(error){
        res.json({success: false, data: 'Something happened'})
    }
}
const registerUser = async(req,res,next) => { 
    try{
        const user = new User(req.body)
        await user.save()

        res.json({success: true, message: 'Register successfully'})
    } catch(error){
        res.json({success: false, data: 'Something happened'})
    }
}

module.exports = {getUsers, registerUser, oneUser}