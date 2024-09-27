const {Product } = require('../models');

const addProduct=async(req,res)=>{
    try {
        const {userid,pname}=req.body;
        const product=await Product.create({Pname:pname,userId:userid})

        res.json(product)
    } catch (error) {
        console.log(error);
        res.json(error);
    }
};

const getProduct=async(req,res)=>{
    try {
        const product=await Product.findAll({
        include:'user'})
        res.json(product)
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
        res.json(product)
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
        res.json({message:"User deleted"})

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