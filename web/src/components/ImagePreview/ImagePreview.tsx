import { useState } from "react";
import "./ImagePreview.css";

interface ImagePreviewInterface {
    imagesUrl: string[];
}

const ImagePreview: React.FC<ImagePreviewInterface> = ({ imagesUrl }) => {
    const [currentPreviewImage, setCurrentPreviewImage] = useState<string>(
        imagesUrl[0],
    );

    return (
        <div className="images-preview">
            <div className="current-main-image">
                <img src={currentPreviewImage} />
            </div>
            <div className="preview-images">
                {imagesUrl.map((image, index) => (
                    <img
                        className="hover"
                        onClick={() => setCurrentPreviewImage(image)}
                        src={image}
                        key={index}
                    />
                ))}
            </div>
        </div>
    );
};

export default ImagePreview;
