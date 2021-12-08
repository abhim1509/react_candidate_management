import { getValue } from "@/utilities/storage";
import { Link } from "react-router-dom";
import UserLogout from "./UserLogout";

const NavigationBar = () => {
  //const token = getValue("authToken");
  let token;
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <div>
          <Link to={"/"}>Homepage</Link>
        </div>
        <div>
          <Link to={"/register"}>Register User</Link>
        </div>
        <div>
          <UserLogout />
        </div>
      </div>
    </>
  );
};

export default NavigationBar;
