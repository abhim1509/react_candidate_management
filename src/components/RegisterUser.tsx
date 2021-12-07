import { useEffect, useState } from "react";
import { registerUser } from "./../utilities/network/routes";
import NavigationBar from "./NavigationBar";

const RegisterUser = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [registerUserStatus, setRegisterUserStatus] = useState("");

  const _handleInput = function (e: any) {
    switch (e.target.name) {
      case "email":
        setEmail(e.target.value);
        break;
      case "password":
        setPassword(e.target.value);
        break;
    }
  };

  const _handleForm = async function () {
    //console.log("email", email);
    //console.log("password", password);
    const userResult = await registerUser(email, password);
    console.log(userResult.status);
    setRegisterUserStatus(userResult.status);
  };
  //console.log(typeof registerUserStatus);
  return (
    <>
      <h1>Register user</h1>
      <NavigationBar></NavigationBar>

      <input
        type="email"
        name="email"
        placeholder="Enter user's email."
        onChange={_handleInput}
      />
      <input
        type="password"
        name="password"
        placeholder="Enter user's password."
        onChange={_handleInput}
      />
      <button
        onClick={() => {
          _handleForm();
        }}
      >
        Submit
      </button>
      <h2>{registerUserStatus}</h2>
      <div>
        {registerUserStatus != "" ? (
          <div>
            {registerUserStatus === "201" ? (
              <div>
                <h3>User created successfully.</h3>
              </div>
            ) : (
              <h3>There was an error creating user.</h3>
            )}
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default RegisterUser;
