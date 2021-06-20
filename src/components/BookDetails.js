import React, { useContext } from 'react'
import { BookContext } from '../contexts/BookContext'

function BookDetails({book, id}) {

    const {removeBook} = useContext(BookContext)

    return (
        <div className = "bookdetails" onClick = {() => removeBook(id)}>
            <div className = "title">{book.title}</div>
            <div className = "author">- {book.author}</div>
        </div>
    )
}

export default BookDetails
