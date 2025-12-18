import { Router } from "express";
import {CreateUser, LoginUser, LogoutUser} from '../Controller/UserController.js'
import { requireSignIn, authorizeRole } from "../middleware/authMiddleware.js";

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

router.get("/employer-only", requireSignIn, authorizeRole("EMPLOYER"),  (req, res)=>{
    res.json({success: true, messge: "employer access granted"})
})

router.get("/jobseeker-only", requireSignIn, authorizeRole("JOB_SEEKER"),  (req, res)=>{
    res.json({success: true, messge: "job seeker access granted"})
})

export default router;