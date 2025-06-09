const mongoose = require("mongoose");
const {Schema} = mongoose;
const bcrypt = require("bcrypt");

const SignUpSchema = new Schema ({
    email :{
        type: String,
        required: [true, "Email is required"],
        unique: true,
    },
    username :{
        type: String,
        required: [true, "Username is required"],
        unique: true,
        min:[3, "Username must be at least 3 characters"],
        max:[20, "Username must be at most 20 characters"],
    },
    password :{
        type: String,
        required: [true, "Password is required"],
        min:[8, "Password must be at least 6 characters"],
        select: false,
        

    },
   
    createdAt :{
        type: Date,
        default: new Date().getTime(),
    },
    
})


// password hashing------------------------------------------------------

SignUpSchema.pre("save", async function(next){
    const user=this;

    if(!user.isModified("password")) return next();
    try{
        const salt = await bcrypt.genSalt(10);
        const hashpassword = await bcrypt.hash(user.password, salt);
        user.password = hashpassword;
        
        next();
    }catch(err){
        next(err);
    }
    
})
    





module.exports ={SignUpSchema};
