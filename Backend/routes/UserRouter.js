import { Router } from "express";
import {CreateUser, LoginUser, LogoutUser} from '../Controller/UserController.js'
import { requireSignIn } from "../middleware/authMiddleware.js";

const router = Router();

router.post("/register", CreateUser)
router.post("/login", LoginUser)
router.get("/me", requireSignIn, (req, res)=>{
    res.json({
        success: true,
        user: req.user
    })
})
router.post("/logout", LogoutUser)

export default router;