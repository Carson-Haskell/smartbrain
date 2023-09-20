import React from 'react';
import styles from './ImageLinkForm.module.css';

function ImageLinkForm({ setInput, handleSubmit }) {
  return (
    <div className={styles.mainContainer}>
      <p className={`${styles.title} f3`}>
        This Magic brain will detect faces in your pictures. Give it a try!
      </p>
      <div className="center">
        <div className={`${styles.form} pa4 shadow-4 center`}>
          <input
            className="f4 w-70 center"
            type="text"
            placeholder="paste image url here..."
            onChange={(e) => setInput(e.target.value)}
          />
          <button className="w-30 f4 ph3 pv2 dib" onClick={handleSubmit}>
            Detect
          </button>
        </div>
      </div>
    </div>
  );
}

export default ImageLinkForm;
