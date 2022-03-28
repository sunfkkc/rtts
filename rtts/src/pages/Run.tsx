import React from 'react'
import Header from '../components/Header'
import styles from './Run.module.css'
import { Wrapper, Status } from "@googlemaps/react-wrapper";
function Run() {
  return (
    <>
      <Header />
      <div className='body'>
        <h1 className={styles.h1}>Run-Together</h1>
        <div className={styles.container}>
        </div>
      </div>
    </>
  )
}

export default Run