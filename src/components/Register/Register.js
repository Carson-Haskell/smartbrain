import React from 'react';

import '../SignIn/SignIn.css';

function Register({ onRouteChange }) {
  return (
    <article className="ba b--black-10 w-100 w-50-m w-25-l mw6 center shadow-2 main-article">
      <main className="pa5">
        <div className="measure">
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
              />
            </div>
          </fieldset>
          <div className="">
            <input
              className="b ph3 pv2 input-reset ba b--white bg-transparent grow pointer f6 dib form-input white"
              type="submit"
              value="Let's go!"
              onClick={() => onRouteChange('home')}
            />
          </div>
        </div>
      </main>
    </article>
  );
}

export default Register;
