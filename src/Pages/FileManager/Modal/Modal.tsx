import { useState, useRef } from "react";
import ImgFolder from "../../../Assets/Image/Folder/Folder.png";
import IconPsd from "../../../Assets/Image/Icon-application/Photoshop.png";
import IconAi from "../../../Assets/Image/Icon-application/Illustrator.png";
import React from "react";

interface IFakeFile {
    name: string,
    uploadDate: number,
    size: number,
    status: number,
    favorite: boolean,
}

interface ModalProps {
    fakeFiles: IFakeFile[];
    setFakeFiles: React.Dispatch<React.SetStateAction<IFakeFile[]>>;
    handleClick: () => void;
}

export default function Modal({ fakeFiles, setFakeFiles, handleClick }: ModalProps) {
    const currentUploaded = useRef<HTMLDivElement>(null);
    const [uploadedFakeFiles, setUploadedFakeFiles] = useState<Array<IFakeFile>>([]);

    const dragOverHandler = (e: any) => {
        e.preventDefault();
        e.target.classList.add("dragging");
    }

    const dragLeaveHandler = (e: any) => {
        e.preventDefault();
        e.target.classList.remove("dragging");
    }

    const dropHandler = (e: any) => {
        e.preventDefault();
        let files = Array.from(e.dataTransfer.files);
        let uploaded: Array<IFakeFile> = [];

        files.map((file: any) => {
            let fake = {
                name: file.name,
                uploadDate: Date.now(),
                size: file.size,
                status: 200,
                favorite: true
            };
            return uploaded.push(fake);
        });

        setUploadedFakeFiles(uploaded);
        if (currentUploaded.current) currentUploaded.current.style.height = "100%";
    }

    const uploadHandler = () => {
        setFakeFiles([...fakeFiles, ...uploadedFakeFiles]);
        setUploadedFakeFiles([]);
        handleClick();
        if (currentUploaded.current) currentUploaded.current.style.height = "0";
    }

    return (
        <div className="modal" id="modal">
            <h3>Upload your files</h3>
            <p>File should be Sketch,fig,psd</p>

            <div className="drag-and-drop" onDrop={dropHandler} onDragOver={dragOverHandler} onDragLeave={dragLeaveHandler}>
                <img src={ImgFolder} alt="Folder" />
                <p>Drag & Drop your files here</p>
            </div>

            <div className="uploaded" ref={currentUploaded}>
                <p>Uploaded files</p>
                <ul>
                    {uploadedFakeFiles.map((e: IFakeFile, key: number) => {
                        let split = e.name.split("."),
                            extension = split[split.length - 1],
                            iconUrl = extension === "psd" ? IconPsd : IconAi;

                        return (
                            <li key={key}>
                                <img src={iconUrl} alt={extension} />
                                <div className="content">
                                    <p>{e.name}</p>
                                    <div className="bar-progress"><div className={extension === "psd" ? "blue" : "yellow"}></div></div>
                                </div>
                            </li>
                        )
                    })}
                </ul>
                <button onClick={uploadHandler}>Done</button>
            </div>
        </div>
    )
}
