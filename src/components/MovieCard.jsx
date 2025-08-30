export default function MovieCard({ movie, onClick }) {
  return (
    <div onClick={() => onClick(movie.imdbID)} style={{ margin: "10px", cursor: "pointer" }}>
      <img src={movie.Poster} alt={movie.Title} style={{ width: "150px" }} />
      <h3>{movie.Title}</h3>
      <p>{movie.Year}</p>
    </div>
  );
}
