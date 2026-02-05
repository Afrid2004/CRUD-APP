import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PageTitle from '../Helmet';
import { deleteBook } from '../../Features/BookSlice';
import { Link } from 'react-router';

const BookView = () => {
  const books = useSelector((state) => state.BookReducer.books);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    console.log(id);
    dispatch(deleteBook(id));
  }

  return (
    <div>
      <PageTitle title="View Book" />
      <h1>Book View Page</h1>
          <div>
            <table>
              <thead>
                <tr>
                  <th>Book Name</th>
                  <th>Book Author</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {books.map((book) => {
                  const {id, bookName, bookAuthor} = book;
                  return(
                    <tr key={id}>
                      <td>{bookName}</td>
                      <td>{bookAuthor}</td>
                      <td className='d-flex gap-2 flex-wrap'>
                        <Link to='/edit-book' state={{id, bookName, bookAuthor}}>
                          <button className="btn">Edit Book</button>
                        </Link>
                        <button onClick={() => {handleDelete(id)}} className="btn">Delete Book</button>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
    </div>
  )
}

export default BookView