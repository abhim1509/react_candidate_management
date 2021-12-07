import { getValue } from "@/utilities/storage";
import { Link } from "react-router-dom";

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
          {token ? (
            <Link to={"/"}>Logout</Link>
          ) : (
            <Link to={"/login"}>Login</Link>
          )}
        </div>
      </div>
    </>
  );
};

export default NavigationBar;
