import React, { useEffect, useState } from "react";
import { Grid, Text } from "../components/Styles";
import { useDispatch, useSelector } from "react-redux";
import "./ImageUpload.css";
import AWS from "aws-sdk";
import { config } from "../shared/Image";
import moment from "moment";
import { createImageUpload } from "../redux/modules/room";

const ImageUpload = () => {
  const dispatch = useDispatch();

  AWS.config.update({
    region: "ap-northeast-2", // 버킷이 존재하는 리전을 문자열로 입력합니다. (Ex. "ap-northeast-2")
    credentials: new AWS.CognitoIdentityCredentials({
      IdentityPoolId: "ap-northeast-2:5ff31b93-dc5f-416c-a12c-aa67c74c7025", // cognito 인증 풀에서 받아온 키를 문자열로 입력합니다. (Ex. "ap-northeast-2...")
    }),
  });

  const handleFileInput = (e) => {
    // input 태그를 통해 선택한 파일 객체
    const file = e.target.files[0];

    // S3 SDK에 내장된 업로드 함수
    const upload = new AWS.S3.ManagedUpload({
      params: {
        Bucket: "dabangclone", // 업로드할 대상 버킷명
        Key: moment().format("YYYY-MM-DD-HH-mm-ss") + ".jpg", // 업로드할 파일명 (* 확장자를 추가해야 합니다!)
        Body: file, // 업로드할 파일 객체
      },
    });

    const promise = upload.promise();

    promise.then(
      function (data) {
        alert("이미지 업로드에 성공했습니다.");
        dispatch(createImageUpload(data.Location));
      },
      function (err) {
        return alert("오류가 발생했습니다: ", err.message);
      }
    );
  };

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
              <input
                type="file"
                id="upload"
                className="image-upload"
                onChange={handleFileInput}
              />
              <label htmlFor="upload" className="image-upload-wrapper">
                사진 등록
              </label>
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
    </React.Fragment>
  );
};

export default ImageUpload;
