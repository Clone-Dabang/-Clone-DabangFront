import React, { useEffect, useState } from "react";
import { Grid, Text } from "../components/Styles";
import { useDispatch, useSelector } from "react-redux";
import "./SaleInfo.css";
import { createSaleInfo } from "../redux/modules/room";

const SaleInfo = () => {
  const [roomType, setRoomType] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(createSaleInfo(roomType));
  }, [roomType]);

  return (
    <React.Fragment>
      <Grid
        id="saleInfo"
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
          매물 종류
        </Text>
        <table>
          <colgroup>
            <col width="150px" />
            <col />
          </colgroup>
          <tbody>
            <tr>
              <th>종류 선택</th>
              <td>
                <ul>
                  <li>
                    <label>
                      <input
                        type="radio"
                        name="roomType"
                        onClick={() => {
                          setRoomType("원룸");
                        }}
                      />
                      <p>원룸</p>
                    </label>
                  </li>
                  <li>
                    <label>
                      <input
                        type="radio"
                        name="roomType"
                        onClick={() => {
                          setRoomType("투룸");
                        }}
                      />
                      <p>투룸</p>
                    </label>
                  </li>
                  <li>
                    <label>
                      <input
                        type="radio"
                        name="roomType"
                        onClick={() => {
                          setRoomType("쓰리룸");
                        }}
                      />
                      <p>쓰리룸</p>
                    </label>
                  </li>
                  <li>
                    <label>
                      <input
                        type="radio"
                        name="roomType"
                        onClick={() => {
                          setRoomType("오피스텔");
                        }}
                      />
                      <p>오피스텔</p>
                    </label>
                  </li>
                  <li>
                    <label>
                      <input
                        type="radio"
                        name="roomType"
                        onClick={() => {
                          setRoomType("아파트");
                        }}
                      />
                      <p>아파트</p>
                    </label>
                  </li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </Grid>
    </React.Fragment>
  );
};

export default SaleInfo;
