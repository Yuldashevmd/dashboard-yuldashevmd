import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import DashboardSidebar from "./components/dashboardSidebar";

import { dashList } from "./utils/dashboard";
const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" />}/>
          <Route element={<DashboardSidebar/>}>
          {dashList.map((item)=> (
            <Route key={item?.id} path={item?.path} element={item?.component} />
          ))}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
