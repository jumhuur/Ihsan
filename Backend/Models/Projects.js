const mongoose = require("mongoose")
const Schema = mongoose.Schema



const ProjectsSchema = new Schema({
    Name: {
        type: String,
        required: true
    },
    Hadaf: {
        type: String,
        required: true
    },

    Tabaruc: {
        type: String,
        required: true
    },

    Qayb: {
        type: String,
        required: true
    },
    Sawir: {
        type: String,
        required: true
    },
    Muuqaal: {
        type: String,
        required: true
    },

}, {timestamps: true})



// samaynta mashruuc
ProjectsSchema.statics.Addpro = async function(Name, Hadaf, Tabaruc, Qayb,Sawir, Muuqaal) {
    const Project = await this.create({Name, Hadaf, Tabaruc,Qayb,Sawir,Muuqaal})
    return Project
}




module.exports = mongoose.model("Project", ProjectsSchema)