import { useState } from "react";
import { useNavigate } from "react-router";
import { login } from "./../utilities/network/routes";
import NavigationBar from "./NavigationBar";
import { getValue, setValue } from "@/utilities/storage";

const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

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
    const userResult: any = await login(email, password);
    console.log(userResult);

    if (!userResult?.data?.userId || userResult?.status !== 200) {
      return;
    }

    setValue("userObject", userResult);
    setValue("authToken", userResult.data.token);
    console.log("User login -getToken", getValue("authToken"));
    console.log(`/users/${userResult.data.userId}/tasks`);
    navigate(`/users/${userResult.data.userId}/tasks`);
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
        <button onClick={_handleForm}>Submit</button>
      </div>
    </>
  );
};
export default UserLogin;
