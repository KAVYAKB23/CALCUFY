





//sign up

const Users = require("../Model/userModel");

exports.registerController=async(req,res)=>{
console.log('inside the controller');
//assigning to backend
const{name,email,password}=req.body;
console.log(name,email,password);


try{
    const existingUser=await Users.findOne({name,email,password})
    if(existingUser){
        res.status(406).json("Account already exists")
    }else{
        const newUser= new Users({
            name,
            password,
            email
        })
        await newUser.save()
        res.status(201).json(newUser)
     }

    }
    catch(error){
        res.status(401).json(`registration failed due to ${error}`)
    }
}

