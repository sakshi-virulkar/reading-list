import React, { createContext, useEffect, useState } from "react"
import { v4 as uuidv4 } from 'uuid';

export const BookContext = createContext();
const LOCAL_STORAGE_KEY = 'reading_list.books'
const BookContextProvider = (props) => {
    const [books, setBooks] = useState([])

    useEffect(() => {
        const newBooks = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY,books))
        setBooks(newBooks)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[] )


    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(books))
    },[books] )

    const addBook = (title, author) => {
        setBooks([...books, {title, author, id : uuidv4()}])
    }
    const removeBook = (id) => {
        setBooks(books.filter(book => book.id !== id))
    }

    return(
        <BookContext.Provider value = {{books, addBook, removeBook}}>
            {props.children}
        </BookContext.Provider>
    )
}


export default BookContextProvider