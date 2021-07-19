import React from "react";
import { Grid, Text, ListCont, List } from "../components/Styles";
import { useDispatch, useSelector } from "react-redux";
import SaleInfo from "../register_components/SaleInfo";
import AddressInfo from "../register_components/AddressInfo";
import TradeInfo from "../register_components/TradeInfo";
import BasicInfo from "../register_components/BasicInfo";
import AdditionalInfo from "../register_components/AdditionalInfo";
import DetailInfo from "../register_components/DetailInfo";
import ImageUpload from "../register_components/ImageUpload";

const Register = () => {
  return (
    <React.Fragment>
      <Grid
        width="1200px"
        margin="0 auto"
        flexDirection="column"
        padding="0 10px"
        fontFamily='"Spoqa Han Sans", -apple-system, sans-serif'
      >
        <Grid height="200px" alignItems="center" justifyContent="center">
          <Text
            type="title"
            fontSize="33px"
            fontWeight="500"
            lineHeight="49px"
            color="rgb(34, 34, 34)"
          >
            방 내놓기
          </Text>
        </Grid>
        <Grid>
          <ListCont
            width="100%"
            margin="30px 0 31px 0"
            padding="21px 35px"
            borderRadius="4px"
            backgroundColor="#fff"
            border="1px solid rgb(226, 226, 226);"
          >
            <List
              color="rgb(102, 102, 102)"
              fontSize="15px"
              lineHeight="24px"
              position="relative"
            >
              <Text>전/월세 매물만 등록할 수 있습니다.</Text>
              <Text>매매는 다방허브에서만 등록하실 수 있습니다</Text>
              <Text>
                소유중인 공실 매매와 다중 매물 등록을 한번에 하고 싶다면
                <Text type="label" color="rgb(50, 108, 249)">
                  “다방허브”
                </Text>
                를 이용해주세요.
              </Text>
            </List>
            <List
              color="rgb(102, 102, 102)"
              fontSize="15px"
              lineHeight="24px"
              position="relative"
            >
              <Text>
                1개의 매물만 등록 가능하며, 다방에서 직거래로 표시됩니다.
              </Text>
            </List>
          </ListCont>
        </Grid>
        <SaleInfo></SaleInfo>
        <AddressInfo></AddressInfo>
        <TradeInfo></TradeInfo>
        <BasicInfo></BasicInfo>
        <AdditionalInfo></AdditionalInfo>
        <DetailInfo></DetailInfo>
        <ImageUpload></ImageUpload>
        <div className="styled__AgreeWrap-sc-1tbsltx-4 egZnIW">
          <div className="btn-wrap">
            <button className="cancel">취소</button>
            <button className="add">매물등록</button>
          </div>
        </div>
      </Grid>
    </React.Fragment>
  );
};

export default Register;
