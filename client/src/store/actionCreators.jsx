import { SET_FAVORITE } from "./actionTypes";

export function setFavorite(value) {
  return {
    type: SET_FAVORITE,
    payload: value,
  };
}
