import Upload from "../../assets/icons/upload";
import "./FileUpload.css";
import { useState } from "react";

interface FileUploadProps {
    onFilesChange?: (files: File[]) => void;
}

/**
 * FileUpload Component
 *
 * A drag-and-drop file upload component that allows users to upload files
 * by either dropping them into the designated area or selecting them manually.
 * It supports file deduplication, and displays the uploaded files with a delete option.
 *
 * @component
 * @param {(files: File[]) => void} onFilesChange - Callback function that is triggered whenever the uploaded files change.
 *                                                          It receives the current list of uploaded files as its argument.
 *
 * @example
 * const handleFilesChange = (files) => {
 *   console.log("Uploaded files:", files);
 * };
 *
 * <FileUpload onFilesChange={handleFilesChange} />
 */
const FileUpload: React.FC<FileUploadProps> = ({ onFilesChange }) => {
    const [dragOver, setDragOver] = useState(false);
    const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setDragOver(true);
    };

    const handleDragLeave = () => {
        setDragOver(false);
    };

    const isDuplicate = (file: File) => {
        return uploadedFiles.some(
            (uploadedFile) => uploadedFile.name === file.name,
        );
    };

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setDragOver(false);
        const files = e.dataTransfer.files;
        handleFiles(files);
    };

    const handleFiles = (files: FileList) => {
        const newFiles: File[] = Array.from(files).filter(
            (file) => !isDuplicate(file),
        );

        if (newFiles.length > 0) {
            const updatedFiles = [...uploadedFiles, ...newFiles];
            setUploadedFiles(updatedFiles);

            if (onFilesChange) {
                onFilesChange(updatedFiles);
            }
        }
    };

    const resetFileInput = () => {
        const fileInput = document.getElementById(
            "fileInput",
        ) as HTMLInputElement;
        if (fileInput) {
            fileInput.value = "";
        }
    };

    const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            handleFiles(e.target.files);
        }

        resetFileInput();
    };

    const handleDeleteFile = (fileName: string) => {
        const updatedFiles = uploadedFiles.filter(
            (file) => file.name !== fileName,
        );
        setUploadedFiles(updatedFiles);

        if (onFilesChange) {
            onFilesChange(updatedFiles);
        }
    };

    return (
        <div className="upload">
            <div
                className={`upload-container ${dragOver ? "drag-over" : ""}`}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                onClick={() => document.getElementById("fileInput")?.click()}
            >
                <div className="upload-text">
                    Upload product Image
                    <Upload />
                </div>
                <div className="upload-subtext">Drag and drop or select</div>
                <input
                    type="file"
                    id="fileInput"
                    style={{ display: "none" }}
                    multiple
                    onChange={handleFileInputChange}
                />
            </div>
            <div className="uploaded-files">
                {uploadedFiles.map((file, index) => (
                    <div key={index} className="file">
                        <img src="src/assets/icons/upload/file.svg" />
                        <span>{file.name}</span>
                        <img
                            className="delete"
                            src="src/assets/icons/common/delete.svg"
                            alt="Delete"
                            onClick={() => handleDeleteFile(file.name)}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FileUpload;
