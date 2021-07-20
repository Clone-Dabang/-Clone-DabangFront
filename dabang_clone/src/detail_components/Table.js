import React from 'react';
import {Grid, Text, Image, ListCont, DetailList, ToggleBtn } from "../components/Styles";

const Table = (props) => {
    const { post } = props;
    
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
                   해당층/건물층
               </Text>
               <Text>/{post.basic_info.floor}</Text>
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
               <Text></Text>
           </DetailList>
           <DetailList>
               <Text flex="0 0 95px"
                color="rgb(134, 134, 134)">
                    방향
               </Text>
               <Text></Text>
           </DetailList>
           <DetailList>
               <Text flex="0 0 95px"
                color="rgb(134, 134, 134)">
                    난방종류</Text>
               <Text></Text>
           </DetailList>
           <DetailList>
               <Text flex="0 0 95px"
                color="rgb(134, 134, 134)">
                    빌트인</Text>
               <Text>{post.additional_info.has_built_in}</Text>
           </DetailList>
           <DetailList>
               <Text flex="0 0 95px"
                color="rgb(134, 134, 134)">
                    건물 주차 수</Text>
               <Text></Text>
           </DetailList>
           <DetailList>
               <Text flex="0 0 95px"
                color="rgb(134, 134, 134)">
                    세대당 주차수</Text>
               <Text></Text>
           </DetailList>
           <DetailList>
               <Text flex="0 0 95px"
               color="rgb(134, 134, 134)">
                    엘리베이터</Text>
               <Text></Text>
           </DetailList>
           <DetailList>
               <Text flex="0 0 95px"
                color="rgb(134, 134, 134)">
                    반려동물</Text>
               <Text>{post.additional_info.has_pet}</Text>
           </DetailList>
           <DetailList>
               <Text flex="0 0 95px"
                color="rgb(134, 134, 134)">
                    베란다/발코니</Text>
               <Text>{post.additional_info.has_balcony}</Text>
           </DetailList>
           <DetailList>
               <Text flex="0 0 95px"
                color="rgb(134, 134, 134)">
                    전세자금대출</Text>
               <Text>{post.additional_info.loan_possibility}</Text>
           </DetailList>
           <DetailList>
               <Text flex="0 0 95px"
                color="rgb(134, 134, 134)">
                    입주가능일</Text>
               <Text>{post.basic_info.moving_date}</Text>
           </DetailList>
           <DetailList>
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
           </DetailList>
       </ListCont>
    );
};

export default Table;