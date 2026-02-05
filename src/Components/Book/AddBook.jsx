import React, { useState } from 'react'
import PageTitle from '../Helmet'
import {v4 as uuidv4} from 'uuid'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { addbook } from '../../Features/BookSlice';

const AddBook = () => {
  const [bookName, setBookName] = useState('');
  const [bookAuthor, setBookAuthor] = useState('');
  const Navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!bookName.trim() || !bookAuthor.trim()) return;
    const newBook = {id : uuidv4(), bookName: bookName, bookAuthor: bookAuthor};
    dispatch(addbook(newBook));
    Navigate("/view-book", {replace : true});
  }

  return (
    <>
      <PageTitle title="Add Book" />
      <div>
        <h1>Add book</h1>
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
    </>
  )
}

export default AddBook