import React from 'react'
import Header from '../components/Header'
import img from '../static/bgimg.png'
function Home() {
  return (
    <>
    <Header/>
    <img src={img}/>
    </>
  )
}

export default Home