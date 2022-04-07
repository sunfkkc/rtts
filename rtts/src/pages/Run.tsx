import React, { useEffect } from 'react'
import Map from './Map'
import styles from './Run.module.css'
import { runState } from './runState'
import { useRecoilState } from 'recoil'

function Run() {
  const [runData, setRunData] = useRecoilState(runState)

  return (
    <>
      <div className={styles.center}>
        <table className={styles.runState}>
          <thead>
            <tr>
              <th>누적 거리</th>
              <th>현재 속도</th>
              <th>누적 시간</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{runData.dis}km</td>
              <td>{runData.speed}m/s</td>
              <td>{runData.time}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <Map />
    </>
  )
}

export default Run