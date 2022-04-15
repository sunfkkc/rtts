import React, { ReactEventHandler, useEffect, useState , useRef} from 'react'
import Map from './Map'
import styles from './Run.module.css'
import { runState } from './runState'
import { useRecoilState } from 'recoil'
import {AiFillPlayCircle, AiFillPauseCircle, } from 'react-icons/ai'
import {BsStopCircle} from 'react-icons/bs'
import { Prev } from 'react-bootstrap/esm/PageItem'


function Run() {
  //const [runData, setRunData] = useRecoilState(runState)
  const [controler, setControler] = useState<boolean>(false)
  const [runData, setRunData] = useState({
    dis:0,
    speed:0,
    time:0,
  })
  const [position, getPosition] = useState({
    lat:0,
    lon:0,
  })
  const getStart = function(e:React.MouseEvent){
    setControler(true)
  }
  const getPause = function(){

  }
  const getStop = function() {
    setControler(false)
  }

   const  getCenter=  navigator.geolocation.getCurrentPosition((obj)=>{
      getPosition({
        lat:obj.coords.latitude,
        lon:obj.coords.longitude
      })
      }) 

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
      <Map lat={position.lat} lon={position.lon}/>
      <div className={styles.controler}>
        <button>현재 위치</button>
        { !controler? (<AiFillPlayCircle size="2.5rem" onClick={getStart}/>) : (
          <>
          <AiFillPauseCircle size="2.5rem" onClick={getPause}/> 
          <BsStopCircle size="2.5rem" onClick={getStop}/>
          </>
        )}
          
      </div>
    </>
  )
}

export default Run