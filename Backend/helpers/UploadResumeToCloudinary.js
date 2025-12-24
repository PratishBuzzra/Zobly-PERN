import cloudinary from "../config/cloudinary.js";

const uploadResumeToCloudinary = async (filePath) => {
  try {
    const result = await cloudinary.uploader.upload(filePath, {
      folder: "Zobly_Resumes",
      resource_type: "auto",   
    access_mode: "public",   
  
    });

    return {
      url: result.secure_url,
      publicId: result.public_id,
    };
  } catch (error) {
    console.error("Error uploading resume to Cloudinary", error);
    throw new Error("Resume upload failed");
  }
};

export default uploadResumeToCloudinary;
