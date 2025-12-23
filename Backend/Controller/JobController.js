import prisma from "../DB/db.config.js";
import uploadToCloudinary from "../helpers/cloudinarHelpers.js";

export const CreateJob = async (req, res) => {
  try {
    const { role } = req.user;
    if (role === "JOB_SEEKER") {
      return res.json({
        message: "job seeker not allowed to acces this resource",
      });
    }
    const {
      title,
      companyName,
      location,
      salary,
      jobType,
      experienceLevel,
      field,
      description,
      qualifications,
      companyBackground,
    } = req.body;
    if (
      !title ||
      !companyName ||
      !location ||
      !salary ||
      !jobType ||
      !experienceLevel ||
      !field ||
      !description ||
      !qualifications ||
      !companyBackground ||
      !req.file
    ) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required" });
    }

    const result = await uploadToCloudinary(req.file.path);
    const postedBy = req.user.id;

    const qualificationsArray =
      typeof qualifications === "string"
        ? qualifications.split(",").map((q) => q.trim())
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
        image: result.url,
      },
    });
    if (newJob) {
      res.status(200).json({
        success: true,
        message: "Job created successfully",
        job: newJob,
      });
    } else {
      res.status(400).json({
        success: false,
        message: "Unable to create job",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Some error occured while creating job",
      error,
    });
  }
};

export const ViewAllJobs = async (req, res) => {
  try {
    const {
      jobType,
      experienceLevel,
      field,
      search
    } = req.query

    const where = {}
    
    if(field) where.field = field
    if(experienceLevel) where.experienceLevel = experienceLevel
    if(jobType) where.jobType = jobType

    if(search){
      where.OR = [
        {title: {contains: search, mode: "insensitive"}},
        { companyName: { contains: search, mode: "insensitive" } }
      ]
    }
    const allJobs = await prisma.job.findMany({
      where,
      orderBy: { createdAt: "desc" },
    });

    if (allJobs) {
      res.status(200).json({
        success: true,
        message: "All job fetched successfully",
        job: allJobs,
      });
    } else {
      res.status(404).json({
        success: false,
        message: "job not found in collection",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Some error occured please try again",
    });
  }
};
export const ViewJobById = async (req, res) => {
  try {
    const jobId = req.params.id;
    const JobById = await prisma.job.findUnique({
      where: {
        id: Number(jobId),
      },
    });

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
      message: "Some error occured please try again",
    });
  }
};

export const jobByUser = async (req, res) => {
  try {
    const employerId = req.user.id;
    const jobByUser = await prisma.job.findMany({
      where: {
        employerId,
      },
    });
    if (jobByUser) {
      res.status(200).json({
        success: true,
        message: "job by user fetch success",
        job: jobByUser,
      });
    } else {
      res.status(404).json({
        success: false,
        message: "job not found in collection",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Some error occured please try again",
    });
  }
};

export const editJob = async (req, res) => {
  try {
    const jobId = Number(req.params.id);
    const userId = req.user.id;
    const job = await prisma.job.findUnique({
      where: {
        id: jobId,
      },
    });
    if (!job) {
      return res.status(404).json({
        success: false,
        message: "job not found",
      });
    }

    if (job.employerId !== userId) {
      return res.status(403).json({
        success: false,
        message: "Not authorized to update this job",
      });
    }

    const updatedJob = await prisma.job.update({
      where: {
        id: jobId,
      },
      data: {
        title,
        companyName,
        location,
        salary,
        jobType,
        experienceLevel,
        field,
        description,
        qualifications,
        companyBackground,
      },
    });
    res.status(200).json({
      success: true,
      job: updatedJob,
    });
  } catch (error) {
    console.error(error);
   return res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

export const deleteJob = async (req, res) => {
  try {
    const jobId = Number(req.params.id);
    const userId = req.user.id;

    const job = await prisma.job.findUnique({
      where: {
        id: jobId,
      },
    });

    if (!job) {
      return res.status(404).json({
        success: false,
        message: "job not found",
      });
    }

    if (job.employerId !== userId) {
      return res.status(403).json({
        success: false,
        message: "not authorize to delete this job",
      });
    }
    await prisma.job.delete({
      where: {
        id: jobId,
      },
    });

    res.status(200).json({
      success: true,
      message: "Job deleted successfully",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};


