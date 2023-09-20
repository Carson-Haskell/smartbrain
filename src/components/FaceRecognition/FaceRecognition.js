import React, { useState } from 'react';
import styles from './FaceRecognition.module.css';

function FaceRecognition({ imageUrl, faceLocations }) {
  const [box, setBox] = useState({});

  const calculateFaceLocations = () => {
    const image = document.getElementById('inputimage');

    const width = Number(image.width);
    const height = Number(image.height);

    console.log({ width, height });

    return {
      leftCol: faceLocations?.left_col * width,
      topRow: faceLocations?.top_row * height,
      rightCol: width - faceLocations?.right_col * width,
      bottomRow: height - faceLocations?.bottom_row * height,
    };
  };

  return (
    <div className={`${styles.imageContainer}`}>
      <div className="absolute ">
        <img
          id="inputimage"
          src={imageUrl}
          alt="person"
          width="400"
          height="auto"
          className={styles.img}
          onLoad={() => setBox(calculateFaceLocations())}
        />
        {box && (
          <div
            className={styles.boundingBox}
            style={{
              top: box?.topRow,
              right: box?.rightCol,
              bottom: box?.bottomRow,
              left: box?.leftCol,
            }}
          ></div>
        )}
      </div>
    </div>
  );
}

export default FaceRecognition;
