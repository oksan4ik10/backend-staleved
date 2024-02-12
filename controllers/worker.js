const Worker = require("../models/Role")

module.exports.getAll = (req, res)=> {

}
module.exports.create = (req, res)=> {
    const worker = new Worker({
        code: "admin",
        name: "Администрация"
    })
    worker.save().then(()=> console.log("Work!"))
    const worker2 = new Worker({
        code: "management",
        name: "Дирекция"
    })
    worker2.save().then(()=> console.log("Work!"))
    const worker3 = new Worker({
        code: "responsible",
        name: "Руководство проектов"
    })
    worker3.save().then(()=> console.log("Work!"))
    const worker4 = new Worker({
        code: "worker",
        name: "Сотрудник"
    })
    worker4.save().then(()=> console.log("Work!"))

}
module.exports.delete = (req, res)=> {

}
module.exports.update = (req, res)=> {

}
module.exports.getById = (req, res)=> {

}