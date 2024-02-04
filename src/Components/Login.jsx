import React, { useState } from "react";
import { auth } from "./firebase";
import "./Login.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const signIn = async e => {
    e.preventDefault();

     try {
      const userCredential1 = await auth.signInWithEmailAndPassword(email,password);
      if (userCredential1) {
        navigate("/");
      }
    } catch (error) {
      console.error(error);
    }
  };



  const register = async e => {
    e.preventDefault();
    console.log(auth);

    try {
      const userCredential = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      if (userCredential) {
        navigate("/");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="login">
      <img
        className="login_logo"
        src="https://fontmeme.com/images/Amazon-Logo.jpg"
        alt=""
      />
      <div className="login_container">
        <h1>Sign-in</h1>

        <form action="">
          <h3>E-mail</h3>
          <input
            type="text"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <h3>Password</h3>
          <input
            type="text"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />

          <button type="submit" onClick={signIn} className="login_signInButton">
            Sign In
          </button>
        </form>

        <p>
          By signing-in you agree to the AMAZON FAKE CLONE conditions of use
          sale. please use our privacy Notice, our cookies Notice and our
          Interest-Based Ads Notice.
        </p>

        <button onClick={register} className="login_registerButton">
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
