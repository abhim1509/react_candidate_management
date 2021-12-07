import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NotFound from "./../components/NotFound";
import UserLogin from "./../components/UserLogin";
import RegisterUser from "./../components/RegisterUser";
import UserTasks from "./../components/UserTasks";
import Homepage from "@/components/Homepage";
import AddTasks from "@/components/AddTasks";
import EditTasks from "@/components/EditTasks";

const Navigation = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<UserLogin />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/register" element={<RegisterUser />} />
          <Route path="/users/:userId/tasks" element={<UserTasks />} />
          <Route path="/users/:userId/tasks/add" element={<AddTasks />} />
          <Route
            path="/users/:userId/tasks/:taskId/edit"
            element={<EditTasks />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Navigation;
