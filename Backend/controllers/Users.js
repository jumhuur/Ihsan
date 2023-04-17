const UserModel = require("../Models/Users")
const jwt = require('jsonwebtoken')
// token fucntion 
const CreateToken = (_id) => {
    return jwt.sign({_id},process.env.SECRET, {expiresIn: "3d"})
}
const Register = async(req,res) => {
    const {Magac,Lanbar, Password} = req.body

    try{
        const user = await UserModel.Register(Magac,Lanbar,Password)
        // Token 
        const Token = CreateToken(user._id)
        // soo celinta
        res.status(200).json({Magac, Lanbar, Token})

    } catch(err){
        res.status(400).json({Error: err.message})
        console.log(err.message)
    }
    //res.status(200).json({Msg: "Register is Ok"})
}

const Login = async(req,res) => {
    const {Lanbar, Password} = req.body
    try {
        const user = await UserModel.Login(Lanbar,Password)

        const Token = CreateToken(user._id)
        const Magac = user.Magac
        res.status(200).json({Magac,Lanbar,Token})

    } catch(Err){
        res.status(400).json({Error: Err.message})
    }
    //res.status(200).json({Msg: "Login Router is good"})
}




// const Getone = async(req,res) => {
//     res.status(200).json({Msg:"Good"})
// }


module.exports = {
    Login,
    Register
}