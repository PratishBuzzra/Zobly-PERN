import jwt from 'jsonwebtoken'
import prisma from '../DB/db.config.js';
const secret = process.env.JWT_SECRET_KEY;



export const requireSignIn = async (req, res, next) => {
    try {
       const token = req.cookies['auth-token']

      if(!token){
        return res.status(401).send({
            success: false,
            message: 'unauthorized acess no token provided'
        })
      }

       

        // Verify the token and decode the payload
        const decode = jwt.verify(token, process.env.JWT_SECRET_KEY);


        req.user = decode.user;

        // Proceed to the next middleware/route handler
        next();
        
    } catch (error) {
        // Handle specific errors
        if (error.name === 'TokenExpiredError') {
            return res.status(401).send({
                success: false,
                message: 'Token expired. Please log in again.',
            });
        }

        console.log(error);  // You may replace this with a logging library in production

        // If any error occurs, respond with Unauthorized access
        return res.status(401).send({
            success: false,
            message: 'Unauthorized access: Invalid token',
        });
    }
};



export const authorizeRole = (...allowedRoles) => {
    return(req, res, next) => {
        if(!req.user){
            return res.status(401).json({
                success: false,
                message: "unauthorized",
            });
        }
        if(!allowedRoles.includes(req.user.role)){
            return res.status(403).json({
                success: false,
                message: "forbidden access denied"
            });
        }
        next();
    }
}

