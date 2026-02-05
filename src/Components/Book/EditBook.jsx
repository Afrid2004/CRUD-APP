import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router'
import { editbook } from '../../Features/BookSlice';
import PageTitle from '../Helmet';

const EditBook = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const [id, setId] = useState(location.state.id);
  const [bookName, setBookName] = useState(location.state.bookName);
  const [bookAuthor, setBookAuthor] = useState(location.state.bookAuthor);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editbook({id, bookName, bookAuthor}));
    Navigate('/view-book', {replace : true});
  }

  return (
      <div>
        <PageTitle title='Edit Book' />
        <h1>Edit book</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="bookname">Book Name</label>
            <input onChange={(e) => {setBookName(e.target.value)}} value={bookName} type="text" name='bookname' id='bookname' placeholder='Enter A Book Name' required />
          </div>
          <div>
            <label htmlFor="authorname">Author Name</label>
            <input onChange={(e) => {setBookAuthor(e.target.value)}} value={bookAuthor} type="text" name='authorname' id='authorname' placeholder='Enter Author Name' required />
          </div>
          <button type='submit' className="btn">
            Add Book
          </button>
        </form>
      </div>
  )
}

export default EditBook