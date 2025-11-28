const usermodel=require("../model/usermodel")
const register=async(req,res)=>{
    const data=await usermodel.create(req.body)
    res.send(data)
}
const ruser=async(req,res)=>{
    const data=await usermodel.find();
    res.send(data)
}
const dele=async(req,res)=>{
const data=await usermodel.findByIdAndDelete(req.params.id);
res.send("success",data)
}
const edi=async(req,res)=>{
    const id=req.params.id
    const data=await usermodel.findByIdAndUpdate(id,req.body)
    res.send(data)
}
module.exports={register,dele,ruser,edi}