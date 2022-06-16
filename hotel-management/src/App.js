import React, { useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Footer from './components/footer/Footer'

// components
import Navbar from './components/navbar/Navbar'
import BookStay from './pages/book-stay/BookStay'
import Events from './pages/events/Events'

// screens
import Home from './pages/home/Home'
import Offers from './pages/offers/Offers'
import Search from './pages/search/Search'
import SignIn from './pages/sign-in/SignIn'

const App = () => {

  const navigate = useNavigate();

  useEffect(() => {
    navigate('/sign-in');
  }, []);
  return (
    <>
      <Routes>
        <Route path='/sign-in' element={<SignIn />} />
        
        <Route path='/' element={
          <>
            <Navbar />
            <Home />
          </>
        } />
        <Route path='/events' element={
          <>
            <Navbar />
            <Events />
          </>} />
        <Route path='/offers' element={
          <>
            <Navbar />
            <Offers />
          </>} />
        <Route path='/check-members' element={
          <>
            <Navbar />
            <Search
              title={"Member's verification"}
              place={'Enter name here...'}
            />
          </>} />
        <Route path='/check-reservations' element={
          <>
            <Navbar />
            <Search
              title={"Reservation's verification"}
              place={'Enter reservation id...'}
            />
          </>} />
        <Route path='/book-stay' element={
          <>
            <Navbar />
            <BookStay />
          </>} />
      </Routes>

      <Footer />
    </>
  )
}

export default App