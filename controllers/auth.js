const bcrypt = require("bcryptjs")
const { response } = require("express")
const jwt = require("jsonwebtoken")
//const { createJwt } = require("../helpers/createJwt")
//const { googleVerify } = require("../helpers/google-verify")
const User = require("../models/user")

const login = async(req = require, res = response)=>{
    const {mail,password} = req.body

    try {
        //Verificar si el mail existe
        const user = await User.findOne({mail})  

        if(!user){
            return res.status(400).json({
                msg:"Mail o Contraseña no son correctos - mail"
            })
        }

        //Si el usuario esta activo
        if(!user.status){
            return res.status(400).json({
                msg:"Usuario deshabilitado"
            })
        }
        //Verificar la contraseña 
       const passwordVerify = bcrypt.compareSync(password, user.password) 
       if(!passwordVerify){
        return res.status(400).json({
            msg:"Mail o Contraseña no son correctos - pass"
        })
    }
        //Generar el JWT
        const token = await createJwt(user.id);
        res.json({
            user,
           token
        })
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            msg:`Error: ${error}`
        })
    }
};

module.exports = {
    login
};