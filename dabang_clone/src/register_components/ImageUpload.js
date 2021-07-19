import React, { useEffect, useState } from "react";
import { Grid, Text } from "../components/Styles";
import { useDispatch, useSelector } from "react-redux";
import "./ImageUpload.css";

const ImageUpload = () => {
  return (
    <React.Fragment>
      <Grid
        id="imageUpload"
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
          사진 등록
        </Text>

        <Grid
          className="styled__Wrap-wjzlfv-0 iEQbFd"
          flexDirection="column"
          alignItems="flex-start"
        >
          <div className="styled__DescWrap-l8ol3j-0 ldqoTx">
            <p>
              - 사진은 가로로 찍은 사진을 권장합니다. (가로 사이즈 최소 800px)
            </p>
            <p>- 사진 용량은 사진 한 장당 10MB 까지 등록이 가능합니다.</p>
            <p>
              - 사진은 최소 3장 이상 등록해야하며, 최대 15장 까지 권장합니다. 그
              이상 등록할 경우 업로드 시간이 다소 지연될 수 있습니다.
            </p>
          </div>
          <div className="styled__Screen-l8ol3j-1 jiOwMe">
            <svg width="70" height="70" viewBox="0 0 70 70">
              <g fill="none" fillRule="evenodd">
                <circle cx="35" cy="35" r="35" fill="#D8D8D8"></circle>
                <g transform="translate(19 23)">
                  <rect
                    width="30"
                    height="22"
                    x="1"
                    y="1"
                    stroke="#777"
                    strokeWidth="2"
                    rx="3"
                  ></rect>
                  <circle cx="25" cy="7" r="2" fill="#777"></circle>
                  <path
                    fill="#777"
                    d="M3.996 13.038l6.042-6.042 4 4 2.981-2.98 10.988 10.988v1.015H3.984z"
                  ></path>
                </g>
              </g>
            </svg>
            <p className="styled__Text-l8ol3j-2 eerxgz">
              실 사진 최소 3장 이상 등록 하셔야 하며, 가로 사진을 권장합니다.
            </p>
            <p className="styled__WarningText-l8ol3j-3 ntKoY">
              다방 로고를 제외한 불필요한 정보(워터마크, 상호, 전화번호 등)가
              있는 매물은 비공개 처리 됩니다.
            </p>
            <div>
              <button id="uploader" className="dz-clickable">
                사진 추가하기
              </button>
            </div>
          </div>
          <p className="styled__Text-wjzlfv-3 cyVvon">
            <svg width="18" height="18" viewBox="0 0 18 18">
              <g fill="none" fillRule="evenodd">
                <circle cx="9" cy="9" r="9" fill="#E6E7EA"></circle>
                <path
                  fill="#9C9EA3"
                  d="M8.997 13.5a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5zm.01-2.499c-.634 0-.75-5.449-.75-6.001 0-.552.336-1 .75-1s.75.448.75 1-.116 6.001-.75 6.001z"
                ></path>
              </g>
            </svg>
            <span>
              허위 매물을 등록할 경우 다방에서 임의로 계정 및 매물 전체 삭제
              처리됩니다.
            </span>
            <a
              href="https://blog.naver.com/dabangapp/220122235428"
              target="_blank"
              rel="noopener noreferrer"
            >
              허위매물 제재 정책 확인하기
            </a>
          </p>
        </Grid>
      </Grid>
      <div className="styled__AgreeWrap-sc-1tbsltx-4 egZnIW">
        <div className="btn-wrap">
          <button className="cancel">취소</button>
          <button className="add">매물등록</button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ImageUpload;
