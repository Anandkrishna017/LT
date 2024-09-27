const express = require('express');
const { sequelize,User,Product } = require('./models');
const { include } = require('underscore');
const { message } = require('statuses');
const userRoute=require('./route/userRoute.js')
const productRoute=require('./route/productRoutes.js')

const app=express();
app.use(express.json())

// app.use("/",(req,res)=>{
//     res.send("Hello world!!!");
//  })

app.use("/api",userRoute);
app.use("/api",productRoute);

// app.post("/users",async(req,res)=>{
//     const {name ,email}=req.body;
//     try {   
//     const user=await User.create({name,email});
//      res.json(user);
//     } catch (error) {
//        console.log(error) 
//      res.status(500).json(error)
//     }
// })

// app.get("/users",async(req,res)=>{
//     try {
//         const user=await User.findAll({
//             exclude:[Product]
//         });
//         res.send(user);
//     } catch (error) {
//        console.log(error)
//        res.json(error) 
//     }
// })

// app.delete("/users/:id",async(req,res)=>{
//     try {
//         const id=req.params.id;
//         const user=await User.findOne({
//             where:{id}
//         })
//         await user.destroy();
//         res.json({message:"User deleted"})

//     } catch (error) {
//         console.log(error)
//         res.json(error) 
//     }
// })

// app.put("/users/:id",async(req,res)=>{
//     try {
//         const id=req.params.id;
//         const{name,email}=req.body;
//         const user=await User.findOne({where:{id}})
//         user.name=name
//         user.email=email
//         await user.save()

//         res.json(user)
        
//     } catch (error) {
//         console.log(error)
//         res.json(error)
//     }
// })



// app.post("/products",async(req,res)=>{
//     try {
//         const {userid,pname}=req.body;
//         const product=await Product.create({Pname:pname,userId:userid})

//         res.json(product)
//     } catch (error) {
//         console.log(error);
//         res.json(error);
//     }
// })

// app.get("/products",async(req,res)=>{
//     try {
//         const product=await Product.findAll({
//         include:[User]})
//         res.json(product)
//     } catch (error) {
//         console.log(error)
//         res.json(error)
//     }
// })

// app.get("/products/:id",async(req,res)=>{
//     try {
//         const id=req.params.id;
//         const product=await Product.findOne({
//             where:{id},
//         include:[User]})
//         res.json(product)
//     } catch (error) {
//         console.log(error)
//         res.json(error)
//     }
// })

// app.delete("/products/:id",async(req,res)=>{
//     try {
//         const id=req.params.id;
//         const product=await Product.findOne({
//             where:{id}
//         })
//         await product.destroy();
//         res.json({message:"User deleted"})

//     } catch (error) {
//         console.log(error)
//         res.json(error) 
//     }
// })

// app.put("/products/:id",async(req,res)=>{
//     try {
//         const id=req.params.id;
//         const{Pname,userid}=req.body;
//         const product=await Product.findOne({where:{id}})
//         product.Pname=Pname
//         product.userId=userid
//         await product.save()

//         res.json(product)
        
//     } catch (error) {
//         console.log(error)
//         res.json(error)
//     }
// })



app.listen(5000,async()=>{
    console.log("Server is up!!!");
    await sequelize.authenticate();
    console.log("Database is Connected");
 })