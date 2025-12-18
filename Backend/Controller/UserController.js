import prisma from "../DB/db.config.js";
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken'

export const CreateUser = async (req, res)=>{

    try {
        const {role, name, email,PhoneNumber, password} = req.body;

        if(!role){
            return res.status(400).json({ message: "role is required" });
        }
        if(!name){
           return res.status(400).json({ message: "name is required" });
        }
        if(!email){
            return res.status(400).json({ message: "email is required" });
        }
         if(!PhoneNumber){
            return res.status(400).json({ message: "phonenumber is required" });
        }
        if(!password){
            return res.status(400).json({ message: "password is required" });
        }
        
        const checkExistingUser = await prisma.user.findUnique({
            where:{
                email:email
            }
        })
        if(checkExistingUser){
            return res.status(400).json({
                success: false,
                message: 'user with email already exist'
            })
        }


        //hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        //crate useser
        const newlycreatedUser = await prisma.user.create({
            data:{
                role: role,
                name: name,
                email: email,
                PhoneNumber: PhoneNumber,
                password: hashedPassword
            }
        })

        if(newlycreatedUser){
              res.status(201).json({
                success: true,
                message: 'User created successfully',
                newlycreatedUser: newlycreatedUser
            })
        }else{
             res.status(400).json({
                success: false,
                message: 'Unable to register user'
            })
        }
    } catch (error) {
         console.log(error);
        res.status(500).json({
            success: false,
            message: 'Some error occured in registration',
            error
        })
        
    }

}

export const LoginUser =async (req, res)=>{
    try {
        const {role, email, password} = req.body

        if(!role || !email || !password){
            return res.status(400).json({
                success: false,
                message: "role, email, password are required"
            })
        }

        const CheckUser = await prisma.user.findUnique({
            where:{
                email:email
            }
        })
        if(!CheckUser){
             return res.status(404).json({
                success: false,
                message: 'User with that email is not found please register'
            })
        }

        const isPasswordMatch = await bcrypt.compare(password, CheckUser.password);

        if(!isPasswordMatch){
            return res.status(400).json({
                success: false,
                message: "invalid password"
            })
        }

        //token
        const accessToken = jwt.sign({
            user: {
                id: CheckUser.id,
                email: CheckUser.email,
                role: CheckUser.role
            }
        }, process.env.JWT_SECRET_KEY, {expiresIn: '7d'})

         res.cookie('auth-token', accessToken, {
      httpOnly: true, // Can't be accessed via JavaScript
      sameSite: "lax",
      secure: false,
      path: "/",
      maxAge: 7 * 24 * 60 * 60 * 1000, // 1 week expiration
      
    });

        res.status(200).json({
            success: true,
            message: "Login successful",
            authToken: accessToken,
             user: {
                name: CheckUser.name,
                email: CheckUser.email,
                 role: CheckUser.role
            }
        })
    } catch (error) {
         console.log(error);
        res.status(500).json({
            success: false,
            message: 'something went wrong please try again'
        })
    }
}

export const LogoutUser = async (req, res)=>{
    res.clearCookie('auth-token', {
        httpOnly: true,
        sameSite: "lax",
        secure: false,
        path: "/",
    });
    res.status(200).json({status: true, message: "logout success"})
}