import { Router } from "express";
import { JobSeekerGetApplication, postApplications, deleteApplication, employerGetAllApplications } from "../Controller/ApplicationsController.js"
import {requireSignIn, authorizeRole} from "../middleware/authMiddleware.js"
import {uploadImage, uploadResume} from "../middleware/UploadMiddleware.js"

const router = Router()

router.post("/post-application",requireSignIn, authorizeRole("JOB_SEEKER"), uploadResume.single('resume'), postApplications)

router.get("/get-application",requireSignIn, authorizeRole("JOB_SEEKER"), JobSeekerGetApplication)

router.get("/get-applicant",requireSignIn, authorizeRole("EMPLOYER"), employerGetAllApplications)

router.delete("/delete/:id",requireSignIn, authorizeRole("JOB_SEEKER"), deleteApplication)


export default router