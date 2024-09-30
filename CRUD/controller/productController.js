const {Product } = require('../models');

const addProduct=async(req,res)=>{
    try {
        const {userid,pname}=req.body;
        const product=await Product.create({Pname:pname,userId:userid})
        if(product){
           return res.json(product)
        }
        return res.json({message:"No product added"})
        
    } catch (error) {
        console.log(error);
        res.json(error);
    }
};

const getProduct=async(req,res)=>{
    try {
        const product=await Product.findAll({
        include:'user'})

        if(product){
           return res.json(product)
        }
        return res.json({message:"No product found"})
    } catch (error) {
        console.log(error)
        res.json(error)
    }
};


const getProductWithId=async(req,res)=>{
    try {
        const id=req.params.id;
        const product=await Product.findOne({
            where:{id},
        include:'user'})

        if(product){
           return res.json(product)
        }
        res.json({message:"No product found"})
    } catch (error) {
        console.log(error)
        res.json(error)
    }
}

const deleteProduct =async(req,res)=>{
    try {
        const id=req.params.id;
        const product=await Product.findOne({
            where:{id}
        })
        await product.destroy();
        if(!product){
            return res.json({message:"No product found "})
        }
        res.json({message:"Product deleted"})

    } catch (error) {
        console.log(error)
        res.json(error) 
    }
}

const updateProduct = async(req,res)=>{
    try {
        const id=req.params.id;
        const{Pname,userid}=req.body;
        const product=await Product.findOne({where:{id}})
        if(!product){
            return res.json({message:"No Product found"})
        }
        product.Pname=Pname
        product.userId=userid
        await product.save()

        res.json(product)
        
    } catch (error) {
        console.log(error)
        res.json(error)
    }
}


module.exports={
    addProduct,
    getProduct,
    getProductWithId,
    deleteProduct,
    updateProduct
}