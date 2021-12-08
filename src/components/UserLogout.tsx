import { logout } from "@/utilities/network/routes";
import { parsedJSON } from "@/utilities/reusable";
import { getValue, setValue } from "@/utilities/storage";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const UserLogout = () => {
  const [authToken, setToken] = useState("");
  const [userObject, setUserObject] = useState({});
  const [userId, setUserId] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const userObj = parsedJSON(getValue("userObject"));
    if (!userObj || !userObj?.data) {
      return;
    }
    const { _id, token } = userObj?.data;
    console.log({ userId, token, userObj });
    setToken(token);
    setUserId(_id);
    setUserObject(userObj);
  }, []);

  const _handleLogout = () => {
    logout();
    setToken("");
    setUserId("");
    setUserObject({});
    navigate("/");
  };

  console.log("userObject", userObject);
  console.log("token", authToken);
  return (
    <>
      {" "}
      {authToken ? (
        <button onClick={_handleLogout}>Logout</button>
      ) : (
        <Link to={"/login"}>Login</Link>
      )}
    </>
  );
};

export default UserLogout;
