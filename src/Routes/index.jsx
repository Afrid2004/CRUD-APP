import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from '../Pages/Home'
import ErrorPage from '../Pages/404'
import Navbar from '../Layouts/Navbar'
import BookView from '../Components/Book/BookView'
import AddBook from '../Components/Book/AddBook'
import EditBook from '../Components/Book/EditBook'
import Footer from '../Layouts/Footer'

const Index = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/view-book' element={<BookView />} />
        <Route path='/add-book' element={<AddBook />} />
        <Route path='/edit-book' element={<EditBook />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default Index