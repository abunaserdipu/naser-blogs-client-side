import React, { useState } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebaseConfig";
// import { UserContext } from '../../App';

function Login() {
  // const [loggedInUser,setLoggedInUser] = useContext(UserContext)
  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const signInWithEmailAndPasswordHandler = (event, email, password) => {
    event.preventDefault();
  };

  const onChangeHandler = (event) => {
    const { name, value } = event.currentTarget;

    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };
  return (
    <section className="App h-screen w-full flex justify-center items-center bg-green-500">
      <div className="w-full max-w-md bg-gray-800">
        <form action="" className=" bg-white shadow-md rounded px-8 py-8 pt-8">
          <div className="px-4 pb-4">
            <label htmlFor="email" className="text-sm block font-bold  pb-2">
              EMAIL ADDRESS
            </label>
            <input
              type="email"
              name="email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300 "
              placeholder="Johnbull@example.com"
              onChange={(event) => onChangeHandler(event)}
            />
          </div>
          <div className="px-4 pb-4">
            <label htmlFor="password" className="text-sm block font-bold pb-2">
              PASSWORD
            </label>
            <input
              type="password"
              name="email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300"
              placeholder="Enter your password"
              onChange={(event) => onChangeHandler(event)}
            />
          </div>
          <div>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={(event) => {
                signInWithEmailAndPasswordHandler(event, email, password);
              }}
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </section>
    // <div className="container">
    //      <form className="">
    //   <label htmlFor="userEmail" className="block">
    //     Email:
    //   </label>
    //   <input
    //     type="email"
    //     className="my-1 p-1 w-full"
    //     name="userEmail"
    //     value = {email}
    //     placeholder="Your Email"
    //     id="userEmail"
    //     onChange = {(event) => onChangeHandler(event)}
    //   />
    //   <label htmlFor="userPassword" className="block">
    //     Password:
    //   </label>
    //   <input
    //     type="password"
    //     className="mt-1 mb-3 p-1 w-full"
    //     name="userPassword"
    //     value = {password}
    //     placeholder="Your Password"
    //     id="userPassword"
    //     onChange = {(event) => onChangeHandler(event)}
    //   />
    //   <button className="bg-green-400 hover:bg-green-500 w-full py-2 text-white" onClick = {(event) => {signInWithEmailAndPasswordHandler(event, email, password)}}>
    //     Sign in
    //   </button>
    // </form>
    // </div>
  );
}

export default Login;
