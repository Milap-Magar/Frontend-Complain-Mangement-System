import {
  DashboardUser,
  DashboardAdmin,
  Form,
  FormAdmin,
  FormUser,
} from "./page";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path={"/"} element={<Form />} />
          {/* For admin routing */}
          <Route path={"/admin"} element={<FormAdmin />}>
            <Route path={"/admin/dashboard"} element={<DashboardAdmin />} />
          </Route>
          {/* For user login  */}
          <Route path={"/user"} element={<FormUser />}>
            <Route path={"/user/dashboard"} element={<DashboardUser />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
