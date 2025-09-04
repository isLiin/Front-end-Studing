import React, {
  useState,
  createContext,
} from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Sidebar from "./components/Sidebar";
import "./App.css";
import Home from "./components/Home";

export const ThemeContext = createContext();

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      <BrowserRouter>
        <div className={`App ${darkMode ? "dark" : ""}`}>
          <Sidebar />
          <div className="MainContent">
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/library" element={<h2>📚 Library</h2>} />
              <Route path="/bookmark" element={<h2>🔖 Bookmark</h2>} />
              <Route path="/comingsoon" element={<h2>📰 Coming Soon</h2>} />
              <Route path="/hot" element={<h2>🔥 Hot</h2>} />
              <Route path="/history" element={<h2>📜 Lịch sử</h2>} />
              <Route path="/categories" element={<h2>📂 Thể loại</h2>} />
              <Route path="/ranking" element={<h2>🏆 Xếp hạng</h2>} />
              <Route path="/search" element={<h2>🔍 Tìm truyện</h2>} />
              <Route path="/setting" element={<h2>⚙️ Settings</h2>} />
              <Route path="/info" element={<h2>👤 User Info</h2>} />
              <Route path="*" element={<h2>404 Not Found</h2>} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
}
