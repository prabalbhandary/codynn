import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaTrashAlt, FaUpload } from "react-icons/fa";

const Home = () => {
  const [files, setFiles] = useState([]);
  const [fileName, setFileName] = useState("");

  useEffect(() => {
    fetchFiles();
  }, []);

  const fetchFiles = async () => {
    try {
      const response = await axios.get("https://interview-mock-api.onrender.com/files");
      setFiles(response.data);
    } catch (error) {
      console.error("Error fetching files:", error);
    }
  };

  const handleUpload = async () => {
    if (!fileName) {
      alert("Please enter a file name.");
      return;
    }
    try {
      const response = await axios.post("https://interview-mock-api.onrender.com/files", {
        name: fileName,
        uploadedOn: new Date().toISOString().split("T")[0],
      });
      setFiles([...files, response.data]);
      setFileName("");
    } catch (error) {
      console.error("Error uploading file:", error);
      alert("File upload failed.");
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://interview-mock-api.onrender.com/files/${id}`);
      setFiles(files.filter((file) => file.id !== id));
    } catch (error) {
      console.error("Error deleting file:", error);
      alert("Failed to delete the file.");
    }
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 p-4">
      <h1 className="text-2xl font-bold mb-4">File Management System</h1>
      <div className="flex items-center gap-4 mb-6">
        <input
          type="text"
          value={fileName}
          onChange={(e) => setFileName(e.target.value)}
          placeholder="File Name"
          className="flex-grow border rounded-lg p-2"
        />
        <button
          onClick={handleUpload}
          className="flex items-center justify-center bg-blue-500 text-white px-4 py-2 rounded-lg"
        >
          <FaUpload className="mr-2" />
          Upload
        </button>
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-2">Uploaded Files</h2>
        <table className="w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2 text-left">File Name</th>
              <th className="border p-2 text-left">Uploaded on</th>
              <th className="border p-2 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {files.map((file) => (
              <tr key={file.id} className="hover:bg-gray-50">
                <td className="border p-2">{file.name}</td>
                <td className="border p-2">{file.uploadedOn}</td>
                <td className="border p-2">
                  <button
                    onClick={() => handleDelete(file.id)}
                    className="text-red-500 hover:text-red-700 flex items-center"
                  >
                    <FaTrashAlt className="mr-2" />
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
