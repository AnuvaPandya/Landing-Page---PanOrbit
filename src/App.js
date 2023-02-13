// import { Route } from "@mui/icons-material";
import "./App.css";

import HomePage from "./Components/HomePage";
import ProfilePage from "./Components/ProfilePage";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HomePage />
        {/* <Routes>
          <Route path="/profile-page" element={<ProfilePage />} />
        </Routes> */}
      </header>
    </div>
  );
}

export default App;
