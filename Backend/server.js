import "dotenv/config"
import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser';



const app = express();
 const PORT = process.env.PORT || 3000

 //middleware
 app.use(express.json())
 app.use(express.urlencoded({extended: false}))
app.use(
  cors({
    origin: "http://localhost:5173", 
    credentials: true,              
  })
);
 app.use(cookieParser());

 //routes file
 import routes from './routes/index.js'
 app.use(routes)


 app.listen(PORT, ()=>console.log(`Server is running on PORT ${PORT}`))