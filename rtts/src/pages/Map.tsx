import { useEffect } from "react";
function Map(props:any) {
    /* navigator.geolocation.getCurrentPosition((obj)=>{
        console.log(obj.coords.latitude, obj.coords.longitude)
      }) */

    const lat = props.lat
    const lon = props.lon
    const { kakao }: any = window
    useEffect(function () {
        const container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
        const options = { //지도를 생성할 때 필요한 기본 옵션
            center: new kakao.maps.LatLng(lat, lon), //지도의 중심좌표.
            level: 2 //지도의 레벨(확대, 축소 정도)
        };
        const map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
    },)
    return (
        <div id="map" style={{ width: '300px', height: '500px', margin: 'auto' }}></div>
    )

}
export default Map