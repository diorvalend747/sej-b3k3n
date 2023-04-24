import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { SET_CATEGORY } from "../store/actionTypes";
import config from "../api/base";

export default function useFetchCategory() {
  const dispatch = useDispatch();
  const [isLoadingCategory, setLoading] = useState(false);

  const _getCategory = async () => {
    setLoading(true);
    const response = await config.get("/fee-assessment-categories");
    dispatch({
      type: SET_CATEGORY,
      payload: response.data,
    });
    setLoading(false);
  };

  useEffect(() => {
    _getCategory();
  }, []);

  return [isLoadingCategory];
}
