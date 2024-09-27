const express = require('express');
const {addUser,getUser,deleteUser,updateUser}=require("../controller/userController.js");
const router =express.Router();

router.post("/users",addUser);
router.get("/users",getUser);
router.delete("/users/:id",deleteUser);
router.put("/users/:id",updateUser);


module.exports=router;