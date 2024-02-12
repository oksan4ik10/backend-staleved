const { Schema, model } = require('mongoose')

const taskSchema = new Schema({

    name: {
        type: String,
        required: true
    },
    date_start: {
        type: Date,
        required: true
    },
    date_end: {
        type: Date,
        required: true
    },
    timePlan: {
        type: Number,
        required: true
    },
    timeFact: {
        type: Number,
        required: true
    },
    worker: {
        ref:'workers',
        type: Schema.Types.ObjectId,
        required: true       
    },
    project: {
        ref:'projects',
        type: Schema.Types.ObjectId,
        required: true       
    },
})

module.exports = model("tasks", taskSchema)