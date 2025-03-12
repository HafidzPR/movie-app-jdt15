import React, { useState } from "react";
import { useTrendingData } from "../../../hooks/useTrendingData";
import { Movie } from "../../../services/type";
import Card from "../../../component/card/card";

const Home: React.FC = () => {
  // Fetch trending movies data
  const { trending } = useTrendingData();

  // State for pagination, dark mode, and sorting
  const [currentPage, setCurrentPage] = useState(1);
  const [darkMode, setDarkMode] = useState(false);
  const [sorted, setSorted] = useState(false);
  const moviesPerPage = 10;

  // Refresh function to reload the page
  const handleRefresh = () => {
    window.location.reload();
  };

  // Toggle Dark Mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Toggle sorting function (sort by title)
  const handleSort = () => {
    setSorted(!sorted);
  };

  // Pagination logic to determine displayed movies
  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  let currentMovies = trending?.slice(indexOfFirstMovie, indexOfLastMovie);

  // Sort movies if sorting is enabled
  if (sorted) {
    currentMovies = [...currentMovies].sort((a, b) =>
      (a.title ?? "").localeCompare(b.title ?? "")
    );
  }

  // Calculate total pages for pagination
  const totalPages = Math.ceil((trending?.length || 0) / moviesPerPage);

  return (
    <div
      className={`flex flex-col min-h-screen text-white transition-colors duration-300 ${
        darkMode
          ? "bg-black"
          : "bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 bg-fixed"
      }`}
    >
      {/* Header Section */}
      <header className="bg-gray-800 py-6 text-center shadow-lg sticky top-0 z-50 flex justify-between items-center px-6">
        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 text-transparent bg-clip-text">
          Trending Movies
        </h1>
        <div className="flex space-x-4">
          {/* Refresh Button */}
          <button
            onClick={handleRefresh}
            className="px-4 py-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition"
          >
            Refresh
          </button>
          {/* Dark Mode Toggle Button */}
          <button
            onClick={toggleDarkMode}
            className="px-4 py-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition"
          >
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
          {/* Sorting Toggle Button */}
          <button
            onClick={handleSort}
            className="px-4 py-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition"
          >
            {sorted ? "Unsort" : "Sort"}
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow p-6">
        <section className="flex flex-col">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 p-4">
            {/* Render each movie card */}
            {currentMovies?.map((item: Movie) => (
              <div
                key={item.id}
                className="transform transition duration-500 hover:rotate-y-360 hover:scale-105 hover:shadow-xl text-center"
              >
                <Card data={item} />
                {/* Movie title */}
                <h2 className="mt-2 text-lg font-bold text-yellow-400 bg-gray-800 px-3 py-1 rounded-lg shadow-md">
                  {item.title}
                </h2>
              </div>
            ))}
          </div>
        </section>

        {/* Pagination Controls */}
        <div className="flex justify-center mt-6 space-x-4">
          {/* Previous Page Button */}
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-gray-700 rounded-lg disabled:opacity-50"
          >
            Prev
          </button>
          {/* Page Indicator */}
          <span className="px-4 py-2 bg-gray-900 rounded-lg">
            Page {currentPage} of {totalPages}
          </span>
          {/* Next Page Button */}
          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-gray-700 rounded-lg disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </main>

      {/* Footer Section */}
      <footer className="bg-gray-800 py-4 text-center shadow-inner mt-6">
        <p className="text-gray-400">
          © {new Date().getFullYear()} MovieVerse | All Rights Reserved
        </p>
      </footer>
    </div>
  );
};

export default Home;
