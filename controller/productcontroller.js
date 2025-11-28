const productModel = require("../model/productModel")
const usermodel=require("../model/usermodel")
const add=async(req,res)=>{
    const data=await productModel.create(req.body)
    res.send(data)
}
const get=async(req,res)=>{
    const data=await productModel.find();
    res.send(data)
}
const deleproduct=async(req,res)=>{
const data=await productModel.findByIdAndDelete(req.params.id);
res.send("success",data)
}
const ediproduct=async(req,res)=>{
    const id=req.params.id
    const data=await productModel.findByIdAndUpdate(id,req.body)
    res.send(data)
}
module.exports={add,deleproduct,get,ediproduct}