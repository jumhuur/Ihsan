const mongoose =  require("mongoose")
const Schema = mongoose.Schema

const TabrucSchema = new Schema({
    Name: {
        type: String,
        required: true,
    },
    Tabaruce: {
        type: String,
        required: true,
    },
    Id: {
        type: String,
        required: true,
    },
    Lacagta: {
        type: Number,
        required: true,
    },
    PymentType: {
        type: String,
        required: true,
    },
    Lanbar: {
        type: String,
        required: true,
    },

}, {timestamps: true})



// tabaruc data adding 

TabrucSchema.statics.AddTabruc =  async function(Name,Tabaruce,Id,Lacagta,PymentType,Lanbar){
    const  pattern = /[^0-9]/g;
    const  LacagReg = /[^0-9.]/g;
    if(Lanbar.length !== 7 || Lanbar.match(pattern)){
        throw Error("Waa Qalad Lanbarku!")
    }
    const Tabarucdata =  await this.create({Name,Tabaruce,Id,Lacagta,PymentType,Lanbar})

    return Tabarucdata
}


module.exports = mongoose.model("Tabaruc", TabrucSchema)