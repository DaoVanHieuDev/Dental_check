import React, { useState } from "react";
import axios from "axios";

export default function ImageUp({ onImageUpload }) {
  const [baseImage, setBaseImage] = useState("");

  const uploadImage = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    setBaseImage(base64);
    onImageUpload(base64)
  };

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  return (
    <div className="App">
      <input
        type="file"
        onChange={ uploadImage  }
      />
      <br></br>
      <img src={baseImage} height="200px" />

    </div>
  );
}
