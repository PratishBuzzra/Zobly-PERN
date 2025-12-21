import prisma from "../DB/db.config.js";
import uploadToCloudinary from "../helpers/cloudinarHelpers.js";

export const CreateJob = async (req, res) => {
    try {
        const { role } = req.user;
  if (role === "JOB_SEEKER") {
    return res.json({
        message : "job seeker not allowed to acces this resource"
    }
    );
  }
        const {title, companyName, location, salary, jobType, experienceLevel, field, description, qualifications, companyBackground } = req.body
           if (!title || !companyName || !location || !salary || !jobType || !experienceLevel || !field || !description || !qualifications || !companyBackground || !req.file) {
      return res.status(400).json({ success: false, message: 'All fields are required' });
    }

    const result = await uploadToCloudinary(req.file.path)
    const postedBy = req.user.id;

    const qualificationsArray =
  typeof qualifications === "string"
    ? qualifications.split(",").map(q => q.trim())
    : qualifications;

    const newJob = await prisma.job.create({
        data: {
            title,
            companyName,
            location,
            salary,
            jobType,
            experienceLevel,
            field,
            description,
            qualifications: qualificationsArray,
            companyBackground,
            employerId: postedBy,
            image: result.url

        }
    })
    if(newJob){
        res.status(200).json({
            success: true,
            message: "Job created successfully",
            job: newJob
        })
    }else{
        res.status(400).json({
            success: false,
            message: "Unable to create job"
        })
    }
        
    } catch (error) {
         console.log(error);
        res.status(500).json({
            success: false,
            message: 'Some error occured while creating job',
            error
        })
        
    }
}

export const ViewAllJobs = async (req, res) => {
    try {
        const allJobs = await prisma.job.findMany({})

        if(allJobs){
            res.status(200).json({
                success: true,
                message: "All job fetched successfully",
                job: allJobs
            })
        }else{
            res.status(404).json({
                success: false,
                message: "job not found in collection"
            })
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: 'Some error occured please try again'
        })
        
    }
}
export const ViewJobById = async (req, res) => {
    try {
        const jobId = req.params.id
        const JobById = await prisma.job.findUnique({
            where: {
                id: Number(jobId)
            }
        })
        

        if (!JobById) {
      return res.status(404).json({
        success: false,
        message: "Job not found",
      });
    }
     res.status(200).json({
      success: true,
      message: "fetch success",
      job: JobById,
    });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: 'Some error occured please try again'
        })
        
    }
}

export const jobByUser = async (req, res)=>{
    try {
        const employerId = req.user.id
        const jobByUser = await prisma.job.findMany({
            where:{
                employerId
            }
        })
        if(jobByUser){
            res.status(200).json({
                success: true,
                message: "job by user fetch success",
                jobByUser
            })
        }else{
            res.status(404).json({
                success: false,
                message: "job not found in collection"
            })
        }
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: 'Some error occured please try again'
        })
        
    }
}