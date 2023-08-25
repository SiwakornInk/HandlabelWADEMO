import React, { useState } from "react";
import BtnUpLoadFile from "../../components/handlabel/btnuploadfile/BtnUpLoadFile";
import ContentHandlabel from "../../components/handlabel/content/ContentHandlabel";
import styles from "./Handlabel.module.scss";

function Handlabel() {
  const [selectedImages, setSelectedImages] = useState<File[]>([]);
  const [displayedImage, setDisplayedImage] = useState<File | null>(null);
  const [lockedImages, setLockedImages] = useState<Record<string, boolean>>({});
  const [activeButtonIndex, setActiveButtonIndex] = useState<number | null>(
    null
  );

  const handleFilesSelected = (files: FileList) => {
    setSelectedImages(Array.from(files));
  };

  const handleImageLocked = (imageName: string) => {
    setLockedImages((prev) => ({
      ...prev,
      [imageName]: true,
    }));
  };

  return (
    <div className={styles.container}>
      <BtnUpLoadFile
        onFilesSelected={handleFilesSelected}
        images={selectedImages}
        onImageClicked={setDisplayedImage}
        lockedImages={lockedImages}
      />
      <ContentHandlabel
        image={displayedImage}
        onImageLocked={handleImageLocked}
        images={selectedImages}
        onImageClicked={setDisplayedImage}
        setActiveImageIndex={setActiveButtonIndex}
      />
    </div>
  );
}

export default Handlabel;
