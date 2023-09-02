import User from '../model/user-schema.js'
export const userSignup=async(req, res)=>{
  try{
   
    const exist=await User.findOne({username:req.body.username})
    if(exist){
      return res.status(201).json({message:'user already exists'});
    }
  const user= req.body;
  const newuser=new User(user);
  await newuser.save();
  res.status(200).json({message:user});
  }catch(error){
    res.status(401).json({message:error.message});
  }
}

export const userLogin=async(req, res)=>{
  try{
   
    const username=req.body.username;
    const password=req.body.password;
    let user=await User.findOne({username:username, password:password});
     if(user){
       return res.status(200).json({data:user});
     }else{
      return res.status(401).json(` Invaid login`);
     }
  }catch(error){
    res.status(500).json(`error`,error.message);
  }

}
