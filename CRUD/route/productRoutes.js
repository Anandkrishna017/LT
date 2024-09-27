const express=require("express");
const {addProduct,getProduct,getProductWithId,deleteProduct,updateProduct}=require("../controller/productController.js");
const { update } = require("lodash");

const router=express.Router();

router.post('/products',addProduct);
router.get('/products',getProduct)
router.get('/products/:id',getProductWithId)
router.delete('/products/:id',deleteProduct)
router.put('/products/:id',updateProduct)

module.exports=router;