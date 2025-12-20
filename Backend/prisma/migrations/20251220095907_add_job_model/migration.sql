-- CreateEnum
CREATE TYPE "JobType" AS ENUM ('Full_Time', 'Part_Time', 'Remote', 'Hybrid');

-- CreateEnum
CREATE TYPE "ExperienceLevel" AS ENUM ('Internship', 'Entry_Level', 'Mid_Level', 'Senior_Level');

-- CreateEnum
CREATE TYPE "Field" AS ENUM ('Tech', 'Marketing', 'HealthCare', 'Industry', 'Finance');

-- CreateTable
CREATE TABLE "Job" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "companyName" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "salary" TEXT NOT NULL,
    "jobType" "JobType" NOT NULL,
    "experienceLevel" "ExperienceLevel" NOT NULL,
    "field" "Field" NOT NULL,
    "description" TEXT NOT NULL,
    "qualifications" TEXT[],
    "companyBackground" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "employerId" INTEGER NOT NULL,

    CONSTRAINT "Job_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Job" ADD CONSTRAINT "Job_employerId_fkey" FOREIGN KEY ("employerId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
