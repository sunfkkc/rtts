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
  const timeRef = useRef(0)
  useEffect(()=>{
    setInterval(()=>{
      setRunData(prev=>({
        ...prev,
        time:timeRef.current += 1
      }))
    },1000)
  },[])
  /* const startTime = setInterval(
    function(){
      count += 1
      setRunData((prev) => ({
        ...prev,
        time:count,
      }))
    },1000
  )  */
  const getStart = function(e:React.MouseEvent){
    setControler(true)/* 
    count = 1
    setRunData(prev=>({
      ...prev,
      time:count
    }))
    console.log(runData.time) */
  }
  const getPause = function(){

  }
  const getStop = function() {
    setControler(false)
    //clearInterval(startTime)
  }
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
      <div className={styles.controler}>
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