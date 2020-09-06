import React, { useState } from 'react';
import { storage } from '../../server/firebase';

const Admin = () => {
  const [image, setImage] = useState(null);

  const handleChange = (e) => {
    if (e.target.files[0]) setImage(e.target.files[0]);
  };

  const handleSubmit = (e) => {
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

  return (
    <>
      <div>Strona admina</div>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleChange} />
        <input type="submit" />
      </form>
    </>
  );
};

export default Admin;
