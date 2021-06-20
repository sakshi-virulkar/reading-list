import React, { useContext } from 'react'
import { BookContext } from '../contexts/BookContext'
import BookDetails from './BookDetails'


function BookList() {
    const {books} = useContext(BookContext)

    return (books.length) ? (
        <div className = "book-list">
            <ul>
            {books.map(book => (<li key = {book.id}><BookDetails book = {book} id = {book.id} /></li>))}
            </ul>
            
        </div>
    ) : (
        <div className = "empty">
            no books to read
        </div>
    ) 

}

export default BookList
