import { Route, Routes } from "react-router-dom";
import "./global.css";
import RootLayout from "./_root/RootLayout";
import Home from "./_root/pages/Home";
import MyInfo from "./_root/pages/MyInfo";
import Employees from "./_root/pages/Employees";
import Report from "./_root/pages/Report";
import Settings from "./_root/pages/Settings";
import Departments from "./_root/pages/Departments";
import Personal from "./components/homes/Personal";
const App = () => {
  return (
    <main className="flex h-screen">
      <Routes>
        <Route element={<RootLayout />}>
          <Route element={<Home />}>
            <Route index element={<Personal />}></Route>
          </Route>
          <Route path="/my-info" element={<MyInfo />} />
          <Route path="/employees" element={<Employees />} />
          <Route path="/departments" element={<Departments />} />
          <Route path="/report" element={<Report />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
        <Route></Route>
      </Routes>
    </main>
  );
};

export default App;
