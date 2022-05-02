const authorModel=require('../model/authorModel')
var validator = require('validator');
const jwt = require('jsonwebtoken');

//=========== Create Authors ====================//

//------------validation function-----------//
let isValid= (value) => {
  if (typeof value === 'undefined' ||  value === null) return false
  if(typeof value === 'string' && value.trim().length ===0) return false
  return true;
}

const createAuthor = async (req,res)=>{
  try{ 
    let data = req.body;
    
<<<<<<< HEAD
if (Object.keys(data).length == 0 ){
 return res.status(400).send({status:false ,msg:"BAD REQUEST,Please provide Author details "});
}
if (!isValid(data.fname)){
  return res.status(400).send({status:false ,msg:"First Name is Required"});
}
if (!isValid(data.lname)){
  return res.status(400).send({status:false ,msg:"Last Name is Required"});
}
if (!isValid(data.title)){
  return res.status(400).send({status:false ,msg:"title is Required"});
}
if (!isValid(data.email)){
  return res.status(400).send({status:false ,msg:"email is mandatory"});
}
if (!isValid(data.password)){
  return res.status(400).send({status:false ,msg:"password is mandatory"});
}
if (!validator.isEmail(data.email)){
  return res.status(400).send({status:false ,msg:"Enter a Valid Email"});
}

const usedEmail = await authorModel.findOne({email:data.email})

if (usedEmail){
  return res.status(400).send({status:false ,message: `${data.email} this email is already registered`})
}
let savedData = await authorModel.create(data)
    return res.status(201).send({status:true , msg:savedData});

  }
catch(error){
      console.log("This is the error:",error.message );
      res.status(500).send({status:false , msg:error.message});
  }
}


const login = async(req,res)=>{
    try{
        let data = req.body;
        if(!Object.keys(data).length){
            return res.status(400).send ({status: false,msg:"Invalid Request , Please Provide Login Details"})
        }

        if (data.email && data.password){
            let user = await authorModel.findOne({email:data.email,password:data.password})
            if(!user){
                return res.status(400).send({status:false,msg:"Invalide email or password"});
                  }
            let token = jwt.sign(
                {
                  userId: user._id.toString(),
                  projectName: "Blogging Site Mini Project",
                  batch: "uranium"
                },
                "group-15-blog-project"
            )  
                res.header('x-api-key',token);
                res.status(200).send({data:"Author login successful",token:{token}})
        } 
        else{
            res.status(400).send({status:false,msg:"must contain email and password"})
        }

    }catch(error){
        res.status(500).send({status:false,error: error.message})
=======
    if (Object.keys(data).length == 0 ){
    return res.status(400).send({status:false ,msg:"BAD REQUEST,Please provide Author details "});
>>>>>>> 8eed33f604dd587625b6fa3b4af8e18a6a9c859a
    }
    if (!isValid(data.fname)){
      return res.status(400).send({status:false ,msg:"First Name is Required"});
    }
    if (!isValid(data.lname)){
      return res.status(400).send({status:false ,msg:"Last Name is Required"});
    }
    if (!isValid(data.title)){
      return res.status(400).send({status:false ,msg:"title is Required"});
    }
    if (!isValid(data.email)){
      return res.status(400).send({status:false ,msg:"email is mandatory"});
    }
    if (!isValid(data.password)){
      return res.status(400).send({status:false ,msg:"password is mandatory"});
    }
    if (!validator.isEmail(data.email)){
      return res.status(400).send({status:false ,msg:"Enter a Valid Email"});
    }

    const usedEmail = await authorModel.findOne({email:data.email})

    if (usedEmail){
      return res.status(400).send({status:false ,message: `${data.email} this email is already registered`})
    }
    let savedData = await authorModel.create(data)
      res.status(201).send({status:true , msg:savedData});
  }
  catch(error){
      console.log("This is the error:",error.message );
      res.status(500).send({status:false , msg: error.message});
  }
}


//================= Login ====================//


const login = async (req,res) => {
  try{
      let data = req.body;
      if(!Object.keys(data).length){
            return res.status(400).send ({status: false,msg:"Invalid Request , Please Provide Login Details"})
      }
      if (data.email && data.password){
        let user = await authorModel.findOne({email:data.email,password:data.password})
        if(!user){
          return res.status(400).send({status:false,msg:"Invalide email or password"});
        }
        let token = jwt.sign(
            {
                userId: user._id.toString(),
                projectName: "Blogging Site Mini Project",
                batch: "uranium"
            },
            "group-15-blog-project"
        ) 
        res.header('x-api-key',token);
        res.status(200).send({data:"Author login successful",token:{token}})
      } 
      else{
        res.status(400).send({status:false,msg:"must contain email and password"})
      }
  }catch(error){
      res.status(500).send({status:false,error: error.message})
  }
}

module.exports.createAuthor=createAuthor
module.exports.login=login;









