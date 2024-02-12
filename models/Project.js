const { Schema, model } = require('mongoose')

const projectSchema = new Schema({

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
    responsibleUser: {
        ref:'workers',
        type: Schema.Types.ObjectId,
        required: true       
    },
})

module.exports = model("projects", projectSchema)