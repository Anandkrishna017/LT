const {User } = require('../models');

const addUser= async(req,res)=>{
    const {name ,email}=req.body;
    try {   
    const user=await User.create({name,email});
     res.json(user);
    } catch (error) {
       console.log(error) 
     res.status(500).json(error)
    }
};

const getUser = async(req,res)=>{
    try {
        
        const user=await User.findAll({
            attributes: { exclude: ['Product'] }
        });
        console.log(User)
        res.send(user);
    } catch (error) {
       console.log(error)
       res.json(error) 
    }
};

const deleteUser=async(req,res)=>{
    try {
        const id=req.params.id;
        const user=await User.findOne({
            where:{id}
        })
        await user.destroy();
        res.json({message:"User deleted"})

    } catch (error) {
        console.log(error)
        res.json(error) 
    }
};

const updateUser=async(req,res)=>{
    try {
        const id=req.params.id;
        const{name,email}=req.body;
        const user=await User.findOne({where:{id}})
        user.name=name
        user.email=email
        await user.save()

        res.json(user)
        
    } catch (error) {
        console.log(error)
        res.json(error)
    }
};

module.exports={
    addUser,
    getUser,
    deleteUser,
    updateUser
}

