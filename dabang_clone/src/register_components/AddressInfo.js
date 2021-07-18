import React, { useEffect, useState } from "react";
import { Grid, Text } from "../components/Styles";
import { useDispatch, useSelector } from "react-redux";
import "./AddressInfo.css";

const { kakao, daum } = window;
var execDaumPostcode;

const AddressInfo = () => {
  const [jibun_address, setJibun] = useState("");
  const [road_address, setRoad] = useState("");

  useEffect(() => {
    var mapContainer = document.getElementById("staticMap"), // 지도를 표시할 div
      mapOption = {
        center: new daum.maps.LatLng(37.537187, 127.005476), // 지도의 중심좌표
        level: 5, // 지도의 확대 레벨
      };

    //지도를 미리 생성
    var map = new daum.maps.Map(mapContainer, mapOption);
    //주소-좌표 변환 객체를 생성
    var geocoder = new daum.maps.services.Geocoder();
    //마커를 미리 생성
    var marker = new daum.maps.Marker({
      position: new daum.maps.LatLng(37.537187, 127.005476),
      map: map,
    });

    execDaumPostcode = () => {
      new daum.Postcode({
        oncomplete: function (data) {
          var addr = data.address; // 최종 주소 변수
          setJibun(data.jibunAddress);
          setRoad(data.roadAddress);

          // 주소 정보를 해당 필드에 넣는다.
          document.getElementById("daumAddressInput").value = addr;
          // 주소로 상세 정보를 검색
          geocoder.addressSearch(data.address, function (results, status) {
            // 정상적으로 검색이 완료됐으면
            if (status === daum.maps.services.Status.OK) {
              var result = results[0]; //첫번째 결과의 값을 활용

              // 해당 주소에 대한 좌표를 받아서
              var coords = new daum.maps.LatLng(result.y, result.x);
              // 지도를 보여준다.
              mapContainer.style.display = "block";
              map.relayout();
              // 지도 중심을 변경한다.
              map.setCenter(coords);
              // 마커를 결과값으로 받은 위치로 옮긴다.
              marker.setPosition(coords);
            }
          });
        },
      }).open();
    };
  }, []);

  return (
    <React.Fragment>
      <Grid
        width="100%"
        margin="0 0 50px 0"
        border-radius="4px"
        box-shadow="rgb(0 0 0 / 5%) 0px 1px 5px 0px"
        border="1px solid rgb(226, 226, 226)"
        background-color="rgb(255, 255, 255)"
        justifyContent="center"
        flexDirection="column"
      >
        <Text
          type="title"
          height="60px"
          color="rgb(34, 34, 34)"
          fontSize="18px"
          lineHeight="60px"
          borderBottom="1px solid rgb(204, 204, 204)"
          position="relative"
          fontWeight="700"
          width="100%"
        >
          위치 정보
          <span>*등기부등본 상의 주소를 입력해 주세요.</span>
        </Text>

        <Grid>
          <table>
            <colgroup>
              <col width="150px" />
              <col />
            </colgroup>
            <tbody>
              <tr>
                <th>주소</th>
                <td>
                  <div>
                    <div>
                      <p
                        style={{
                          display: "flex",
                          alignItems: "center",
                          height: "20px",
                          color: "rgb(136, 136, 136)",
                          fontSize: "14px",
                          lineHeight: "20px",
                          userSelect: "none",
                        }}
                      >
                        <svg width="18" height="18" viewBox="0 0 18 18">
                          <g fill="none" fill-rule="evenodd">
                            <circle cx="9" cy="9" r="9" fill="#E6E7EA"></circle>
                            <path
                              fill="#9C9EA3"
                              d="M8.997 13.5a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5zm.01-2.499c-.634 0-.75-5.449-.75-6.001 0-.552.336-1 .75-1s.75.448.75 1-.116 6.001-.75 6.001z"
                            ></path>
                          </g>
                        </svg>
                        <span>
                          도로명, 건물명, 지번에 대해 통합검색이 가능합니다.
                        </span>
                      </p>
                      <form>
                        <input
                          id="daumAddressInput"
                          type="text"
                          name="keyword"
                          placeholder="예)번동 10-1, 강북구 번동"
                          value=""
                          autoComplete="off"
                        />
                        <input
                          type="button"
                          onClick={() => {
                            execDaumPostcode();
                          }}
                          value="주소 검색"
                        />
                      </form>
                      <div>
                        <p>
                          <span>도로명:</span>
                          {road_address}
                        </p>
                        <p>
                          <span>지&nbsp;&nbsp;&nbsp;&nbsp;번:</span>
                          {jibun_address}
                        </p>
                      </div>
                    </div>
                    <div
                      id="staticMap"
                      style={{
                        width: "440px",
                        height: "330px",
                      }}
                    ></div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default AddressInfo;
