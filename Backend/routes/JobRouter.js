import { Router } from "express";
import {CreateJob, ViewAllJobs, jobByUser, ViewJobById,editJob, deleteJob} from "../Controller/JobController.js"
import {requireSignIn, authorizeRole} from "../middleware/authMiddleware.js"
import {uploadImage, uploadResume} from "../middleware/UploadMiddleware.js"

const router = Router()

router.post("/post-job",requireSignIn, authorizeRole("EMPLOYER"), uploadImage.single('image'), CreateJob)
router.get("/all-job", ViewAllJobs)
router.get("/yourpostedjob",requireSignIn, jobByUser)
router.get("/:id", ViewJobById)
router.patch("/edit/:id",requireSignIn, authorizeRole("EMPLOYER"),uploadImage.single('image'), editJob)
router.delete("/delete/:id",requireSignIn, authorizeRole("EMPLOYER"), deleteJob)

export default router