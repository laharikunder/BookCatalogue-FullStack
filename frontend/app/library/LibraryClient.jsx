'use client';

import { useEffect, useState } from "react";
import useHasMounted from "../../hooks/useHasMounted";

import BookCard from "../../components/BookCard";
import Modal from "../../components/Modal";

export default function LibraryPage() {
  const hasMounted = useHasMounted();

  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("title");
  const [selectedBook, setSelectedBook] = useState(null);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/books`);
        const data = await res.json();
        setBooks(data);
      } catch (err) {
        console.error("Error fetching books:", err);
      }
    };
    fetchBooks();
  }, []);

  if (!hasMounted) return null;

  const filteredBooks = books
    .filter((book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortBy === "title") return a.title.localeCompare(b.title);
      if (sortBy === "year") return parseInt(b.year) - parseInt(a.year);
      return 0;
    });

  return (
    <>
      <div
        className={`min-h-screen w-full bg-[#e4e2dd] py-10 px-4 animate-fade-in transition ${
          selectedBook ? 'blur-sm pointer-events-none select-none' : ''
        }`}
      >
        <div className="text-center mb-12 opacity-0 animate-fade-down animation-delay-100">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-3" style={{ color: 'rgba(97, 79, 60, 0.75)' }}>
            Welcome to my Book Catalogue
          </h1>
          <p className="text-lg text-gray-700">
            Discover, manage, and explore your personal library
          </p>
        </div>

        <div className="w-full sm:w-2/3 md:w-1/2 mx-auto mb-8 opacity-0 animate-fade-up animation-delay-100">
          <input
            type="text"
            placeholder="🔍 Search by book title..."
            className="w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-sm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="text-center mb-6 opacity-0 animate-fade-up animation-delay-100">
          <span className="mr-2 font-medium text-gray-700">Sort by:</span>
          <button
            className={`px-3 py-1 rounded-l border border-gray-300 ${
              sortBy === "title" ? "bg-[rgba(148,94,149,0.8)] text-white" : "bg-white text-gray-700"
            }`}
            onClick={() => setSortBy("title")}
          >
            Title
          </button>
          <button
            className={`px-3 py-1 rounded-r border border-gray-300 ${
              sortBy === "year" ? "bg-[rgba(148,94,149,0.8)] text-white" : "bg-white text-gray-700"
            }`}
            onClick={() => setSortBy("year")}
          >
            Year
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 opacity-0 animate-fade-up animation-delay-100">
          {filteredBooks.length > 0 ? (
            filteredBooks.map((book) => (
              <BookCard
                key={book._id}
                {...book}
                onClick={() => setSelectedBook(book)}
              />
            ))
          ) : (
            <p className="text-center col-span-full text-gray-500">No books found.</p>
          )}
        </div>
      </div>

      <Modal show={!!selectedBook} onClose={() => setSelectedBook(null)}>
        {selectedBook && (
          <div className="flex flex-col md:flex-row bg-[#e4e2dd] items-center gap-6 opacity-0 animate-fade-up animation-delay-200">
            <img
              src={selectedBook.image}
              alt={selectedBook.title}
              className="w-60 h-80 object-contain bg-gray-100"
            />
            <div>
              <h2 className="text-3xl font-bold mb-2" style={{ color: 'rgba(180,94,149,1)' }}>{selectedBook.title}</h2>
              <p className="text-lg text-gray-700 mb-1"><strong>Author:</strong> {selectedBook.author}</p>
              <p className="text-md text-gray-600 mb-2"><strong>Year:</strong> {selectedBook.year}</p>
              <p className="text-gray-800 text-sm">{selectedBook.description}</p>
            </div>
          </div>
        )}
      </Modal>
    </>
  );
}
