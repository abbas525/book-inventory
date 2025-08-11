import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavbarMain from './components/Navbar';
import MoviesGrid from './components/MoviesGrid';
import HeaderCarousel from './components/HeaderCarousel';
import { Col, Container, Row } from 'react-bootstrap';
import SingleCard from './components/SingleCard';
import CardsRow from './components/cards/CardsRow';
import DetailPage from './BookDetail';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import BookDetail from './BookDetail';
import AddBook from './components/AddBook';
import { useDataContext } from './api/dataContext';
import AllBooks from './AllBooks';

function App() {
const { books } = useDataContext()

  return (
    <div id='App'>
     
      <header>
        <NavbarMain /> 
      </header>

      <main>
      <BrowserRouter>
        <Routes>
            <Route index path='/' element={<HomePage books={books}/>}></Route>
            <Route path='/add-book' element={<AddBook />}></Route>
            <Route path='/books/:slug' element={<BookDetail />}></Route>
            <Route path='/all-books' element={<AllBooks />}></Route>
        </Routes>
      </BrowserRouter>

        
      </main>



    </div>
  )
}

export default App
