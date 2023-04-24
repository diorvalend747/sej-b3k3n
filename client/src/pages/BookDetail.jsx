import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setFavorite } from "../store/actionCreators";

export default function BookDetail() {
  const { id } = useParams();
  const books = useSelector((state) => state.books);
  const [detail, setDetail] = useState({});
  const dispatch = useDispatch();

  const detailBook = () => {
    const detail = books.find((item) => item.id == id);
    setDetail(detail);
  };

  useEffect(() => {
    detailBook();
  }, []);

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
          <Link to={"/bookmark"}>
            <button
              class="bg-white hover:bg-gray-400 text-black font-bold py-2 px-4 rounded-full mb-7"
              onClick={() => dispatch(setFavorite(detail))}
            >
              Add to Favorites
            </button>
          </Link>
        </div>
        {
          <div className="p-9">
            <div className="flex flex-col md:flex-row items-start">
              <img
                src={detail.cover_url}
                alt={detail.title}
                className="w-8/12 sm:w-6/12 mx-auto md:mx-0 md:w-5/12 rounded-xl shadow-2xl"
              />

              <div className="w-full ml-0 md:ml-14 mt-14 md:mt-0">
                <h1 className="text-2xl sm:text-5xl font-bold text-white">
                  {detail.title}
                </h1>
                <p className="mt-3 text-base font-medium text-white">
                  {detail
                    ? detail.authors
                      ? detail.authors.map((author, index) => {
                          const length = detail ? detail.authors.length : null;
                          let text = author;

                          if (length > 1 && length - 1 !== index) {
                            text += `, ${author}`;
                          } else if (length > 1 && length - 1 === index) {
                            text += ` & ${author}`;
                          }

                          return text;
                        })
                      : null
                    : null}
                </p>
                <div className="flex items-center text-base mt-4 py-4 border-t border-b border-gray-200">
                  <p className="flex items-center mr-4 text-white">
                    {detail
                      ? detail.sections
                        ? detail.sections.length
                        : null
                      : null}{" "}
                    Chapters
                  </p>
                  <p className="flex items-center text-white">
                    {Math.ceil(detail.audio_length / 60)} Minutes
                  </p>
                </div>

                <div className="mt-8">
                  <h3 className="text-xl font-bold text-white">
                    What's it about?
                  </h3>
                  <p className="text-base font-normal mt-3 text-white">
                    {detail.description}
                  </p>
                </div>
                <div className="mt-8">
                  <h3 className="text-xl font-bold text-white">
                    What's inside?
                  </h3>
                  <ul className="text-base font-normal mt-3 text-white">
                    {detail
                      ? detail.sections
                        ? detail.sections.map((section, i) => (
                            <li
                              key={section.title}
                              className="flex w-full items-start text-lg cursor-pointer font-medium text-primary"
                            >
                              <span className="mr-4 py-4">{i + 1}</span>
                              <span className="py-4 border-b w-full block border-gray-300">
                                {section.title}
                              </span>
                            </li>
                          ))
                        : null
                      : null}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        }
      </div>
    </>
  );
}
