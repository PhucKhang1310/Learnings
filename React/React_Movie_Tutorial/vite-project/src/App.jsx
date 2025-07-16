import { Routes, Route } from "react-router";
import "./css/App.css";
import MovieCard from "./components/MovieCard";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import NavBar from "./components/NavBar";
import { MovieProvider } from "./context/MovieContext";

function App() {
  return (
    <MovieProvider>
      <NavBar />
      <main classname="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </main>
    </MovieProvider>
  );
}

export default App;
