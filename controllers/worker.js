const bcrypt = require('bcryptjs');
const errorHandler = require('../utils/errorHandler')

const Worker = require("../models/Worker")



module.exports.getAll = async (req, res)=> {

    let keysQuery =Object.assign({}, req.query);
    let paramOrdering = {};
    if(keysQuery["ordering"]) {
        const sort = keysQuery["ordering"][0] === "-" ? -1 : 1; 
        const key = keysQuery["ordering"][0] === "-"? keysQuery["ordering"].slice(1) :  keysQuery["ordering"];
        paramOrdering [key] = sort;
       
    }
    delete keysQuery["ordering"]
    const workers = await Worker.find(keysQuery).sort(paramOrdering);

    res.status(400).json(workers)


}
module.exports.create = async (req, res)=> {
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

    try{
        await worker.save()
        res.status(200).json(worker)
    }catch(e){
        errorHandler(res, e)
    }



}
module.exports.delete = (req, res)=> {

}
module.exports.update = (req, res)=> {

}
module.exports.getById = (req, res)=> {

}