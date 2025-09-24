import MovieCard from "../components/MovieCard";

function Home() {
  const movies = [
    { id: 1, title: "John Wick", release_date: 2020 },
    { id: 2, title: "Air Bud", release_date: 2000 },
    { id: 3, title: "Like Mike", release_date: 2002 },
    { id: 4, title: "Emperor's New Groove", release_date: 2001 },
  ];

  const handleSearch = async (event) => {
    event.preventDefault;
    const response = await axios.get("url");
    event.target.data;
  };

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for movies..."
          className="search-input"
        />
        <button type="submit" className="search-button">
          Button
        </button>
      </form>
      <div className="movies-grid">
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
}

export default Home;
