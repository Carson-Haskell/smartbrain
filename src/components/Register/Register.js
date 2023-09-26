import React, { useState } from 'react';

import '../SignIn/SignIn.css';

function Register({ onRouteChange, loginUser }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      if (!response.ok) {
        throw new Error('Invalid data!', response.status);
      }

      const user = await response.json();
      loginUser(user);

      onRouteChange('home');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <article className="ba b--black-10 w-100 w-50-m w-25-l mw6 center shadow-2 main-article">
      <main className="pa5">
        <form className="measure" onSubmit={onSubmit}>
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f2 fw6 ph0 mh0">Register</legend>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="name">
                Name
              </label>
              <input
                className="pa2 input-reset ba b--white bg-transparent w-100 form-input"
                type="text"
                name="name"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="email-address">
                Email
              </label>
              <input
                className="pa2 input-reset ba b--white bg-transparent w-100 form-input"
                type="email"
                name="email-address"
                id="email-address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mv3">
              <label className="db fw6 lh-copy f6" htmlFor="password">
                Password
              </label>
              <input
                className="b pa2 input-reset ba b--white bg-transparent w-100 form-input"
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </fieldset>
          <div className="">
            <input
              className="b ph3 pv2 input-reset ba b--white bg-transparent grow pointer f6 dib form-input white"
              type="submit"
              value="Let's go!"
            />
          </div>
        </form>
      </main>
    </article>
  );
}

export default Register;
