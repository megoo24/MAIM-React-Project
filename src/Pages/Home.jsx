import { useState } from "react";
import SearchBar from "../components/SearchBar";
import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const searchMovies = async (query) => {
    setLoading(true);
    setError("");
    try {
      const response = await fetch(
        `https://www.omdbapi.com/?apikey=${import.meta.env.VITE_OMDB_API_KEY}&s=${query}`
      );
      const data = await response.json();

      if (data.Response === "True") {
        setMovies(data.Search);
      } else {
        setMovies([]);
        setError("لا يوجد نتائج للبحث");
      }
    } catch (err) {
      setError("حدث خطأ أثناء جلب البيانات");
    }
    setLoading(false);
  };

  return (
    <div className="home-page">
      <h1>🎬 ابحث عن فيلم</h1>
      <SearchBar onSearch={searchMovies} />

      {loading && <p>جار التحميل...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      <div className="movies-container">
        {movies.map((m) => (
          <div className="movie-card" key={m.imdbID}>
            <Link to={`/movie/${m.imdbID}`}>
              <img
                src={m.Poster !== "N/A" ? m.Poster : "https://via.placeholder.com/150"}
                alt={m.Title}
              />
              <h3>{m.Title}</h3>
              <p>{m.Year}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
``
