import { ImagePicker } from "@abak/react-image-picker";
import { useState } from "react";


const Component = () => {
    const [selectedFiles, setSelectedFiles] = useState([]);
    console.log(selectedFiles)
    alert(selectedFiles)
    return (
      <ImagePicker
          files={selectedFiles}
          onFilesChange={setSelectedFiles}
          onChange={(files) => {}} //optional
      />
    )
  }
export default Component;