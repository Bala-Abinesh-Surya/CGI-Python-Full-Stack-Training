import { useState } from "react"
import { connect } from "react-redux"

function Book({books, addNewBook}){
    const [bookName, setBookName] = useState('')

    const handleInputChange = (event) => {
        setBookName(event.target.value)
    }

    const formSubmit = (event) => {
        event.preventDefault()

        addNewBook(bookName)
        setBookName('')
    }

    return (
        <div className="col-md-6 offset-md-3">
            <h3 className="text-center m-4">Add a new book</h3>
            <form className="text-center mt-4" onSubmit={formSubmit}>
                <input 
                    type='text'
                    placeholder="Enter a book name"
                    value={bookName}
                    onChange={handleInputChange}
                    required
                />
                <button type="submit">Add</button>
            </form>

            <h6 className="mt-4">All Books</h6>
            {books.length != 0 ? (
                <ul>{books.map((book) => <li>{book}</li>)}</ul>
            ) : <p>No books added yet</p>}
        </div>
    )
}

const bindProps = (state) => ({books: state.books})

const bindActions = (dispatch) => ({
    addNewBook: (book) => dispatch({type: 'ADD_BOOK', newBook: book})
})

export default connect(
    bindProps,
    bindActions
)(Book)