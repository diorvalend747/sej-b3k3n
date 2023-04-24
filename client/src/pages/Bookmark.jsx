import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useFetchBook } from "../hooks";
import { CardBook } from "../components";
import ReactLoading from "react-loading";

export default function Bookmark() {
  const favorites = useSelector((state) => state.favorites);

  const [isLoadingBook] = useFetchBook();

  return (
    <>
      <div className="p-9">
        <div className="flex justify-between">
          <Link to={"/"}>
            <button class="bg-white hover:bg-gray-400 text-black font-bold py-2 px-4 rounded-full mb-7">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
            </button>
          </Link>
        </div>
        <h3 className="font-bold text-3xl mb-4 text-white">Favorite Books</h3>

        <div className="grid gap-5 md:gap-8 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 transition-all">
          {isLoadingBook ? (
            <ReactLoading type="spin" color="#fff" />
          ) : favorites.length > 0 ? (
            favorites.map((book) => {
              return (
                <CardBook
                  id={book.id}
                  cover_url={book.cover_url}
                  title={book.title}
                  authors={book.authors}
                />
              );
            })
          ) : (
            <p className="text-white text-xl">No data</p>
          )}
        </div>
      </div>
    </>
  );
}
