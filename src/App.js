// import { Route } from "@mui/icons-material";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import HomePage from "./Components/HomePage";
import ProfilePage from "./Components/ProfilePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home-page" element={<HomePage />} />
        <Route path="/profile-page" element={<ProfilePage />} />
      </Routes>
    </Router>
  );
}

export default App;
