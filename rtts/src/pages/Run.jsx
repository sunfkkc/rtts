import React, { ReactEventHandler, useEffect, useState, useRef } from "react";
import Map from "./Map";
import styles from "./Run.module.css";
import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai";
import { BsStopCircle } from "react-icons/bs";
import { clearWatch, getPosition, getWatchPosition } from "../util/getPosition";
import { getDistance } from "../util/getDistance";
import Running10m from "./Running10m";

function Run() {
  let posArray = new Array();
  const [controler, setControler] = useState(false);
  const [time, setTime] = useState(0);
  const [dist, setDist] = useState(0);
  const [speed, setSpeed] = useState(0);
  const [position, setPosition] = useState([
    {
      latitude: 35.1768,
      longitude: 126.9098,
    },
  ]);

  const [running10mData, setRunning10mData] = useState([]);
  const timeRecord = useRef(null);
  const geoRecord = useRef(null);

  const getCurrentPosition = async (e) => {
    const {
      coords: { latitude, longitude },
    } = await getPosition();
    setPosition((prev) => [...prev, { latitude, longitude }]);
    console.log("current Position : ", latitude, longitude);
  };
  useEffect(() => {
    getCurrentPosition();
  }, []);
  useEffect(() => {
    if (controler) {
      let tr = setInterval(() => {
        setTime((time) => time + 1);
      }, 1000);
      return () => {
        setPosition([
          {
            latitude: 35.1768,
            longitude: 126.9098,
          },
        ]);
        setTime(0);
        setDist(0);
        setSpeed(0);
        clearInterval(tr);
      };
    }
  }, [controler]);

  const getStart = function (e) {
    setControler(true);
    geoRecord.current = navigator.geolocation.watchPosition((success) => {
      console.log("watchposition");
      console.log(new Date());
      const { latitude, longitude } = success.coords;
      setPosition((prev) => [...prev, { latitude, longitude }]);
      console.log(position);
      console.log(position.length);
    });
    /* let time = 0;
    timeRecord.current = setInterval(async () => {
      time += 1;
      setRunData({ ...runData, time });
      getCurrentPosition();
      setPosArray(posArray.concat(position));
      console.log("posarray : " + posArray.length);
      if (posArray.length > 1) {
        setRunData({
          ...runData,
          dis:
            runData.dis +
            getDistance(
              posArray[posArray.length - 1],
              posArray[posArray.length - 2]
            ),
        });
        setRunData({
          ...runData,
          speed: runData.dis / runData.time,
        });

        console.log("setrundata : " + runData);
      }
      if (time % 60 === 0) {
        if (running10mData.length === 0) {
          setRunning10mData(running10mData.concat(runData));
        } else {
          setRunning10mData(
            running10mData.concat({
              ...runData,
              dis: runData.dis - running10mData[running10mData.length - 1].dis,
              speed:
                (runData.dis - running10mData[running10mData.length - 1].dis) /
                60,
            })
          );
        }
      }
    }, 1000); 
    const options = {
      enableHighAccuracy: true,
    };
    geoRecord.current = navigator.geolocation.watchPosition(
      (success) => {
        console.log("watchposition");
        const { latitude, longitude } = success.coords;
        setPosition({ latitude, longitude });  
      setPosArray(posArray.concat(position));
      console.log("posarray : " + posArray.length);
      if (posArray.length > 1) {
        setRunData({
          ...runData,
          dis:
            runData.dis +
            getDistance(
              posArray[posArray.length - 1],
              posArray[posArray.length - 2]
            ),
        });
        setRunData({
          ...runData,
          speed: runData.dis / runData.time,
        });

        console.log("setrundata : " + runData);
      }
      if (time % 60 === 0) {
        if (running10mData.length === 0) {
          setRunning10mData(running10mData.concat(runData));
        } else {
          setRunning10mData(
            running10mData.concat({
              ...runData,
              dis: runData.dis - running10mData[running10mData.length - 1].dis,
              speed:
                (runData.dis - running10mData[running10mData.length - 1].dis) /
                60,
            })
          );
        }
      }
      },
      (err) => {
        console.log(err);
      },
      options
    );*/
    /*     const {
      coords: { latitude, longitude },
    } = await getWatchPosition();

    setPosition();
    setPosition({ latitude, longitude }); */
  };
  const getPause = function () {};
  const getStop = function () {
    setControler(false);
    clearInterval(timeRecord.current);
    navigator.geolocation.clearWatch(geoRecord.current);
  };
  /*   useEffect(() => {
    let time = 0;
    let timeRecord = setInterval(() => {
      time += 1;
      setRunData({ ...runData, time });
    }, 1000);
    return () => clearInterval(timeRecord);
  }, [controler]); */
  const speed10mArray = [200, 300, 400, 500];
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
              <td>{dist}km</td>
              <td>{speed}m/s</td>
              <td>{time}초</td>
            </tr>
          </tbody>
        </table>
      </div>
      <Map
        latitude={position[position.length - 1].latitude}
        longitude={position[position.length - 1].longitude}
        record={controler}
        positionArray={position}
      />
      <div className={styles.controler}>
        {/* <button onClick={getCurrentPosition}>현재 위치</button> */}
        {!controler ? (
          <AiFillPlayCircle size="2.5rem" onClick={getStart} />
        ) : (
          <>
            <AiFillPauseCircle size="2.5rem" onClick={getPause} />
            <BsStopCircle size="2.5rem" onClick={getStop} />
          </>
        )}
      </div>
      <Running10m speed10mArray={speed10mArray} />
    </>
  );
}

export default React.memo(Run);
