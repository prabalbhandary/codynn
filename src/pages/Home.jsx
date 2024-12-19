import React, { useState } from "react";
import { MdOutlineFileUpload } from "react-icons/md";

const Home = () => {
    const [fName, setFName] = useState("");
    const [file, setFile] = useState([]);
  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="text-2xl">File Management System</h1>
        <div className="py-4 px-2 w-8 bg-gray-500 rounded-full"></div>
      </div>
      <div className="flex flex-col gap-4 mt-4">
        <label className="text-lg" htmlFor="fname">File Name</label>
        <input className="border border-gray-400 p-2 w-1/2" type="text" id="fname" value={fName} onChange={(e) => setFName(e.target.value)} name="fname" />
        <label className="text-lg flex items-center gap-2" htmlFor="file">
        Upload File
        <MdOutlineFileUpload />
        </label>
        <input className="border border-gray-400 p-2" type="file" id="file" onChange={(e) => setFile(e.target.files[0])} value={file} name="file" />
      </div>
      <div>
        {
          file ? (
            <div>
              <table>
                <thead>
                  <th>File Name</th>
                  <th>Uploaded on</th>
                  <th>Action</th>
                </thead>
                <tbody>
                  <tr>{}</tr>
                </tbody>
              </table>
            </div>
          ) : (
            <p>No File Selected</p>
          )
        }
      </div>
    </div>
  );
};

export default Home;
