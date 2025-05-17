import { useState } from "react";
import { Box, Grid, Paper, ImageList, ImageListItem } from "@mui/material";

interface ImagePreviewInterface {
    imagesUrl: string[];
}

const ImagePreview: React.FC<ImagePreviewInterface> = ({ imagesUrl }) => {
    const [currentImage, setCurrentImage] = useState<string>(imagesUrl[0]);

    return (
        <Box>
            {/* Main Preview Image */}
            <Paper
                elevation={3}
                sx={{
                    height: 340,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mb: 2,
                    borderRadius: 2,
                    overflow: "hidden",
                }}
            >
                <img
                    src={currentImage}
                    alt="Selected preview"
                    style={{
                        maxWidth: "100%",
                        maxHeight: "100%",
                        objectFit: "contain",
                    }}
                />
            </Paper>

            {/* Thumbnail Gallery */}
            <ImageList cols={5} gap={12} rowHeight={80} sx={{ m: 0 }}>
                {imagesUrl.map((url, index) => (
                    <ImageListItem
                        key={index}
                        onClick={() => setCurrentImage(url)}
                        sx={{
                            borderRadius: 1,
                            overflow: "hidden",
                            cursor: "pointer",
                            border:
                                currentImage === url
                                    ? "2px solid #66bb6a"
                                    : "1px solid #ccc",
                        }}
                    >
                        <img
                            src={url}
                            alt={`Preview ${index}`}
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                                transition: "transform 0.3s ease",
                            }}
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </Box>
    );
};

export default ImagePreview;
