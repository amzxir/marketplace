import React from 'react'
import Header from './header/header'
import Footer from './footer/footer'

export default function Layout({children}) {
  return (
    <>
        <Header/>
            <div>{children}</div>
        <Footer/>
    </>
  )
}
