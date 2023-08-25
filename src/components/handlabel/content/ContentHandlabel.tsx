import React, { useState } from "react";
import {
  Button,
  Radio,
  FormControlLabel,
  FormControl,
  TextField,
  Typography,
} from "@mui/material";
import styles from "./ContentHandlabel.module.scss";

interface Props {
  image: File | null;
  onImageLocked: (imageName: string) => void;
}

const ContentHandlabel: React.FC<Props> = ({ image, onImageLocked }) => {
  const [lockedImages, setLockedImages] = useState<Record<string, boolean>>({});
  const [selectedOptions, setSelectedOptions] = useState<{ dr1: string | null, dr2: string | null }>({ dr1: "No DR", dr2: "No Glaucoma" });
  const [isTextFieldDisabled, setTextFieldDisabled] = useState(false);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>, optionType: 'dr1' | 'dr2') => {
    setSelectedOptions(prev => ({
      ...prev,
      [optionType]: event.target.value
    }));
  };

  const lockImage = () => {
    if (image) {
      const isConfirmed = window.confirm("คุณแน่ใจหรือไม่ว่าต้องการยืนยัน?");
      if (isConfirmed) {
        setLockedImages((prevState) => ({
          ...prevState,
          [image.name]: true,
        }));
        onImageLocked(image.name);
              setTextFieldDisabled(true);


      }
    }
  };

  const drOptions1 = ["No DR", "DR1", "DR2", "DR3", "DR4"];
  const drOptions2 = ["No Glaucoma", "Have Glaucoma"];

  return (
    <div className={styles.container}>
      {image && (
        <div className={styles.dflex}>
          <div className={styles.heightboximg}>
            <img
              src={URL.createObjectURL(image)}
              alt="Selected"
              className={styles.selectedImage}
            />
          </div>
          <div className={styles.heightboxcheckbox}>
            <div className={styles.cbcontent1}>
              <Typography variant="h6" gutterBottom>
                DR Diagnosis
              </Typography>
              <FormControl component="fieldset">
                {drOptions1.map((dr) => (
                  <FormControlLabel
                    key={dr}
                    value={dr}
                    control={
                      <Radio
                        checked={selectedOptions.dr1 === dr}
                        onChange={(e) => handleCheckboxChange(e, 'dr1')}
                        disabled={lockedImages[image?.name]}
                      />
                    }
                    label={dr}
                  />
                ))}
              </FormControl>
            </div>
            <div className={styles.cbcontent2}>
              <Typography variant="h6" gutterBottom>
                Glaucoma Diagnosis
              </Typography>
              <FormControl component="fieldset">
                {drOptions2.map((dr) => (
                  <FormControlLabel
                    key={dr}
                    value={dr}
                    control={
                      <Radio
                        checked={selectedOptions.dr2 === dr}
                        onChange={(e) => handleCheckboxChange(e, 'dr2')}
                        disabled={lockedImages[image?.name]}
                      />
                    }
                    label={dr}
                  />
                ))}
              </FormControl>
            </div>
            <div className={styles.cbcontent3}>
              <Typography variant="h6" gutterBottom>
                Other
              </Typography>
              <TextField
                label="ข้อความ..."
                variant="outlined"
                multiline
                rows={8}
                disabled={isTextFieldDisabled}

              />
            </div>
          </div>
          {!lockedImages[image?.name] && (
            <Button
              variant="contained"
              onClick={lockImage}
              color="success"
              disabled={!selectedOptions.dr1 || !selectedOptions.dr2}
            >
              ยืนยัน
            </Button>
          )}
        </div>
      )}
    </div>
  );
};

export default ContentHandlabel;
