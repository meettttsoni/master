const express=require("express")
const {register,ruser,dele,edi} = require("../controller/usercontroller")
const U_router=express.Router()

U_router.post("/register",register)
U_router.get("/all",ruser)
U_router.delete("/:id", dele);
U_router.patch("/:id",edi)
module.exports=U_router