import React, { useEffect } from 'react'
import Header from '../components/Header'
import Map from './Map'
import styles from './Run.module.css'
import { runState } from './runState'
import { useRecoilState } from 'recoil'

function Run() {
  const [runData, setRunData] = useRecoilState(runState)

  return (
    <>
      <Header />
      <div className='body'>
        <h2 className={styles.h1}>Run-Together</h2>
        <div className={styles.container}>
          <h3>주행거리</h3>{runData.dis}
          <Map />
        </div>
      </div>
    </>
  )
}

export default Run