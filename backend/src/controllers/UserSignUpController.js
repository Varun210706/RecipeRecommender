const UserSignUp=require('../models/UserSignUp');

//Creation of new user
const createUser=async(req,res)=>{
    try {
        const {
            Name,
            Email,
            Mobile,
            Gender,
            Username,
            Password
        }=req.body;

        const existingEmail=await UserSignUp.findOne({Email});
        if(existingEmail){
            return res.status(400).json({message:'Email already exists'});
        }
        const existingUsername=await UserSignUp.findOne({Username});
        if(existingUsername){
            return res.status(400).json({message:'Username already exists'});
        }   
        const newUser=new UserSignUp({
            Name,
            Email,
            Mobile,
            Gender,
            Username,
            Password
        });

        await newUser.save();
        res.status(201).json({ message: 'User created successfully' });

    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = { createUser };