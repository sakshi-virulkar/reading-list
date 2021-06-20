import React, { useContext, useState } from 'react'
import { BookContext } from '../contexts/BookContext'

function BookForm() {
    const [title,setTitle] = useState('')
    const [author,setAuthor] = useState('')
    const {addBook} = useContext(BookContext)
    const handleSubmit = (e) => {
        e.preventDefault()
        if(title !== '' && author !== '')  addBook(title, author)
        setTitle('') 
        setAuthor('')
    }

    return (
        <div >
            <form onSubmit = {handleSubmit} className = 'book-form'>
              <input type="text" name="title" id="title" placeholder = "book title" value = {title}
                onChange = {(e) => {setTitle(e.target.value)}}/>
              <input type="text" name="author" id="author" placeholder = "book author" value = {author}
                onChange = {(e) => {setAuthor(e.target.value)}} />
              <input type="submit" value="Add Book" id = "submit"/>
            </form>
        </div>
    )
}
 

export default BookForm
