import multer from 'multer'
import path from 'path'


const storage = multer.diskStorage({
    destination : function(req, file, cb){
        cb(null, "uploads/")
    },
    filename: function(req, file, cb){
        cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname))
    }
})

const imageFilter = (req, file, cb) => {
    if(file.mimetype.startsWith('image')){
        cb(null, true)
    }else{
        cb(new Error('Not an image please upload only images'))
    }
}

const resumeFilter = (req, file,cb) =>{
    const allowedTypes = [
    "application/pdf",
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
  ]

  if(allowedTypes.includes(file.mimetype)){
    cb(null, true)
  }else{
    cb(new Error("only pdf or doc file allowed"), false)
  }
}

export const uploadImage = multer({
    storage: storage,
    fileFilter: imageFilter,
    limits : {
        fileSize: 5 * 1024 * 1024 
    }
})

export const uploadResume = multer({
  storage,
  fileFilter: resumeFilter,
  limits: { fileSize: 5 * 1024 * 1024 }
})