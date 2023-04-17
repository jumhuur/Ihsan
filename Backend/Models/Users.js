const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt")




const UserSchema = new Schema({
    Magac: {
        type: String,
        required: true,
    },
    Lanbar: {
        type: String,
        required: true,
        unique: true
    },
    Password: {
        type: String,
        required: true
    }

}, {timestamps: true})


// register

UserSchema.statics.Register = async function(Magac, Lanbar, Password){
    if(!Magac || !Lanbar || !Password){
        throw Error("Buuxi Meelaha banaan Oo dhan!")
    }

    if(Lanbar.length > 7 || Lanbar.length < 7){
        throw Error("Waa Qalad Lanbarku")
    }
    if(Magac.length > 15){
        throw Error("Fadlan Soo Koob Magaca")
    }

    const Jira = await this.findOne({Lanbar})
    if(Jira){
        throw Error ("Horaa Loo Diwaan Galiyay Lanbarkan!")
    }


    const salt = await bcrypt.genSalt(10)
    const Hash = await bcrypt.hash(Password, salt)
    const user = await this.create({Magac, Lanbar, Password:Hash})
    return user


}

// Login 

UserSchema.statics.Login = async function(Lanbar,Password){
    if(!Lanbar || !Password){
        throw Error("Buuxi Meelaha Banaan!")
    }

    const User = await this.findOne({Lanbar})
    if(!User){
        throw Error("Lanbarkan Ma Diwaan Gashana")
    }

    const compare = await bcrypt.compare(Password, User.Password)

    if(!compare){
        throw Error("Waa Qalab Passworkaagu")
    }

    return User
}



module.exports = mongoose.model("UserIxsan", UserSchema);