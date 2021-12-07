import { login } from "./../utilities/network/routes";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import NavigationBar from "./NavigationBar";
import { getValue, setValue } from "@/utilities/storage";

const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

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
    const userResult = await login(email, password);
    console.log(userResult);

    if (
      userResult &&
      userResult.data &&
      userResult.data.userId &&
      userResult.status === 200
    ) {
      setValue("userObject", userResult);
      setValue("authToken", userResult.data.token);
      console.log("User login -getToken", getValue("authToken"));
      console.log(`/users/${userResult.data.userId}/tasks`);
      navigate(`/users/${userResult.data.userId}/tasks`);
    }
  };

  return (
    <>
      <h1>Login</h1>
      <NavigationBar />
      <div>
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
      </div>
    </>
  );
};
export default UserLogin;
