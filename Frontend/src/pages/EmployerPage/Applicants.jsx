import { useEffect, useState } from "react";

const Applicants = () => {
  const base_url = import.meta.env.VITE_API_URL;
  const [applications, setApplications] = useState([]);
  const [selectedApp, setSelectedApp] = useState(null);

  useEffect(() => {
    const fetchApplications = async () => {
      const res = await fetch(`${base_url}/applications/get-applicant`, {
        credentials: "include",
      });
      const data = await res.json();
      if (data.success) setApplications(data.applications);
    };
    fetchApplications();
  }, []);


  return (
    <div className="min-h-screen pt-24 bg-gray-100 px-4  md:px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center md:text-left">Applicants For Your Jobs</h2>

        {applications.map((app) => (
          <div
            key={app.id}
            className="bg-white rounded-lg p-6 mb-5 shadow"
          >
            <div className="flex justify-between">
              <div>
                <h3 className="text-xl font-semibold">
                  {app.job.title}
                </h3>
                <p className="text-gray-600">
                  {app.job.companyName} • {app.job.location}
                </p>
              </div>

              <span className="text-sm text-gray-500">
                {new Date(app.createdAt).toLocaleDateString()}
              </span>
            </div>

            <div className="mt-4 flex gap-4">
              <button
                onClick={() => setSelectedApp(app)}
                className="text-green-600 font-medium hover:underline"
              >
                View Full Application
              </button>

              {app.resume && (
                <a
                  href={app.resume}
                  target="_blank"
                  className="text-blue-600 font-medium hover:underline"
                >
                  View Resume
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

     
      {selectedApp && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white max-w-lg w-full rounded-lg p-4 md:p-6 relative overflow-y-auto max-h-[90vh]">
            <button
              onClick={() => setSelectedApp(null)}
              className="absolute top-3 right-4 text-xl"
            >
              ✕
            </button>

            <h3 className="text-xl md:text-2xl font-bold mb-4 text-center md:text-left">
              Application Details
            </h3>

            <div className="space-y-2 text-sm">
              <p><strong>Name:</strong> {selectedApp.name}</p>
              <p><strong>Email:</strong> {selectedApp.email}</p>
              <p><strong>Phone:</strong> {selectedApp.PhoneNumber}</p>
              <p><strong>Address:</strong> {selectedApp.address}</p>

              <p className="mt-4 font-semibold">Cover Letter:</p>
              <p className="whitespace-pre-line bg-gray-100 p-3 rounded">
                {selectedApp.coverLetter}
              </p>

              {selectedApp.resume && (
                <a
                  href={selectedApp.resume}
                  target="_blank"
                  className="inline-block mt-4 text-green-600 font-semibold"
                >
                  View Resume
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Applicants;
