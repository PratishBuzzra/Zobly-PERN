import { Router } from "express";
import {CreateJob, ViewAllJobs, jobByUser, ViewJobById} from "../Controller/JobController.js"
import {requireSignIn, authorizeRole} from "../middleware/authMiddleware.js"
import upload from "../middleware/UploadMiddleware.js"

const router = Router()

router.post("/post-job",requireSignIn, authorizeRole("EMPLOYER"), upload.single('image'), CreateJob)
router.get("/all-job", ViewAllJobs)
router.get("/yourpostedjob",requireSignIn, jobByUser)
router.get("/:id", ViewJobById)

export default router