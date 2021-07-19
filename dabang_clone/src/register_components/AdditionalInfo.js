import React, { useEffect, useState } from "react";
import { Grid, Text } from "../components/Styles";
import { useDispatch, useSelector } from "react-redux";
import "./AdditionalInfo.css";

const AdditionalInfo = () => {
  const [parkingPossibility, setParkingPossibility] = useState(false);

  return (
    <React.Fragment>
      <Grid
        id="additionalInfo"
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
          추가 정보
        </Text>

        <Grid>
          <table>
            <colgroup>
              <col width="150px" />
              <col />
            </colgroup>
            <tbody>
              <tr>
                <th>관리비</th>
                <td colSpan="3">
                  <div className="styled__Wrap-sc-1nti3md-0 bTJwPT">
                    <input
                      name="maintenanceCost"
                      className="styled__Cost-sc-1nti3md-2 dZzEqg"
                      onInput={(e) => {
                        e.target.value = e.target.value
                          .replace(/[^0-9.]/g, "")
                          .replace(/(\..*)\./g, "$1");
                      }}
                    />
                    <p className="styled__Space-sc-1nti3md-3 ipuDqc">만원</p>
                  </div>
                </td>
              </tr>
              <tr>
                <th>주차여부</th>
                <td>
                  <div className="styled__Wrap-sc-1nti3md-0 bTJwPT">
                    <label className="styled__OptionRadio-sc-1nti3md-9 iCkZFs">
                      <input
                        type="radio"
                        name="parking"
                        defaultChecked
                        onClick={() => {
                          setParkingPossibility(false);
                        }}
                      />
                      {/* 리액트에서는 input의 기본 체크 값에 checked가 아니라 defaultChecked를 써야 정상동작함 */}
                      <p>불가능</p>
                    </label>
                    <label className="styled__OptionRadio-sc-1nti3md-9 iCkZFs">
                      <input
                        type="radio"
                        name="parking"
                        onClick={() => {
                          setParkingPossibility(true);
                          console.log(parkingPossibility);
                        }}
                      />
                      <p>가능</p>
                    </label>
                    {parkingPossibility ? (
                      <input
                        name="parkingCost"
                        className="styled__Cost-sc-1nti3md-2 dZzEqg"
                        // value=""
                        style={{ marginLeft: "10px" }}
                        onInput={(e) => {
                          e.target.value = e.target.value
                            .replace(/[^0-9.]/g, "")
                            .replace(/(\..*)\./g, "$1");
                        }}
                      />
                    ) : (
                      <input
                        name="parkingCost"
                        disabled
                        className="styled__Cost-sc-1nti3md-2 dZzEqg"
                        // value=""
                        style={{ marginLeft: "10px" }}
                        onInput={(e) => {
                          e.target.value = e.target.value
                            .replace(/[^0-9.]/g, "")
                            .replace(/(\..*)\./g, "$1");
                        }}
                        onClick={() => {
                          setParkingPossibility(true);
                        }}
                      />
                    )}
                    <p className="styled__Space-sc-1nti3md-3 ipuDqc">만원</p>
                  </div>
                </td>
                <th>반려동물</th>
                <td>
                  <div className="styled__Wrap-sc-1nti3md-0 bTJwPT">
                    <label className="styled__OptionRadio-sc-1nti3md-9 iCkZFs">
                      <input type="radio" name="animal" defaultChecked />
                      <p>불가능</p>
                    </label>
                    <label className="styled__OptionRadio-sc-1nti3md-9 iCkZFs">
                      <input type="radio" name="animal" />
                      <p>가능</p>
                    </label>
                  </div>
                </td>
              </tr>
              <tr>
                <th>엘리베이터</th>
                <td>
                  <div className="styled__Wrap-sc-1nti3md-0 bTJwPT">
                    <label className="styled__OptionRadio-sc-1nti3md-9 iCkZFs">
                      <input type="radio" name="elevator" defaultChecked />
                      <p>불가능</p>
                    </label>
                    <label className="styled__OptionRadio-sc-1nti3md-9 iCkZFs">
                      <input type="radio" name="elevator" />
                      <p>가능</p>
                    </label>
                  </div>
                </td>
                <th>베란다/발코니</th>
                <td>
                  <div className="styled__Wrap-sc-1nti3md-0 bTJwPT">
                    <label className="styled__OptionRadio-sc-1nti3md-9 iCkZFs">
                      <input type="radio" name="balcony" defaultChecked />
                      <p>불가능</p>
                    </label>
                    <label className="styled__OptionRadio-sc-1nti3md-9 iCkZFs">
                      <input type="radio" name="balcony" />
                      <p>가능</p>
                    </label>
                  </div>
                </td>
              </tr>
              <tr>
                <th>
                  빌트인
                  <div className="styled__ShowUp-sc-1nti3md-10 ezRKI">
                    <svg width="18" height="18" viewBox="0 0 18 18">
                      <g fill="none" fillRule="evenodd">
                        <circle cx="9" cy="9" r="9" fill="#CCC"></circle>
                        <g fill="#FFF" transform="translate(6 3.5)">
                          <path
                            fillRule="nonzero"
                            d="M3.11 6.728c.11-.47.352-.738 1.049-1.256l.054-.04c1.079-.804 1.502-1.359 1.502-2.468 0-1.505-1.159-2.726-2.678-2.726C1.701.238.57 1.04.224 2.132a.574.574 0 1 0 1.096.347c.192-.608.875-1.092 1.717-1.092.87 0 1.53.694 1.53 1.577 0 .644-.226.94-1.04 1.546l-.054.04c-.901.671-1.292 1.104-1.481 1.917a.574.574 0 0 0 1.119.26z"
                          ></path>
                          <circle cx="2.75" cy="9.75" r="1"></circle>
                        </g>
                      </g>
                    </svg>
                    <div className="styled__FlyBox-sc-1nti3md-11 iajGQB">
                      <h1>빌트인이란?</h1>
                      <p>
                        냉장고나 싱크대 등을 돌출시키지 않은 일체형 인테리어
                      </p>
                    </div>
                  </div>
                </th>
                <td colSpan="1">
                  <div className="styled__Wrap-sc-1nti3md-0 bTJwPT">
                    <label className="styled__OptionRadio-sc-1nti3md-9 iCkZFs">
                      <input type="radio" name="builtIn" defaultChecked />
                      <p>없음</p>
                    </label>
                    <label className="styled__OptionRadio-sc-1nti3md-9 iCkZFs">
                      <input type="radio" name="builtIn" />
                      <p>있음</p>
                    </label>
                  </div>
                </td>
                <th>구조</th>
                <td>
                  <div className="styled__Wrap-sc-1nti3md-0 bTJwPT">
                    <label className="styled__OptionCheckbox-sc-1nti3md-7 styled__OptionLargeCheckbox-sc-1nti3md-8 eXAGyI kkuWgy">
                      <input type="checkbox" name="duplex" />
                      <p>복층</p>
                    </label>
                    <label className="styled__OptionCheckbox-sc-1nti3md-7 styled__OptionLargeCheckbox-sc-1nti3md-8 eXAGyI kkuWgy">
                      <input type="checkbox" name="division" />
                      <p>1.5룸/주방분리형</p>
                    </label>
                  </div>
                </td>
              </tr>
              <tr>
                <th>옵션항목</th>
                <td colSpan="3">
                  <div
                    className="styled__Wrap-sc-1nti3md-0 bTJwPT bTJwPTT"
                    style={{ flexWrap: "wrap" }}
                  >
                    <label className="styled__OptionCheckbox-sc-1nti3md-7 eXAGyI">
                      <input type="checkbox" name="room_options" />
                      <p>인덕션</p>
                    </label>
                    <label className="styled__OptionCheckbox-sc-1nti3md-7 eXAGyI">
                      <input type="checkbox" name="room_options" />
                      <p>전자레인지</p>
                    </label>
                    <label className="styled__OptionCheckbox-sc-1nti3md-7 eXAGyI">
                      <input type="checkbox" name="room_options" />
                      <p>에어컨</p>
                    </label>
                    <label className="styled__OptionCheckbox-sc-1nti3md-7 eXAGyI">
                      <input type="checkbox" name="room_options" />
                      <p>세탁기</p>
                    </label>
                    <label className="styled__OptionCheckbox-sc-1nti3md-7 eXAGyI">
                      <input type="checkbox" name="room_options" />
                      <p>TV</p>
                    </label>
                    <label className="styled__OptionCheckbox-sc-1nti3md-7 eXAGyI">
                      <input type="checkbox" name="room_options" />
                      <p>옷장</p>
                    </label>
                    <label className="styled__OptionCheckbox-sc-1nti3md-7 eXAGyI">
                      <input type="checkbox" name="room_options" />
                      <p>침대</p>
                    </label>
                    <label className="styled__OptionCheckbox-sc-1nti3md-7 eXAGyI">
                      <input type="checkbox" name="room_options" />
                      <p>책상</p>
                    </label>
                    <label className="styled__OptionCheckbox-sc-1nti3md-7 eXAGyI">
                      <input type="checkbox" name="room_options" />
                      <p>신발장</p>
                    </label>
                    <label className="styled__OptionCheckbox-sc-1nti3md-7 eXAGyI">
                      <input type="checkbox" name="room_options" />
                      <p>비데</p>
                    </label>
                    <label className="styled__OptionCheckbox-sc-1nti3md-7 eXAGyI">
                      <input type="checkbox" name="room_options" />
                      <p>가스레인지</p>
                    </label>
                    <label className="styled__OptionCheckbox-sc-1nti3md-7 eXAGyI">
                      <input type="checkbox" name="room_options" />
                      <p>냉장고</p>
                    </label>
                    <label className="styled__OptionCheckbox-sc-1nti3md-7 eXAGyI">
                      <input type="checkbox" name="room_options" />
                      <p>전자도어락</p>
                    </label>
                  </div>
                </td>
              </tr>
              <tr>
                <th>전세자금대출</th>
                <td colSpan="3">
                  <div className="styled__Wrap-sc-1nti3md-0 bTJwPT">
                    <label className="styled__OptionRadio-sc-1nti3md-9 iCkZFs">
                      <input type="radio" name="loan" defaultChecked />
                      <p>불가능</p>
                    </label>
                    <label className="styled__OptionRadio-sc-1nti3md-9 iCkZFs">
                      <input type="radio" name="loan" />
                      <p>가능</p>
                    </label>
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

export default AdditionalInfo;
