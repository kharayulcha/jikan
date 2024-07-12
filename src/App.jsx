import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Food from "./pages/Food";
import DashboardLayout from "./layout/DashboardLayout"
import Dashboard from "./pages/Dashboard";
import NotFound from "./NotFound";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="" element={<Food />} />
            <Route path="home" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Route>
          <Route path="/dashboard" element={<DashboardLayout/>}>
          <Route path="" element={<Dashboard/>}/>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
