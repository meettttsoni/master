const express=require("express")
const {add,get,deleproduct,ediproduct} = require("../controller/productcontroller")
const P_router=express.Router()

P_router.post("/add",add)
P_router.get("/all",get)
P_router.delete("/:id", deleproduct);
P_router.patch("/:id",ediproduct)

module.exports=P_router