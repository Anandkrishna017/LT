const express = require('express');
const {addUser,getUser,deleteUser,updateUser}=require("../controller/userController.js");
const verifyToken = require('../middleware/authMiddleware.js');
const router =express.Router();

router.post("/users",addUser);
router.get("/users",verifyToken,getUser);
router.delete("/users/:id",verifyToken,deleteUser);
router.put("/users/:id",verifyToken,updateUser);


module.exports=router;