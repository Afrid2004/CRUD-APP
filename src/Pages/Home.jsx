import React from 'react'
import PageTitle from '../Components/Helmet'

const Home = () => {
  return (
    <>
      <PageTitle title='CRUD APP' />
      <div className='container'>
        <h1>
          Modern Book Management Application
        </h1>
        <p>
          In today’s digital world, managing information efficiently is more important than ever. With this idea in mind, the Book Management Application has been developed using React and Redux Toolkit to provide a smooth, fast, and user-friendly experience. This application allows users to manage their book collection easily from a single platform.
          <br />
          On the Home page, users can view a well-organized list of all available books. Each book is displayed with essential details such as the book title, author name, and other relevant information. Thanks to Redux Toolkit, state management in the application is highly optimized, making data handling more predictable and easier to maintain.
          <br />
          The application provides full CRUD functionality. Users can add new books through a simple and intuitive Add Book form. Once a book is added, it instantly appears in the list without reloading the page. If a book is no longer needed, users can quickly remove it using the Delete Book option.
          <br />
          Another powerful feature of this app is the ability to Update Book information. Users can edit existing book details to correct mistakes or add updated information. Redux Toolkit’s slices, reducers, and asynchronous actions ensure that every change is reflected in the application state in real time.
          <br />
          Overall, this Book Management App is not just a simple book list—it is a modern, scalable, and efficient solution that demonstrates the power of React and Redux Toolkit in building real-world web applications.
        </p>
      </div>
    </>
  )
}

export default Home