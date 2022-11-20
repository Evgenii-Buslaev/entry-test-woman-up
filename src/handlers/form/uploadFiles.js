import { getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { storage } from "../../firebase";

export const uploadFiles = (file) => {
  if (!path) return;
  const storageRef = ref(storage, `/files/${file.name}`);
  const uploadTask = uploadBytesResumable(storageRef);

  let downloadLink;

  uploadTask.on(
    "state_changed",
    (snapshot) => {
      const prog = Math.round(
        (snapshot.bytesTransferred / snapshot.totalBytes) * 100
      );
    },
    (err) => console.log(err),
    () => {
      getDownloadURL(uploadTask.snapshot.ref).then(
        (url) => (downloadLink = url)
      );
    }
  );

  return downloadLink;
};
