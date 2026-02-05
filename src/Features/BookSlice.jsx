import { createSlice } from "@reduxjs/toolkit";
import {v4 as uuidv4} from 'uuid'

const initialBooks = {
  books: [
    { 
      id : uuidv4(),
      bookName : "Amar Bangladesh",
      bookAuthor : "Afrid"
    },
    { 
      id : uuidv4(),
      bookName : "Republic of Bangladesh",
      bookAuthor : "Afrid"
    },
  ]
}

export const BookSlice = createSlice({
  name: "books",
  initialState : initialBooks,
  reducers: {
    viewBook : (state) => state,
    addbook : (state, action) => {
      state.books.push(action.payload);
    },
    editbook : (state, action) => {
      const {id, bookName, bookAuthor} = action.payload;
      const isExists = state.books.find((book) => {return book.id === id});
      if(isExists){
        isExists.bookName = bookName;
        isExists.bookAuthor = bookAuthor;
      }
    },
    deleteBook : (state,action) => {
      const filterdBooks = state.books.filter((book) => { return book.id !== action.payload});
      state.books = filterdBooks;
    }
  }
});

export const {viewBook, addbook, deleteBook, editbook} = BookSlice.actions;

export default BookSlice.reducer;