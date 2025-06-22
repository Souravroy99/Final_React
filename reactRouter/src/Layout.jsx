import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
        <Header />

        <Outlet /> {/* In outlet we can dynamically change data, everything else(example: Header, Footer etc.) remains fixed */}

        <Footer />
    </>
  )
}

export default Layout