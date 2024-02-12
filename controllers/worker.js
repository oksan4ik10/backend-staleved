const bcrypt = require('bcryptjs');

const Worker = require("../models/Worker")



module.exports.getAll = (req, res)=> {

}
module.exports.create = async (req, res)=> {
    // const {name, }
    const {name, salary, login, password, idRole} = req.body;
    const candidate = await Worker.findOne({login: login});
    if(candidate){
        res.status(409).json({
            message: "Такой пользователь уже существует"
        })
        return
    }

    const salt = bcrypt.genSaltSync(10);
    const worker = new Worker({
        login: login,
        password:bcrypt.hashSync(password, salt),
        name: name,
        salary: salary ? salary : null,
        idRole: idRole
    })
    console.log(worker);

    try{
        await worker.save()
        res.status(200).json(worker)
    }catch(e){
      console.log(e);
    }



}
module.exports.delete = (req, res)=> {

}
module.exports.update = (req, res)=> {

}
module.exports.getById = (req, res)=> {

}