// ImageUpload.js

import React, { useState } from "react";

const ImageUpload = () => {
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState("");

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (image && description) {
      const formData = new FormData();
      formData.append("image", image);
      formData.append("description", description);

      // Send formData to the backend
      fetch("/upload", {
        method: "POST",
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          // Handle successful upload
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    } else {
      alert("Please select an image and enter a description");
    }
  };

  return (
    <div className="">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-row jusitfy-center items-center w-full p-2">
          <label className=" text-nowrap" htmlFor="image">
            Upload Image:{" "}
          </label>
          <input
            className="p-2 w-full"
            type="file"
            id="image"
            onChange={handleImageChange}
          />
        </div>
        <div className="flex-row flex p-2 gap-2">
          <div className="" htmlFor="description">
            Description:
          </div>
          <textarea
            className="rounded-lg text-black p-2 w-full"
            id="description"
            value={description}
            onChange={handleDescriptionChange}
          />
        </div>
        <button className="px-4 p-1 rounded-lg text-white hover:text-gray-600 bg-[#FFD006] transition transform active:scale-95 " type="submit">Submit</button>
        
      </form>
    </div>
  );
};

export default ImageUpload;
