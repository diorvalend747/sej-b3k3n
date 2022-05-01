import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  useFetchCategory,
  useFetchBook,
} from '../hooks';
import {
  CardBook,
  SearchBar
} from '../components';
import BookmarkSVG from '../icon/bookmark.svg';
import ReactLoading from "react-loading";

export default function Home() {
    const categories = useSelector(state => state.categories);
    const books = useSelector(state => state.books);

    const navigate = useNavigate()
    
    const [isLoadingCategory] = useFetchCategory();
    const [isLoadingBook, setCategoryId, setPage, page, pageSize, setPageSize] = useFetchBook();

    const [searchInput, setSearchInput] = useState(null)

    const [selectCategory, setSelectCategory] = useState({
      select: false,
      name: ''
    });
    
    return (
      <>
        <div className="p-9">
          {
            selectCategory.select ?
            <> 
              <div className="flex justify-between gap-6">
                <button 
                  onClick={() => {
                    setSelectCategory({ select: false })
                    setPage(0)
                    setPageSize(10)
                  }}
                  class="bg-white hover:bg-gray-400 text-black font-bold py-2 px-4 rounded-full mb-7"
                >
                  {`<`}
                </button>
               <SearchBar
                  onChange={(event) => setSearchInput(event.target.value)}
                  value={searchInput}
               />
               
              </div>
              <h3 className="font-bold text-3xl mb-4 text-white mb-8">{selectCategory.name}</h3>
              <div className="grid gap-5 md:gap-8 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 transition-all">
                {
                  isLoadingBook ?
                  <ReactLoading type="spin" color="#fff" />
                  :
                  (books.filter(item => {
                    if (!searchInput) {
                      return item;
                    } else {
                      return item.title.toLowerCase().includes(searchInput) || item.authors[0].toLowerCase().includes(searchInput)
                    }
                  }).map((book) => {
                      return (
                        <CardBook
                          id={book.id}
                          cover_url={book.cover_url}
                          title={book.title}
                          authors={book.authors}
                        />
                      )
                  }))
                }
              </div>
              {
                isLoadingBook ?
                <></> :
                <div className="flex justify-center pt-9">
                  <button 
                    onClick={() => page === 0 ? null : setPage(page - 1)} 
                    className="inline-flex items-center py-2 px-4 mr-4 text-sm font-medium text-black rounded-lg bg-white hover:bg-gray-400 text-black"
                  >
                    <svg class="mr-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clip-rule="evenodd"></path></svg>
                    Previous
                  </button>
                  <p className="text-white text-xl font-medium">Page {page + 1}</p>
                  <button 
                    onClick={() => books.length < 10 ? null : setPage(page + 1)} 
                    className="inline-flex items-center py-2 px-4 ml-4 text-sm font-medium text-black rounded-lg bg-white hover:bg-gray-400 text-black"
                  >
                    Next
                    <svg class="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                  </button>
                </div>
              }
            </> :
            <>
              <div className="flex justify-between">
                <h3 className="font-bold text-xl mb-4 text-white">Explore Category</h3>
                <button className="mb-9" onClick={() => navigate('/bookmark')}>
                  <img src={BookmarkSVG} className="w-a12 h-10"/>
                </button>
              </div>
              { isLoadingCategory ? 
                <ReactLoading type="bubbles" color="#fff" />
               : (
                <>
                  <div id="categories" className="flex items-center overflow-x-auto pb-4 gap-3 lg:pb-0">
                    {categories.map((category) => {
                      return (
                        <div className="text-base flex items-center min-w-max">
                          <button 
                            onClick={() => {
                              setCategoryId(category.id);
                              setSelectCategory({
                                select: true,
                                name: category.name
                              });
                            }}
                            class="bg-white hover:bg-gray-400 text-black font-bold py-2 px-4 rounded-full"
                          >
                            {category.name}
                          </button>
                        </div>
                      )
                      })}
                  </div>
                  <h1 className="font-bold text-xl mt-14 mb-8 text-white">Popular This Week</h1>
                  <div className="grid gap-5 md:gap-8 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 transition-all">
                    {
                      isLoadingBook ?
                      <ReactLoading type="spin" color="#fff" />
                      :
                      (books.map((book) => {
                          return (
                            <CardBook
                              id={book.id}
                              cover_url={book.cover_url}
                              title={book.title}
                              authors={book.authors}
                            />
                          )
                      }))
                    }
                  </div>
                </>
              )}
            </>
          }
        </div>
      </>
    )
}