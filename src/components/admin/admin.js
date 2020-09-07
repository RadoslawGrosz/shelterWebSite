import React, { useState } from 'react';
import { storage } from '../../server/firebase';

const Admin = () => {
  const [image, setImage] = useState('');

  const handleFileSelect = (e) => {
    if (e.target.files[0]) setImage(e.target.files[0]);
  };

  const handleFileUpload = (e) => {
    e.preventDefault();
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      'state_changed',
      (snapshot) => {},
      (error) => {
        console.log(error);
      },
      () => {
        storage
          .ref('images')
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            console.log(url);
          });
      },
    );
  };

  const handleFileDelete = (e) => {
    e.preventDefault();
    const desertRef = storage.ref().child(`images/${image.name}`);

    desertRef.delete().then(() => {
      console.log('file deleted!');
    }).catch((error) => {
      console.log('wystąpił błąd!');
    });
  };

  const handleImageNameChange = () => {

  };

  return (
    <>
      <div>Strona admina</div>
      <form onSubmit={handleFileUpload}>
        <input type="file" onChange={handleFileSelect} />
        <input type="submit" />
      </form>
      <form onSubmit={handleFileDelete}>
        <input type="text" value={image && image.name} onChange={handleImageNameChange} />
        <input type="submit" />
      </form>
    </>
  );
};

export default Admin;
