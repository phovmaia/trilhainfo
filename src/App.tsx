import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import RoadmapPage from "./pages/RoadmapPage";
import ReactGA from "react-ga4";
import LoginPage from "./pages/LoginPage";
import NewRoadmapPage from "./pages/NewRoadmap";
import CustomRoadmapPage from "./pages/CustomRoadmapPage";
import GuidePage from "./pages/GuidePage";
import HorizontalRoadmapPage from "./pages/HorizontalRoadmapPage";


function App() {
  ReactGA.initialize("G-GQDL3TBPEZ");
  ReactGA.send({
    hitType: "pageview",
    page: window.location.pathname + window.location.search,
  });
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/roadmap/:name" element={<RoadmapPage />} />
      <Route path="/hroadmap/:name" element={<HorizontalRoadmapPage />} />
      <Route path="/roadmap/view/:roadmapId" element={<CustomRoadmapPage />} />
      <Route path="/roadmap/v/:roadmapId" element={<CustomRoadmapPage />} />
      <Route path="/new-roadmap" element={<NewRoadmapPage />} />
      <Route path="/edit-roadmap/:roadmapId" element={<NewRoadmapPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/guide/:guide" element={<GuidePage />} />
      
    </Routes>
  );
}

export default App;
