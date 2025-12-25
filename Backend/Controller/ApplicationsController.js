import prisma from "../DB/db.config.js";
import uploadResumeToCloudinary from "../helpers/UploadResumeToCloudinary.js";


export const postApplications = async (req, res)=>{
    try {
        const role = req.user.role
        if(role === "EMPLOYER"){
            return res.json({
                message: "employer are not allowed to acces this"
            })
        }

        const {
            name,
            email,
            PhoneNumber,
            address,
            coverLetter,
            jobId
        } = req.body

        const applicantId = req.user.id

       if(!jobId){
        return res.json({message: "Jobb not found"})
       }
        const job = await prisma.job.findUnique({
            where:{
                id: Number(jobId)
            }
        });
    if (!job) {
      return res.json({message: "Jobb not found"})
    }

     

     if (
      !name ||
      !email ||
      !coverLetter ||
      !PhoneNumber ||
      !address
    ) {
      return res.json(({message: "all fields are required"}))
    }

    let resumeUrl = null
    if(req.file){
        const UploadResult = await uploadResumeToCloudinary(req.file.path)
        resumeUrl = UploadResult.url
    }

    const application = await prisma.applications.create({
        data:{
             name,
            email,
            PhoneNumber,
            address,
            coverLetter,
            resume: resumeUrl,
            applicantId,
            jobId: Number(jobId)
            
        }
    })
    if (application) {
      res.status(200).json({
        success: true,
        message: "application submitted successfully",
        application
      });
    } else {
      res.status(400).json({
        success: false,
        message: "Unable to sumbit application",
      });
    }
        
    } catch (error) {
         console.log(error);
    res.status(500).json({
      success: false,
      message: "Some error occured while creating application",
      error,
    });
        
    }
}


export const JobSeekerGetApplication = async (req, res)=>{
    try {
        const role = req.user.role
        if(role === "EMPLOYER"){
             return res.json({
                message: "employer are not allowed to acces this"
            })
        }
         const applicantId = req.user.id
        
        const applications = await prisma.applications.findMany({
            where:{
                 applicantId
            },
             include: {
        job: true 
      }
        })
        if (applications) {
      res.status(200).json({
        success: true,
        message: "appication by user fetch success",
        applications
      });
    } else {
      res.status(404).json({
        success: false,
        message: "application not found in collection",
      });
    }
    } catch (error) {
        console.log(error);
    res.status(500).json({
      success: false,
      message: "Some error occured please try again",
    });
    }
}

export const deleteApplication = async (req, res)=>{
    try {
          const role = req.user.role
        if(role === "EMPLOYER"){
             return res.json({
                message: "employer are not allowed to acces this"
            })
        }

        const applicationId = req.params.id
        const userId = req.user.id
        const application = await prisma.applications.findUnique({
            where:{
                id: Number(applicationId)
            }
        })
        if(!application){
            return res.json({
                message: "application not found"
            })
        }
         if (application.applicantId !== userId) {
      return res.status(403).json({
        success: false,
        message: "Not authorized to delete this application",
      });
    }
        await prisma.applications.delete({
            where:{
                id: Number(applicationId)
            }
        })
         res.status(200).json({
      success: true,
      message: "application deleted successfully",
    });
    } catch (error) {
         console.error(error);
    return res.status(500).json({
      success: false,
      message: "Server error",
    });
    }
}

export const employerGetAllApplications = async(req, res)=>{
  try {
     const role = req.user.role
        if(role === "JOB_SEEKER"){
             return res.json({
                message: "job seeker are not allowed to acces this"
            })
        }
        const employerId = req.user.id
        const applications = await prisma.applications.findMany({
         where:{
          job:{

            employerId: employerId
          }
        } ,
         include: {
        job: true,
      },
      orderBy: {
        createdAt: "desc"
      }

        })
         if (applications) {
      res.status(200).json({
        success: true,
        message: "appication fetch success",
        applications
      });
    } else {
      res.status(404).json({
        success: false,
        message: "application not found in collection",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Some error occured please try again",
    });
    
  }
}