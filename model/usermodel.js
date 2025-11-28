const mongoose=require("mongoose")
const userSchema=mongoose.Schema({
    username:{
        type:String
    },
    password:{
        type:String
    }
})
const usermodel=mongoose.model("meet",userSchema)
module.exports = usermodel