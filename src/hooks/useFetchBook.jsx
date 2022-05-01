import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { SET_BOOK } from '../store/actionTypes'
import config from '../api/base';

export default function useFetchBook() {
    const dispatch = useDispatch()
    const [isLoadingBook, setLoading] = useState(false);
    const [categoryId, setCategoryId] = useState(1)
    const [page, setPage] = useState(0)
    const [pageSize, setPageSize] = useState(10)

    const _getBook = async () => {
        setLoading(true);
        const response = await config.get(`/fee-assessment-books?categoryId=${categoryId}&page=${page}&size=${pageSize}`)
        dispatch({
            type: SET_BOOK,
            payload: response.data
        })
        setLoading(false);
    }

    useEffect(() => {
        _getBook()
    }, [categoryId, page, pageSize])
    
    return [isLoadingBook, setCategoryId, setPage, page, pageSize, setPageSize]; 
    
}