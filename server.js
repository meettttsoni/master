// const express=require("express")
// const app=express()

// app.use(express.json())
// const db = require('./config/db')
// const usermodel = require("./model/usermodel")

// app.post("/insertData",async(req,res)=>{
//     const data=await usermodel.create(req.body)
//     res.send(data)
// })
// app.get("/",async(req,res)=>{
//     const user1=await usermodel.find({})
//     res.send(user1)
// })
// app.delete("/:id",async(req,res)=>{
//     const id=req.params.id
//     const data=await usermodel.findByIdAndDelete(id)
//     res.send("success")
// })
// app.patch("/:id",async(req,res)=>{
//     const id=req.params.id
//     const data=await usermodel.findByIdAndUpdate(id,req.body)
//     res.send(data)
// })
// app.listen(8070, () => {
//     console.log('Server Listen')
// })
const express=require("express")
const db=require("./config/db")
const U_router=require("./Router/userRouter")
const P_router = require("./Router/productrouter")
const B_router=require('./Router/bookrouter')
const app=express()
app.use(express.json())
app.use("/user",U_router)
app.use('/product',P_router)
app.use('/book',B_router)

app.listen(7890,()=>{
    console.log('ser listen')
})