import React from "react";
import './UploadWord.scss'
import { FaPencilAlt, FaFileWord } from 'react-icons/fa';
import { useState } from "react";
import pencil from './icons/pencil.svg'
import word from './icons/word.png'
const UploadWord = ({setValue ,id}) => {
    const [uploadedFile, setUploadedFile] = useState(null);

    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        setUploadedFile(file);
        setValue(file)
    };
    return (
        <>
            <div className="UploadWord">
                <div className="upload-square"  id={id}>
                    <label htmlFor="word-file-input">
                        <div className="circle-pencil">
                            <img src={pencil} className="pencil-icon" />
                        </div>
                    </label>
                    <label >
                        {
                            uploadedFile ?
                                <>
                                    <img src={word} className="word-img" />
                                </> :
                                <>
                                    <div className="wordNoData">WORD</div>
                                </>
                        }
                    </label>
                    <input
                        type="file"
                        id="word-file-input"
                        accept=".doc,.docx"
                        onChange={handleFileUpload}
                    />
                </div>
            </div>
        </>
    )
}
export default UploadWord