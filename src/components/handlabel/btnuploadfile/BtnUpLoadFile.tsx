import React, { useState } from "react";
import Button from "@mui/material/Button";
import styles from "./BtnUpLoadFile.module.scss";

interface Props {
  onFilesSelected: (files: FileList) => void;
  images: File[];
  onImageClicked: (image: File) => void;
  lockedImages: Record<string, boolean>;
}

const BtnUploadFile: React.FC<Props> = ({
  onFilesSelected,
  images,
  onImageClicked,
  lockedImages, // อย่าลืมรับ lockedImages ที่นี่
}) => {
  const [activeButtonIndex, setActiveButtonIndex] = useState<number | null>(
    null
  );

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      onFilesSelected(event.target.files);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.btnupload}>
        <input
          type="file"
          id="upload-file"
          style={{ display: "none" }}
          multiple
          onChange={handleFileChange}
        />
        <label htmlFor="upload-file">
          <Button variant="contained" component="span" color="primary">
            อัปโหลดรูปภาพ
          </Button>
        </label>
      </div>
      {/* List of uploaded image names */}
      <div className={styles.btnnameimg}>
        {images.map((image, index) => {
          console.log(
            "Rendering button for",
            image.name,
            "active:",
            activeButtonIndex === index,
            "locked:",
            lockedImages[image.name]
          );
          return (
            <Button
              key={index}
              onClick={() => {
                onImageClicked(image);
                setActiveButtonIndex(index);
              }}
              variant="text"
              className={`
            ${styles["image-button"]} 
            ${activeButtonIndex === index ? styles["active"] : ""}
            ${lockedImages[image.name] ? styles["locked"] : ""}
        `}
            >
              {image.name}
            </Button>
          );
        })}
      </div>
    </div>
  );
};

export default BtnUploadFile;
