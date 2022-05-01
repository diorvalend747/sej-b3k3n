import { SET_CATEGORY, SET_BOOK, SET_FAVORITE } from "./actionTypes";

const initialState = {
  categories: [],
  books: [],
  favorites: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CATEGORY:
      return {
        ...state,
        categories: action.payload,
      };

    case SET_BOOK:
      return {
        ...state,
        books: action.payload,
      };

    case SET_FAVORITE:
      return {
        ...state,
        favorites: state.favorites.concat(action.payload),
      };

    default:
      return state;
  }
};

export default reducer;
