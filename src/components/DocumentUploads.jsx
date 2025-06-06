import React, { useState, useContext, useRef } from "react";
import ChemistContext from "../context/ChemistContext";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faFileShield } from "@fortawesome/free-solid-svg-icons";
// import { ClipboardDocumentIcon } from '@heroicons/react/24/solid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboard } from '@fortawesome/free-solid-svg-icons';


const DocumentUploads = () => {
  const { formData, setFormData } = useContext(ChemistContext);
  const [files, setFiles] = useState({});
  const fileRefs = useRef({});

  const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB
  const ALLOWED_TYPES = ["application/pdf", "image/png", "image/jpeg"];

  const documents = [
    { label: "Upload License", key: "licenseCopy" },
    { label: " Upload Valid ID Proof", key: "idProof" },
    { label: " Upload Qualification Certificate", key: "qualificationCertificate" },
    { label: " Address Proof of Shop (Electricity Bill, Lease Agreement)", key: "addressProof" },
    { label: " GST Certificate", key: "gstCertificate" },
  ];

  const handleChange = (e, docType) => {
    const file = e.target.files[0];

    if (file) {
      if (!ALLOWED_TYPES.includes(file.type)) {
        alert("❌ Invalid file type. Please upload a PDF, JPG, or PNG file.");
        return;
      }

      if (file.size > MAX_FILE_SIZE) {
        alert("❌ File size exceeds 10MB. Please upload a smaller file.");
        return;
      }

      setFiles((prev) => ({ ...prev, [docType]: file }));
      setFormData((prev) => ({ ...prev, [docType]: file.name }));
    }
  };

  const handleFileClick = (key) => {
    if (fileRefs.current[key]) {
      fileRefs.current[key].click();
    }
  };

  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg max-w-3xl mx-auto">
      <h1 className="text-blue-700 font-semibold text-3xl flex items-center gap-3 mb-1 flex items-center gap-2">
        {/* <FontAwesomeIcon icon={faFileShield} className="text-blue-600" /> */}
        {/* <ClipboardDocumentIcon className="h-6 w-6 text-gray-700" /> */}
        <FontAwesomeIcon icon={faClipboard} size="  x" color="#2563eb" />
        Document Verification
      </h1>
      <p className="text-gray-500 text-sm mb-6">
        Please upload the required documents for verification.
      </p>

      <div className="grid grid-cols-1 gap-8">
        {documents.map((doc) => (
          <div key={doc.key} className="flex justify-between items-center gap-4 flex-wrap">
            <label className="font-medium text-gray-700">{doc.label}</label>

            <div className="flex flex-col items-center">
              <input
                type="file"
                accept=".pdf,.png,.jpg,.jpeg"
                ref={(el) => (fileRefs.current[doc.key] = el)}
                onChange={(e) => handleChange(e, doc.key)}
                style={{ display: "none" }}
              />

              <button
                type="button"
                onClick={() => handleFileClick(doc.key)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm w-full"
              >
                {files[doc.key] ? "Change File" : "Upload File"}
              </button>

              {files[doc.key] && (
                <p className="text-green-600 text-sm mt-1">
                  ✅ {files[doc.key].name} uploaded!
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DocumentUploads;
