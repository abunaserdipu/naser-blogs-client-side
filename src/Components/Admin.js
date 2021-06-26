import React, { useState } from "react";

function Admin() {
  const [info, setInfo] = useState({});
  const [file, setFile] = useState(null);
  const handleBlur = (e) => {
    const newInfo = { ...info };
    newInfo[e.target.name] = e.target.value;
    setInfo(newInfo);
  };
  const handleFileChange = (e) => {
    const newFile = e.target.files[0];
    setFile(newFile);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    formData.append("email", info.email);
    formData.append("title", info.title);
    formData.append("description", info.description);

    fetch("http://localhost:5000/addBlogs", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          alert("Blog added successfully");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className="container">
      <h1 className="text-3xl text-center mx-5 font-bold">
        Add Your Awesome Blog
      </h1>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="text-sm font-bold text-gray-600 block">Email</label>
          <input
            onBlur={handleBlur}
            type="email"
            name="email"
            className="w-full p-2 border border-gray-300 rounded mt-1"
          />
        </div>
        <div>
          <label className="text-sm font-bold text-gray-600 block">Title</label>
          <input
            onBlur={handleBlur}
            type="text"
            name="title"
            className="w-full p-2 border border-gray-300 rounded mt-1"
          />
        </div>
        <div>
          <label className="font-sm font-bold text-gray-600 block">
            Description
          </label>
          <textarea
            onBlur={handleBlur}
            name="description"
            className="form-textarea w-full p-2 border border-gray-300 rounded mt-1"
            rows="3"
          ></textarea>
        </div>
        <div>
          <label className="font-sm font-bold text-gray-600 block">
            Cover Photo
          </label>
          <input
            onChange={handleFileChange}
            type="file"
            name="file"
            className="form-file w-full p-2 border border-gray-300 rounded mt-1"
          />
        </div>
        <button
          type="submit"
          className="block bg-indigo-700 rounded text-white px-4 h-8"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Admin;
