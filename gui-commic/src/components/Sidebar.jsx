import React, {
  useState,
  useContext,
  useEffect,
  useRef
} from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../App";
import {
  FaSun,
  FaMoon,
  FaIgloo,
  FaFolder,
  FaStar,
  FaCog,
  FaUser,
  FaNewspaper,
  FaFire,
  FaHistory,
  FaThLarge,
  FaTrophy,
  FaSearch,
} from "react-icons/fa";


export default function Sidebar() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  return (
    <div className="Sidebar">
      <Link to="/">
        <FaIgloo /> Trang chủ
      </Link>
      <Link to="/library">
        <FaFolder /> Thư viện
      </Link>
      <Link to="/bookmark">
        <FaStar /> Danh sách lưu
      </Link>
      <Link to="/comingsoon">
        <FaNewspaper /> Sắp công chiếu
      </Link>
      <Link to="/hot">
        <FaFire /> Hot
      </Link>
      <Link to="/history">
        <FaHistory /> Lịch sử
      </Link>
      {/* Thể loại có popup */}
      <CommicType />
      <Link to="/ranking">
        <FaTrophy /> Xếp hạng
      </Link>
      {/* Tìm truyện */}
      <Search />
      <div style={{ flexGrow: 1 }}></div>
      <Link to="/setting">
        <FaCog /> Settings
      </Link>
      <Link to="/info">
        <FaUser /> Info
      </Link>

      <ModeButton darkMode={darkMode} setDarkMode={setDarkMode} />
    </div>
  );
}

/* ================= Nút thể loại (có popup) ================= */
function CommicType() {
  const [showGenres, setShowGenres] = useState(false);
  const genres = [
    "Action",
    "Adventure",
    "Comedy",
    "Drama",
    "Fantasy",
    "Horror",
    "Romance",
    "School Life",
    "Sci-fi",
    "Shounen",
    "Shoujo",
    "Sports",
    "Supernatural",
    "Tragedy",
    "Slice of Life",
    "Martial Arts",
    "Historical",
    "Mystery",
  ];

  const genreRef = useRef(null);

  // Ẩn popup khi click ra ngoài
  useEffect(() => {
    function handleClickOutside(e) {
      if (genreRef.current && !genreRef.current.contains(e.target)) {
        setShowGenres(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="SidebarItem" ref={genreRef}>
      <button className="SidebarBtn" onClick={() => setShowGenres(!showGenres)}>
        <FaThLarge /> Thể loại
      </button>

      {showGenres && (
        <div className="GenresPopup">
          {genres.map((genre) => (
            <Link
              to="/categories"
              key={genre}
              onClick={() => setShowGenres(false)}
            >
              {genre}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
/* ================= Nút tìm truyện (có popup) ================= */
function Search() {
  const [showSearch, setShowSearch] = useState(false);
  const searchRef = useRef(null);

  // Ẩn popup khi click ra ngoài
  useEffect(() => {
    function handleClickOutside(e) {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setShowSearch(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="SidebarItem" ref={searchRef}>
      <button className="SidebarBtn" onClick={() => setShowSearch(!showSearch)}>
        <FaSearch /> Tìm truyện
      </button>

      {showSearch && (
        <div className="SearchPopup">
          <input
            type="text"
            placeholder="Nhập tên truyện..."
            autoFocus
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                setShowSearch(false);
              }
            }}
          />
        </div>
      )}
    </div>
  );
}

/* ================= Nút đổi mode ================= */
function ModeButton({ darkMode, setDarkMode }) {
  return (
    <button
      className={`mode-btn ${darkMode ? "dark" : "light"}`}
      onClick={() => setDarkMode(!darkMode)}
    >
      <span className="icon">{darkMode ? <FaMoon /> : <FaSun />}</span>
      <span className="label">{darkMode ? "Dark" : "Light"}</span>
      <span className="slider"></span>
    </button>
  );
}
