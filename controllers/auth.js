const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')

const config = require('../config/config')
const Worker = require("../models/Worker")

module.exports.login = async (req, res)=> {
    try{
        const candidate = await Worker.findOne({login: req.body.login});
        if(candidate){
            const passwordRes = bcrypt.compareSync(req.body.password, candidate.password)
            if(passwordRes){
                const token= jwt.sign({
                    userId: candidate._id
                }, config.keys, {expiresIn: 60*60*24*365});
                res.status(200).json({
                    token: `Bearer ${token}`
                })
            } else{
                res.status(401).json({
                    message: "Пароль не верный. Попробуйте снова"
                })
            }

        } else{
            res.status(404).json({
                message: "Пользователь с таким логином не найден"
            })
        }
    }
    catch(e){
        console.log(e);
        // errorHandler(res, e)
    }
}

