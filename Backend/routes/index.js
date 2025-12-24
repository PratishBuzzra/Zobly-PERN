import { Router } from "express";
import UserRoute from './UserRouter.js'
import JobRoute from "./JobRouter.js"
import ApplicationRoute from "./ApplicationRouter.js"
const router = Router();

router.use("/api/user", UserRoute)
router.use("/api/applications", ApplicationRoute)
router.use("/api/job", JobRoute)

export default router