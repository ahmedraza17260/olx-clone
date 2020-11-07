/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { providerGo, providerFb, auth } from "./firebase";
import { actionTypes } from "./reducer";
import { Button } from "@material-ui/core";
import { useStateValue } from "./StateProvider";

import "./Signin.css";

function Signin() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [{ user }, dispatch] = useStateValue();

  const signInEP = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((error) => alert(error.message));
  };

  const registerEP = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        // it successfully created a new user with email and password
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
  };
  const signInGo = () => {
    auth
      .signInWithPopup(providerGo)
      .then(function (result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        // ...
      })
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
  };
  const signInFb = () => {
    auth
      .signInWithPopup(providerFb)
      .then(function (result) {
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        // ...
      })
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
  };

  // const signInGo = () => {
  //   auth
  //     .signInWithPopup(providerGo)
  //     .then((result) => {
  //       dispatch({
  //         type: actionTypes.SET_USER,
  //         user: result.user,
  //       });
  //     })
  //     .catch((error) => alert(error.message));
  // };

  // const signInFb = () => {
  //   auth
  //     .signInWithPopup(providerFb)
  //     .then((result) => {
  //       dispatch({
  //         type: actionTypes.SET_USER,
  //         user: result.user,
  //       });
  //     })
  //     .catch((error) => alert(error.message));
  // };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://www.samaa.tv/wp-content/uploads/2018/11/OLX-logo.png"
          alt="olx_logo"
        />
      </Link>
      <div>
        <div className="login__container">
          <h1>Sign-in</h1>
          <form>
            <h5>E-mail</h5>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <h5>Password</h5>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="submit"
              onClick={signInEP}
              className="login__signInButton"
            >
              Sign In
            </button>
          </form>
          <p>
            By signing-in you agree to the OLX FAKE CLONE Conditions of Use &
            Sale. Please see our Privacy Notice, our Cookies Notice and our
            Interest-Based Ads Notice.
          </p>

          <button onClick={registerEP} className="login__signInButton">
            Create your OLX Account
          </button>

          <hr />

          <Button
            className="login__signInButton"
            type="submit"
            onClick={signInGo}
          >
            Sign with Google
          </Button>
          <br />
          <Button
            className="login__signInButton"
            type="submit"
            onClick={signInFb}
          >
            Sign with Facebook
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Signin;
