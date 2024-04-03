const User = require('../models/userRegModel')
const jwt = require('jsonwebtoken')

const createToken = (_id) => {
    return jwt.sign({_id}, process.env.SECRET, {expiresIn: '1d'})
}

//login user
const loginUser = async(req, res) => {
    const {email, password} = req.body

    try{
        const user = await User.login(email, password)

        //create token
        const token = createToken(user._id)

        res.status(200).json({
            email: user.email,
            token})
    }catch (error){
        res.status(400).json({error: error.message})
    }
}

//signup user
const signupUser = async(req, res) => {
    const {first_name, last_name, email, password, userRole} = req.body

    try{
        const user = await User.signup(first_name, last_name, email, password, userRole)

        //create token
        const token = createToken(user._id)

        res.status(200).json({
            first_name: user.first_name,
            last_name: user.last_name,
            email: user.email,
            token,
            userRole: user.userRole})
    }catch (error){
        res.status(400).json({error: error.message})
    }

}

module.exports = { signupUser, loginUser }
