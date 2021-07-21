import React from 'react';
import {Grid, Text, ListCont, DetailList, ToggleBtn } from "../components/Styles";

const Table = (props) => {
    const { post } = props;
    
    //방 수 계산
    const {room_type} =  post.sale_info;
    let roomCnt = 0;
    if ((room_type[0]==="원") || (room_type[0]==="오")) {
        roomCnt = 1;
    } else if (room_type[0]==="투") {
        roomCnt = 2;
    } else {
        roomCnt = 3;
    }

    //제곱미터, 평수 토글
    const [area,calcArea] = React.useState(false);

    //제곱미터 면적
    const squareMeter = post.basic_info.building_area;
    //평수로 계산한 면적
    const calcSquare = (squareMeter*0.3025).toFixed(1);



    return (
        <ListCont
        borderTop="2px solid black"
        display="flex" flexWrap="wrap"
        boxSizing="border-box"
        >
           <DetailList>
               <Text flex="0 0 95px"
                color="rgb(134, 134, 134)">
                   층 수
               </Text>
               <Text>{post.basic_info.floor}</Text>
           </DetailList>
           <DetailList>
               <Text flex="0 0 95px"
                color="rgb(134, 134, 134)">
               공급면적</Text>
               <Text>
               
               {/* 제곱미터 면적 */}
                {!area && (
                <>
                {squareMeter}m² &nbsp;
                <ToggleBtn onClick={()=>calcArea(true)}>⇆ 평</ToggleBtn>
                </>
                )}

                {/* 평수 면적 */}
                {area && (
                <>
                {calcSquare}평 &nbsp;
                <ToggleBtn onClick={()=>calcArea(false)}>⇆ m²</ToggleBtn>
                </>
                )}
               
               
               </Text>
           </DetailList>
           <DetailList>
               <Text flex="0 0 95px"
                color="rgb(134, 134, 134)">
               방 수/욕실 수</Text>
               <Text>{roomCnt} / 1</Text>
           </DetailList>
           <DetailList>
               <Text flex="0 0 95px"
                color="rgb(134, 134, 134)">
                    방향
               </Text>
               <Text>남서</Text>
           </DetailList>
           <DetailList>
               <Text flex="0 0 95px"
                color="rgb(134, 134, 134)">
                    난방종류</Text>
               <Text>개별난방</Text>
           </DetailList>
           <DetailList>
               <Text flex="0 0 95px"
                color="rgb(134, 134, 134)">
                    빌트인</Text>
               <Text>{post.additional_info.has_built_in?
                        "있음": "없음"
                }</Text>
           </DetailList>
           <DetailList>
               <Text flex="0 0 95px"
                color="rgb(134, 134, 134)">
                    주차</Text>
               <Text>{post.additional_info.is_parking_space?
                        "가능": "불가능"
                }</Text>
           </DetailList>
           {/* <DetailList>
               <Text flex="0 0 95px"
                color="rgb(134, 134, 134)">
                    세대당 주차수</Text>
               <Text></Text>
           </DetailList> */}
           <DetailList>
               <Text flex="0 0 95px"
               color="rgb(134, 134, 134)">
                    엘리베이터</Text>
               <Text>{post.additional_info.has_elevator?
                        "있음": "없음"
                }</Text>
           </DetailList>
           <DetailList>
               <Text flex="0 0 95px"
                color="rgb(134, 134, 134)">
                    반려동물</Text>
               <Text>{post.additional_info.has_pet?
                        "가능":"불가능"}</Text>
           </DetailList>
           <DetailList>
               <Text flex="0 0 95px"
                color="rgb(134, 134, 134)">
                    베란다/발코니</Text>
               <Text>{post.additional_info.has_balcony?
                        "있음":"없음"}</Text>
           </DetailList>
           <DetailList>
               <Text flex="0 0 95px"
                color="rgb(134, 134, 134)">
                    전세자금대출</Text>
               <Text>{post.additional_info.loan_possibility?
                        "가능":"불가능"}</Text>
           </DetailList>
           <DetailList>
               <Text flex="0 0 95px"
                color="rgb(134, 134, 134)">
                    입주가능일</Text>
               <Text>{post.basic_info.moving_date}</Text>
           </DetailList>
           {/* <DetailList>
               <Text flex="0 0 95px"
                color="rgb(134, 134, 134)">
                    주용도</Text>
               <Text>단독주택</Text>
           </DetailList>
           <DetailList>
               <Text flex="0 0 95px"
                color="rgb(134, 134, 134)">
                    사용승인일</Text>
               <Text></Text>
           </DetailList>
           <DetailList>
               <Text flex="0 0 95px"
                color="rgb(134, 134, 134)">
                    최초 등록일</Text>
               <Text></Text>
           </DetailList> */}
       </ListCont>
    );
};

export default Table;