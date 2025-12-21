import { Router } from "express";
import {CreateJob, ViewAllJobs, jobByUser, ViewJobById} from "../Controller/JobController.js"
import {requireSignIn, authorizeRole} from "../middleware/authMiddleware.js"
import upload from "../middleware/UploadMiddleware.js"

const router = Router()

router.post("/post-job",requireSignIn, authorizeRole("EMPLOYER"), upload.single('image'), CreateJob)
router.get("/all-job",requireSignIn, ViewAllJobs)
router.get("/:id",requireSignIn, ViewJobById)
router.get("/yourpostedjob",requireSignIn, jobByUser)

export default router