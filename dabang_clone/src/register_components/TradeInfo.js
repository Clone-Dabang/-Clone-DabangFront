import React, { useEffect, useState } from "react";
import { Grid, Text } from "../components/Styles";
import { useDispatch, useSelector } from "react-redux";
import "./TradeInfo.css";

const TradeInfo = () => {
  const monthly_html = `<p>월세</p>
                        <input type="text" name="deposit" placeholder="보증금" value="" oninput="this.value = this.value.replace(/[^0-9.]/g, '');" />
                        <p class="kzCtLl">/</p>
                        <input name="price" placeholder="월세" value="" oninput="this.value = this.value.replace(/[^0-9.]/g, '');" />
                        <p class="ceMnZE">
                          만원<span>(예 월세 1000만원/50만원)</span>
                        </p>
                        <button class="remove_row_btn1"></button>`;
  const yearly_html = `<p>전세</p>
                       <input name="deposit" placeholder="전세" oninput="this.value = this.value.replace(/[^0-9.]/g, '');" />
                       <p class="ceMnZE">
                         만원<span>(예 전세 2000만원)</span>
                       </p>
                       <button class="remove_row_btn2"></button>`;

  const payBtnClick = (id) => {
    const target = document.getElementById(id);
    target.disabled = true;
    const tbody = target.parentNode.parentNode.parentNode.parentNode;

    const remove_tr = (target) => {
      if (document.getElementsByClassName("iNyxMi").length === 1) {
        const th =
          document.getElementsByClassName("iNyxMi")[0].parentNode.parentNode
            .previousSibling;
        th.removeAttribute("rowspan");
        const tr = th.parentNode.nextSibling;
        tr.insertBefore(th, tr.firstChild);
        tr.previousSibling.remove();
      } else {
        target.disabled = true;
        console.log(target.parentNode);
        target.parentNode.remove();
      }
    };

    if (id === "monthly") {
      if (tbody.getElementsByTagName("tr").length === 1) {
        tbody.getElementsByTagName("th")[0].remove();
        const tr = document.createElement("tr");
        tr.innerHTML = `<th rowspan="2">거래 종류</th><td><div><div class="iNyxMi">${monthly_html}</div></div></td>`;
        tbody.prepend(tr);
      } else {
        const div0 = tbody.getElementsByTagName("div")[0];
        const div = document.createElement("div");
        div.classList.add("iNyxMi");
        div.innerHTML = monthly_html;
        div0.append(div);
      }

      // 클릭 시 2회 발생..?
      const remove_row_btn1 =
        document.getElementsByClassName("remove_row_btn1")[0];

      remove_row_btn1.addEventListener("click", function (event) {
        remove_tr(event.target);
        document.getElementById("monthly").disabled = false;
      });
    } else {
      if (tbody.getElementsByTagName("tr").length === 1) {
        tbody.getElementsByTagName("th")[0].remove();
        const tr = document.createElement("tr");
        tr.innerHTML = `<th rowspan="2">거래 종류</th><td><div><div class="iNyxMi">${yearly_html}</div></div></td>`;
        tbody.prepend(tr);
      } else {
        const div0 = tbody.getElementsByTagName("div")[0];
        const div = document.createElement("div");
        div.classList.add("iNyxMi");
        div.innerHTML = yearly_html;
        div0.append(div);
      }

      const remove_row_btn2 =
        document.getElementsByClassName("remove_row_btn2")[0];
      remove_row_btn2.addEventListener("click", function (event) {
        remove_tr(event.target);
        document.getElementById("yearly").disabled = false;
      });
    }
  };

  return (
    <React.Fragment>
      <Grid
        id="tradeInfo"
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
          거래 정보
        </Text>

        <Grid>
          <table>
            <colgroup>
              <col width="150px" />
              <col />
            </colgroup>
            <tbody>
              <tr>
                <th>거래 종류</th>
                <td>
                  <div id="btn_area">
                    <button
                      id="monthly"
                      onClick={(e) => {
                        payBtnClick(e.target.id);
                      }}
                    >
                      월세
                    </button>
                    <button
                      id="yearly"
                      onClick={(e) => {
                        payBtnClick(e.target.id);
                      }}
                    >
                      전세
                    </button>
                    <p>
                      <svg width="18" height="18" viewBox="0 0 25 25">
                        <g fill="none" fillRule="evenodd">
                          <circle
                            cx="12.6"
                            cy="12.6"
                            r="12.6"
                            fill="#E6E7EA"
                          ></circle>
                          <path
                            fill="#9C9EA3"
                            d="M12.596 18.9a1.05 1.05 0 1 1 0-2.1 1.05 1.05 0 0 1 0 2.1zm.014-3.498c-.888 0-1.05-7.629-1.05-8.402 0-.773.47-1.4 1.05-1.4.58 0 1.05.627 1.05 1.4 0 .773-.162 8.402-1.05 8.402z"
                          ></path>
                        </g>
                      </svg>
                      처음에 선택한 거래 종류가 우선노출됩니다. 예치금이 있는
                      경우 보증금 입력란에 필히 입력하세요.
                    </p>
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

export default TradeInfo;
