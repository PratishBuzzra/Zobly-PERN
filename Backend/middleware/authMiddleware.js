import jwt from 'jsonwebtoken'
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


