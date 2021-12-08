import { useState } from "react";
import { registerUser } from "./../utilities/network/routes";
import NavigationBar from "./NavigationBar";

const RegisterUser = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [registerUserStatus, setRegisterUserStatus] = useState("");

  const _handleInput = (e: any) => {
    if (!e?.target?.name) return;

    const { name, value } = e.target;

    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
    }
  };

  const _handleForm = async () => {
    const userResult: any = await registerUser(email, password);
    console.log(userResult.status);
    if (userResult.status !== 201) return alert("Signup unsuccessful.");
    setRegisterUserStatus(userResult.status);
  };

  return (
    <>
      <h1>Register user</h1>
      <NavigationBar />

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
      <button onClick={_handleForm}>Submit</button>
      <h2>{registerUserStatus}</h2>
    </>
  );
};

export default RegisterUser;
