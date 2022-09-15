import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import Trending from "./components/Trending/Trending";
import Gaming from "./components/Gaming/Gaming";
import SavedVideos from "./components/SavedVideos/SavedVideos";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/gaming" element={<Gaming />} />
          <Route path="/saved-videos" element={<SavedVideos />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
