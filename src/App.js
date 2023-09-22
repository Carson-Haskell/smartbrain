import './App.css';
import Navigation from './components/Navigation';
import Logo from './components/Logo';
import Rank from './components/Rank';
import ImageLinkForm from './components/ImageLinkForm';
import FaceRecognition from './components/FaceRecognition';
import ParticlesBg from 'particles-bg';
import SignIn from './components/SignIn';
import Register from './components/Register';

import { useState } from 'react';

const getRequestOptions = (imageUrl) => {
  const PAT = '1ba2de1f3a26480788a152c5e37fa183';
  const USER_ID = 'carsonhas';
  const APP_ID = 'smartbrain';
  const IMAGE_URL = imageUrl;

  const raw = JSON.stringify({
    user_app_id: {
      user_id: USER_ID,
      app_id: APP_ID,
    },
    inputs: [
      {
        data: {
          image: {
            url: IMAGE_URL,
          },
        },
      },
    ],
  });

  const requestOptions = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      Authorization: 'Key ' + PAT,
    },
    body: raw,
  };

  return requestOptions;
};

const API_ENDPOINT =
  'https://api.clarifai.com/v2/models/face-detection/outputs';

function App() {
  const [input, setInput] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [showImage, setShowImage] = useState(false);
  const [faceLocations, setFaceLocations] = useState();
  const [route, setRoute] = useState('signin');
  const [signedIn, setSignedIn] = useState(false);

  const handleSubmit = async () => {
    if (input === '') return;

    try {
      const res = await fetch(API_ENDPOINT, getRequestOptions(input));
      const json = await res.json();

      setImageUrl(input);
      setShowImage(true);
      setFaceLocations(
        json.outputs[0]?.data?.regions[0]?.region_info.bounding_box,
      );
    } catch (err) {
      console.log(err);
    }
  };

  const onRouteChange = (newRoute) => {
    if (newRoute === 'home') {
      setSignedIn(true);
      setRoute(newRoute);
    } else if (newRoute === 'signout') {
      setSignedIn(false);
      setRoute('signin');
    } else {
      setRoute(newRoute);
    }
  };

  return (
    <div className="app">
      <ParticlesBg type="cobweb" bg={true} num={150} />
      <Navigation onRouteChange={onRouteChange} signedIn={signedIn} />
      <Logo />
      {route === 'home' ? (
        <>
          {!showImage && (
            <>
              <Rank />
              <ImageLinkForm setInput={setInput} handleSubmit={handleSubmit} />
            </>
          )}
          {showImage && (
            <div className="container">
              <button
                className="back-btn grow shadow-2"
                onClick={() => setShowImage(!showImage)}
              >
                Try again
              </button>
              <FaceRecognition
                imageUrl={imageUrl}
                faceLocations={faceLocations}
              />
            </div>
          )}
        </>
      ) : route === 'signin' ? (
        <SignIn onRouteChange={onRouteChange} />
      ) : (
        <Register onRouteChange={onRouteChange} />
      )}
    </div>
  );
}

export default App;
