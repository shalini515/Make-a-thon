import { useState } from "react";
import { Upload } from "lucide-react"; 

export default function UploadIdeaPage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = () => {
    console.log({ title, description, file });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      {/* Card Alternative */}
      <div className="max-w-2xl w-full shadow-lg p-6 bg-white rounded-2xl">
        <div>
          <h2 className="text-2xl font-bold mb-4 text-center">Upload Your Idea</h2>
          <div className="space-y-4">
            {/* Input Alternative */}
            <input
              type="text"
              placeholder="Title of Your Idea"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            {/* Textarea Alternative */}
            <textarea
              placeholder="Describe your idea in detail..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full p-2 h-32 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            {/* File Upload Alternative */}
            <div className="flex items-center space-x-4">
              <input type="file" onChange={handleFileChange} className="hidden" id="file-upload" />
              <label htmlFor="file-upload" className="cursor-pointer flex items-center space-x-2 bg-gray-200 p-2 rounded-lg hover:bg-gray-300">
                <Upload size={20} />
                <span>{file ? file.name : "Upload Supporting File"}</span>
              </label>
            </div>

            {/* Button Alternative */}
            <button
              className="w-full bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition"
              onClick={handleSubmit}
            >
              Submit Idea
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
