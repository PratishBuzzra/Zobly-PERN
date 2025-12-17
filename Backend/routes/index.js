import { Router } from "express";
import UserRoute from './UserRouter.js'
const router = Router();

router.use("/api/user", UserRoute)

export default router