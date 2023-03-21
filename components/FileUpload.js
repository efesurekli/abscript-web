import React, { useState } from 'react';
import axios from 'axios';

const FileUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleFileUpload = async () => {
    if (!selectedFile) {
      alert('Please select a file first');
      return;
    }

    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      const response = await axios.post(
        'https://us-central1-psychic-outcome-345314.cloudfunctions.net/upload-capture-fn/',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      console.log(response.data);
      alert('File uploaded successfully');
    } catch (error) {
      console.error('Error uploading file:', error);
      alert('Failed to upload file');
    }
  };

  const triggerInputFile = () => {
    document.getElementById('fileInput').click();
  };

  return (
    <div className="flex flex-col space-y-2 mt-2">
      <input
        id="fileInput"
        type="file"
        onChange={handleFileChange}
        className="hidden"
      />
      <button
        onClick={triggerInputFile}
        className="bg-gray-800 text-white font-semibold py-2 px-6 rounded inline-flex items-center justify-center hover:bg-opacity-80"
        style={{ minWidth: '120px', minHeight: '40px' }}
      >
        {selectedFile ? selectedFile.name : 'Select File'}
      </button>
      <button
        onClick={handleFileUpload}
        className="bg-highlight w-32 text-black font-semibold py-2 px-6 rounded inline-flex items-center justify-center hover:bg-opacity-80"
        style={{ minWidth: '120px', minHeight: '40px', marginTop: '1em' }}
      >
        Upload
      </button>
    </div>
  );
};

export default FileUpload;
