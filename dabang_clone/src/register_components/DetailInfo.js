import React, { useEffect, useState } from "react";
import { Grid, Text } from "../components/Styles";
import { useDispatch, useSelector } from "react-redux";
import "./DetailInfo.css";

const DetailInfo = () => {
  return (
    <React.Fragment>
      <Grid
        id="detailInfo"
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
          상세 설명
        </Text>

        <Grid>
          <table>
            <colgroup>
              <col width="150px" />
              <col />
            </colgroup>
            <tbody>
              <tr>
                <th>제목</th>
                <td>
                  <div className="styled__Wrap-sc-17hggnx-0 gUYVyr">
                    <input
                      name="title"
                      type="text"
                      placeholder="예)신논현역 도보 5분거리, 혼자 살기 좋은 방 입니다."
                      className="styled__Title-sc-17hggnx-1 dFOPJc"
                      // value=""
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <th>상세 설명</th>
                <td>
                  <div className="styled__Wrap-sc-17hggnx-0 gUYVyr">
                    <textarea
                      name="memo"
                      placeholder="상세설명 작성 주의사항&#13;&#10;- 방 정보와 관련없는 홍보성 정보는 입력하실 수 없습니다. (홈페이지 주소, 블로그, SNS, 메신저ID, 전화번호, 이메일 등)&#13;&#10;- 중개수수료를 언급한 내용은 입력할 수 없습니다. (중개수수료 무료, 꽁짜, 반값 등)&#13;&#10;* 주의사항 위반시 허위매물로 간주되어 매물 삭제 및 이용의 제한이 있을 수 있습니다.&#13;&#10;* 다방의 매물등록 규정에 위반되는 금칙어는 등록이 불가합니다."
                      className="styled__Memo-sc-17hggnx-2 knSOrZ"
                    ></textarea>
                  </div>
                </td>
              </tr>
              <tr>
                <th>비공개 메모</th>
                <td>
                  <div className="styled__Wrap-sc-17hggnx-0 gUYVyr">
                    <textarea
                      name="privateMemo"
                      placeholder="외부에 공개되지 않으며, 등록자에게만 보이는 메모입니다."
                      className="styled__Private-sc-17hggnx-3 fbJuVv"
                    ></textarea>
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

export default DetailInfo;
