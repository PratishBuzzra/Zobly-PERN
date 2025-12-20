import { Router } from "express";
import UserRoute from './UserRouter.js'
import JobRoute from "./JobRouter.js"
const router = Router();

router.use("/api/user", UserRoute)
router.use("/api/job", JobRoute)

export default router