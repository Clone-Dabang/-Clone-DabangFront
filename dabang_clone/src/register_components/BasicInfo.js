import React, { useEffect, useState, useRef } from "react";
import { Grid, Text } from "../components/Styles";
import { useDispatch, useSelector } from "react-redux";
import "./BasicInfo.css";
import { format } from "date-fns";
import { enGB } from "date-fns/locale";
import { DatePickerCalendar } from "react-nice-dates";
import "react-nice-dates/build/style.css";
import { createBasicInfo } from "../redux/modules/room";

const BasicInfo = () => {
  const dispatch = useDispatch();
  const [pyeong, setPyeong] = useState("");
  const [m_square, setM_square] = useState("");
  const [floor, setFloor] = useState(null);

  const today = new Date();
  const [date, setDate] = useState(today);
  const [showDate, setShowDate] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const pyeongInput = useRef(null);
  const mSquareInput = useRef(null);

  // 캘린더 날짜 클릭 시 모달창 닫히도록...
  useEffect(() => {
    setShowCalendar(false);
  }, [date]);

  useEffect(() => {
    dispatch(
      createBasicInfo({
        building_area: m_square,
        floor: parseInt(floor),
        moving_date: format(date, "yyyy-MM-dd", { locale: enGB }),
      })
    );
  }, [m_square, floor, date]);

  // useEffect로 값을 불러오면 최초 state 생성때 한번 값을 불러오기 때문에 input value가 처음부터 0으로 설정되어있음 -> 0도 없애고 싶었음
  // 그래서 useEffect는 사용하기를 포기...
  // useEffect(() => {
  //   if (!pyeongInput.current.value) {
  //     pyeongInput.current.value = "1";
  //   } else {
  //     pyeongInput.current.value = m_square / 3.306;
  //   }
  // }, [m_square]);

  // useEffect(() => {
  //   mSquareInput.current.value = pyeong * 3.306;
  // }, [pyeong]);

  // input 값이 변할때마다 함수를 불러오기로 함.
  // input 값을 지웠을때는 또 0으로 설정이 되기때문에 강제로 "" 빈칸으로 되도록 조건 분기함.
  const calcPyeong = (value) => {
    if (value) {
      pyeongInput.current.value = value / 3.306;
    } else {
      pyeongInput.current.value = "";
    }
  };

  const calcMSquare = (value) => {
    if (value) {
      mSquareInput.current.value = value * 3.306;
      setM_square(value * 3.306);
    } else {
      mSquareInput.current.value = "";
    }
  };

  return (
    <React.Fragment>
      <Grid
        id="basicInfo"
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
          기본 정보
        </Text>

        <Grid>
          <table>
            <colgroup>
              <col width="150px" />
              <col />
            </colgroup>
            <tbody>
              <tr>
                <th>
                  <p>건물 크기</p>
                  <span>(1P = 3.3058㎡)</span>
                </th>
                <td>
                  <div className="styled__Wrap-wlma5f-0 nIpBu">
                    <p className="styled__SubTitle-wlma5f-5 boOTqL">
                      공급 면적
                    </p>
                    <div className="styled__SizeInputWrap-wlma5f-7 bSHhTa">
                      <input
                        name="provisionSizePyeong"
                        className="styled__Input-wlma5f-2 jkqspU"
                        // placeholder=""
                        // defaultValue=""
                        onInput={(e) => {
                          e.target.value = e.target.value
                            .replace(/[^0-9.]/g, "")
                            .replace(/(\..*)\./g, "$1");
                          setPyeong(e.target.value);
                          calcMSquare(e.target.value);
                        }}
                        ref={pyeongInput}
                      />
                      <p className="styled__Space-wlma5f-3 kBhohh">평</p>
                      <input
                        name="provisionSize"
                        className="styled__Input-wlma5f-2 jkqspU"
                        // placeholder=""
                        // value=""
                        onInput={(e) => {
                          e.target.value = e.target.value
                            .replace(/[^0-9.]/g, "")
                            .replace(/(\..*)\./g, "$1");
                          setM_square(e.target.value);
                          calcPyeong(e.target.value);
                        }}
                        ref={mSquareInput}
                      />
                      <p className="styled__Space-wlma5f-3 kBhohh">㎡</p>
                    </div>
                  </div>
                </td>
                <th>해당 층수</th>
                <td>
                  <div className="styled__Wrap-wlma5f-0 nIpBu">
                    <p className="styled__SubTitle-wlma5f-5 boOTqL">
                      해당 층수
                    </p>
                    <select
                      name="buildingFloor"
                      width="170"
                      className="styled__Select-wlma5f-1 gwaqis"
                      onChange={(e) => {
                        setFloor(e.target.value);
                      }}
                    >
                      <option value="">해당 층수 선택</option>
                      <option value="1">1층</option>
                      <option value="2">2층</option>
                      <option value="3">3층</option>
                      <option value="4">4층</option>
                      <option value="5">5층</option>
                      <option value="6">6층</option>
                      <option value="7">7층</option>
                      <option value="8">8층</option>
                      <option value="9">9층</option>
                      <option value="10">10층</option>
                    </select>
                  </div>
                </td>
              </tr>
              <tr>
                <th>입주 가능일</th>
                <td colSpan="3">
                  <div className="styled__Wrap-wlma5f-0 nIpBu">
                    <button
                      className="styled__MoveDate-wlma5f-9 czmmBl"
                      onClick={() => {
                        setShowCalendar(true);
                        setShowDate(true);
                      }}
                    >
                      날짜 선택
                    </button>
                    <p>
                      {showDate && format(date, "yyyy.MM.dd", { locale: enGB })}
                    </p>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </Grid>
      </Grid>
      {showCalendar && (
        <div id="calendarModal">
          <DatePickerCalendar
            date={date}
            onDateChange={setDate}
            locale={enGB}
          />
          <div id="btn_cont">
            <button
              onClick={() => {
                setShowCalendar(false);
              }}
            >
              닫 기
            </button>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default BasicInfo;
