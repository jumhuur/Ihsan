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
    //const point = Lacagta.split(".")[1]
    if(!Lanbar){
        throw Error("Fadlan Lanbarkaaga Qor")
    }
    if(!Lanbar){
        throw Error("Fadlan Lacagta Qor")
    }
    if(Lanbar.length !== 7 || Lanbar.match(pattern)){
        throw Error("Waa Qalad Lanbarku")
    }

    if(Lacagta < 1){
            throw Error("Lacagtu kama yaraan karto 1$")
    }

    if(Lacagta.match(LacagReg)){
            throw Error("Fadlan si sax lacagta U Qor")
    }

    // if(point){
    // if(point.length > 2){
    //     throw Error("Qaabka qoraalka lacagtu waa qalad!")
    // }
    // }
    const Tabarucdata =  await this.create({Name,Tabaruce,Id,Lacagta,PymentType,Lanbar})

    return Tabarucdata
}


module.exports = mongoose.model("Tabaruc", TabrucSchema)