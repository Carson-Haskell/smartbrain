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

function App() {
  const [input, setInput] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [showImage, setShowImage] = useState(false);
  const [faceLocations, setFaceLocations] = useState();
  const [route, setRoute] = useState('signin');
  const [signedIn, setSignedIn] = useState(false);
  const [user, setUser] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (input === '') return;

    try {
      const res = await fetch('http://localhost:3000/imageurl', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ input }),
      });

      if (!res.ok) {
        throw new Error('Error loading image', res.status);
      }

      try {
        const entriesResponse = await fetch('http://localhost:3000/image', {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ id: user.id }),
        });

        if (entriesResponse.ok) {
          const entries = await entriesResponse.json();

          setUser({ ...user, entries });
        }
      } catch (entryError) {
        console.log(entryError);
      }

      const imageData = await res.json();

      setImageUrl(input);
      setShowImage(true);
      setFaceLocations(
        imageData.outputs[0]?.data?.regions[0]?.region_info.bounding_box,
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
      endSession();
      setImageUrl();
      setRoute('signin');
    } else {
      setRoute(newRoute);
    }
  };

  const endSession = () => {
    setSignedIn(false);
    setUser({});
    setShowImage(false);
    setImageUrl();
  };

  const loginUser = (user) => setUser(user);

  return (
    <div className="app">
      <ParticlesBg type="cobweb" bg={true} num={150} />
      <Navigation onRouteChange={onRouteChange} signedIn={signedIn} />
      <Logo />
      {route === 'home' ? (
        <>
          {!showImage && (
            <>
              <Rank name={user.name} entries={user.entries} />
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
        <SignIn onRouteChange={onRouteChange} loginUser={loginUser} />
      ) : (
        <Register onRouteChange={onRouteChange} loginUser={loginUser} />
      )}
    </div>
  );
}

export default App;
