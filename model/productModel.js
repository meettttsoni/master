const mongoose=require("mongoose")
const userSchema=mongoose.Schema({
   title:{
        type:String
    },
    price:{
        type:String
    }
})
const productModel=mongoose.model("product",userSchema)
module.exports = productModel