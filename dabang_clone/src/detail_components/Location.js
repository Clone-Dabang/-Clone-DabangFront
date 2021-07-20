import React, {useEffect} from 'react';
import { Grid, Text, ToggleBtn } from '../components/Styles';

const {kakao} = window;

const Location = (props) => {

    const {address_info} = props;
    const { latitude, longitude, road, original } = address_info;
     console.log(latitude,"latitude",longitude,"longitude");

    // 카카오 지도 설정 //index.html에 지도 api 키 추가해야 함
    useEffect(() => {
        const container = document.getElementById('detailMap');
		const options = {
			center: new kakao.maps.LatLng( latitude, longitude ),
			level: 3
		};
        const map = new kakao.maps.Map(container, options);

        const markerPosition = new kakao.maps.LatLng(latitude,longitude);
        const marker = new kakao.maps.Marker({
            position: markerPosition
        });
        marker.setMap(map);
    }, []);

    // 지번,도로명 주소 토글
    const [adress,toggleAdress] = React.useState(false);

    return (
        <Grid borderTop="1px solid rgb(221, 221, 221)"
        padding="120px 0" flexDirection="column"
        justifyContent="center"
        id="location">
            <Text
                color="rgb(34, 34, 34)"
                fontSize="28px"
                fontWeight="400"
                lineHeight="41px"
                >위치</Text>
            <Text
                margin="3px 0px 29px"
                color="rgb(102, 102, 102)"
                fontSize="15px"
                lineHeight="22px"
                >

                {!adress && (
                <>
                {original} &nbsp;
                <ToggleBtn onClick={()=>toggleAdress(true)}>⇆ 도로명</ToggleBtn>
                </>
                )}

                {adress && (
                <>
                {road} &nbsp;
                <ToggleBtn onClick={()=>toggleAdress(false)}>⇆ 지번</ToggleBtn>
                </>
                )}
               </Text>
            
            {/* 지도 컨테이너*/}
            <Grid id="detailMap" display="block"
             width="850px" height="400px" margin="0 0 120px 0">

            </Grid>

        </Grid>
    );
};

export default Location;