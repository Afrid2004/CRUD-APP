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
    if(!bookName.trim() || !bookAuthor.trim()) return;
    dispatch(editbook({id, bookName, bookAuthor}));
    Navigate('/view-book', {replace : true});
  }

  return (
      <div className='container'>
        <PageTitle title='Edit Book' />
        <h1 className='text-center mb-3'>Edit book</h1>
        <div className="d-flex justify-center">
          <form onSubmit={handleSubmit}>
            <div className='mb-3'>
              <label htmlFor="bookname" className='inputlabel'>
                <i class="fi fi-rr-book-alt"></i>
                <p>Book Name</p>
              </label>
              <input onChange={(e) => {setBookName(e.target.value)}} value={bookName} type="text" name='bookname' id='bookname' placeholder='Enter A Book Name' required />
            </div>
            <div className='mb-3'>
              <label className='inputlabel' htmlFor="authorname">
                <i class="fi fi-rr-user-writer"></i>
                <p>Author Name</p>
              </label>
              <input onChange={(e) => {setBookAuthor(e.target.value)}} value={bookAuthor} type="text" name='authorname' id='authorname' placeholder='Enter Author Name' required />
            </div>
            <button type='submit' className="btn">
              Edit Book
            </button>
          </form>
        </div>
      </div>
  )
}

export default EditBook