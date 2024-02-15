const errorHandler = require('../utils/errorHandler')

const Project = require("../models/Project")


module.exports.getAll = async(req, res)=> {
    try{
        const project = await Project.find()
        res.status(200).json(project)
    }catch(e){
        errorHandler(res, e)
    }
}
module.exports.create = async (req, res)=> {
    const {name, timePlan, idResponsibleUser, date_start, date_end, desc} = req.body;

    const project = new Project({
        name: name,
        timePlan: timePlan,
        idResponsibleUser: idResponsibleUser,
        date_start: date_start,
        date_end: date_end, 
        desc: desc ? desc : ""
    })

    try{
        await project.save()
        res.status(200).json(project)
    }catch(e){
        errorHandler(res, e)
    }


}
module.exports.delete = async (req, res)=> {
    try{
        await Project.deleteOne({_id:req.params.id})
        res.status(200).json({message: "Удаление прошло успешно"})
    }catch(e){
        errorHandler(res, e)
    }
}
module.exports.update = async (req, res)=> {
    const {name, timePlan, idResponsibleUser, date_start, date_end, desc} = req.body;
    const project = await Project.findOne({_id:req.params.id})
    if(name) project.name = name;
    if(timePlan) project.timePlan = timePlan;
    if(idResponsibleUser) project.idResponsibleUser = idResponsibleUser;
    if(date_start) project.date_start = date_start;
    if(date_end) project.date_end = date_end;
    if(desc) project.desc = desc;

    try{
        await project.save()
        res.status(200).json(project)
    }catch(e){
        errorHandler(res, e)
    }
}
module.exports.getById = async (req, res)=> {
    try{
        const project = await Project.findOne({_id:req.params.id})
        if(!project){
            res.status(404).json({
                "message": "Проект не найден"
            })
        }
    

        res.status(200).json(project)
    }catch(e){
        errorHandler(res, e)
    }
}