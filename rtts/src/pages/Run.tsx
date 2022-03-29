import React,{useEffect}  from 'react'
import Header from '../components/Header'
import styles from './Run.module.css'
function Run() {
    const {kakao}:any = window
    useEffect(function(){
        const container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
        const options = { //지도를 생성할 때 필요한 기본 옵션
            center: new kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
            level: 3 //지도의 레벨(확대, 축소 정도)
        };
        
        const map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
    })
  return (
    <>
      <Header />
      <div className='body'>
        <h2 className={styles.h1}>Run-Together</h2>
        <div className={styles.container}>
        <div id="map" className={styles.map}></div>
        </div>
      </div>
    </>
  )
}

export default Run