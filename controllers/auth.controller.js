import bcrypt from "bcrypt"
import prisma from "../lib/prisma.js"

export const register =  async(req,res)=>{
   
   const{username,email,password}= req.body;
   // hash the password
   try{

  
   const hashedPassword = await bcrypt.hash(password,10)
   console.log(hashedPassword)

   const newUser= await prisma.user.create({
      data:{
         username,
         email,
         password : hashedPassword,

      }
   }); 
   console.log(newUser)
   res.status(201).json({mesaage:'user created successfully'})
}catch(err){
   console.log(err)
   res.status(500).json({message:'something went wrong'})
}
}
export const login = (req,res)=>{

}
export const logout = (req,res)=>{

}