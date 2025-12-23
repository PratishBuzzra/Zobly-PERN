import React, { useEffect, useState } from "react";

const EditJob = ({ existingJob, onCancel, onSubmit }) => {
  const [formData, setFormData] = useState({
    title: "",
    companyName: "",
    location: "",
    salary: "",
    jobType: "",
    experienceLevel: "",
    field: "",
    description: "",
    qualifications: "",
    companyBackground: "",
    image: null
  });

  useEffect(() => {
    if (existingJob) {
      setFormData({
        ...existingJob,
        qualifications: existingJob.qualifications.join(", "),
        image: null
      });
    }
  }, [existingJob]);

  const handleChange = (e) => {
    const { name, value, files, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === "file" ? files[0] : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedForm = new FormData();
    Object.keys(formData).forEach(key => {
      if (key === "qualifications") {
        updatedForm.append(key, JSON.stringify(formData[key].split(",").map(q => q.trim())));
      } else if (key === "image" && formData.image) {
        updatedForm.append(key, formData.image);
      } else {
        updatedForm.append(key, formData[key]);
      }
    });
    onSubmit(updatedForm);
  };

  return (
    <div className="mt-6 bg-gray-50 p-6 rounded-lg border">
      <h3 className="text-2xl font-bold mb-4">Edit Job</h3>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input type="text" name="title" value={formData.title} onChange={handleChange} placeholder="Job Title" className="border p-2 rounded"/>
        <input type="text" name="companyName" value={formData.companyName} onChange={handleChange} placeholder="Company Name" className="border p-2 rounded"/>
        <input type="text" name="location" value={formData.location} onChange={handleChange} placeholder="Location" className="border p-2 rounded"/>
        <input type="text" name="salary" value={formData.salary} onChange={handleChange} placeholder="Salary" className="border p-2 rounded"/>
        <select name="jobType" value={formData.jobType} onChange={handleChange}>
          <option value="">Job Type</option>
          <option value="Full_Time">Full_Time</option>
          <option value="Part_Time">Part_Time</option>
          <option value="Remote">Remote</option>
          <option value="Hybrid">Hybrid</option>
        </select>
        <select name="experienceLevel" value={formData.experienceLevel} onChange={handleChange}>
          <option value="">Experience</option>
          <option value="Internship">Internship</option>
          <option value="Entry_Level">Entry_Level</option>
          <option value="Mid_Level">Mid_Level</option>
          <option value="Senior_Level">Senior_Level</option>
        </select>
        <input type="text" name="field" value={formData.field} onChange={handleChange} placeholder="Field" className="border p-2 rounded"/>
        <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Description" className="border p-2 rounded"/>
        <textarea name="qualifications" value={formData.qualifications} onChange={handleChange} placeholder="Qualifications (comma separated)" className="border p-2 rounded"/>
        <textarea name="companyBackground" value={formData.companyBackground} onChange={handleChange} placeholder="Company Background" className="border p-2 rounded"/>
        <input type="file" name="image" onChange={handleChange}/>
        <div className="flex gap-4 mt-2">
          <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">Save</button>
          <button type="button" onClick={onCancel} className="bg-gray-400 text-white px-4 py-2 rounded">Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default EditJob;
