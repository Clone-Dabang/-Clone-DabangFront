import React, {useEffect, useMemo} from 'react';
import {Grid, Text, Image, A, ToggleBtn} from "../components/Styles";
import { useDispatch, useSelector } from "react-redux";
import { getOnePostServer } from '../redux/modules/room';
import eye from "../images/eye_shaped_icon.png";
import link from "../images/link_icon.png";
import siren from "../images/siren_icon.png";

import ImageSlide from '../detail_components/ImageSlide';
import Location from '../detail_components/Location';
import Price from '../detail_components/Price';
import Option from '../detail_components/Option';
import Table from '../detail_components/Table';

const Detail = (props) => {
    const dispatch = useDispatch();

    // async getPost() {
    //     const _post = await dispatch(getOnePostServer(id));
    //     console.log(_post);
    // };


    // 상세페이지 게시글 가져오기
    const id = Number(props.match.params.id); //백엔드 서버에서
    // const id = props.match.params.id; //임시 서버에서


    const post_list = useSelector((store) => store.room.list);
        console.log(post_list,"post_list");

    const post_idx = post_list.findIndex((p) => p.post_id === id); //백엔드 서버는 post_id로!
        console.log(post_idx,"postindex");

    const post = post_list[post_idx];
    useEffect(() => {
        if (post) {
        return;
        }
        dispatch(getOnePostServer(id));
    }, []);   

    console.log(post,"post");


    //제곱미터, 평수 토글
    const [area,calcArea] = React.useState(false);


    // 하위 컴포넌트에 넘겨줄 데이터 정리
    const trade_info = { monthly: post?.monthly, yearly: post?.yearly };
    const additional_info = { 
        management_fee: post?.management_fee,
        is_parking_space: post?.is_parking_space,
     }
     const appliance = {
        has_induction: post?.has_induction,
        has_microwave: post?.has_microwave,
        has_air_conditioner: post?.has_air_conditioner,
        has_washer: post?.has_washer,
        has_tv: post?.has_tv,
        has_closet: post?.has_closet,
        has_bed: post?.has_bed,
        has_desk: post?.has_desk,
        has_shoe_closet: post?.has_shoe_closet,
        has_bidet: post?.has_bidet,
        has_gas_range: post?.has_gas_range,
        has_refrigerator: post?.has_refrigerator,
        has_door_lock: post?.has_door_lock
         }
     const address_info = {
        road: post?.road,
        original: post?.original,
        latitude: post?.latitude,
        longitude: post?.longitude
     };

 
    return (
        <Grid position="relative" flexDirection="column" justifyContent="center">
        {post && (
            <Grid
             fontFamily={`NanumGothic, -apple-system, sans-serif`}
             display="block" width="1200px"
             padding="35px 10px 0" margin="0 auto"
             fontSize="14px"
             color="rgb(34, 34, 34)">
                <Grid margin="0 0 35px 0" justifyContent="space-between">
                    <Grid>
                        <Grid
                        width="227px" display="block"
                        padding="0 28px 0 0" 
                        borderRight="1px solid rgb(231, 231, 231)"
                        >
                            <Text
                            margin="0 0 5px">
                                {post.room_type}({post.inner_type})
                            </Text>

                            
                        {(post.monthly.pay!==0)?
                            <Grid display="block" whiteSpace="nowrap">
                                <Text
                                 display="inline"
                                 fontSize="30px" fontWeight="700"
                                 lineHeight="45px">
                                    월세&nbsp;
                                    {post.monthly.pay}
                                     /{post.monthly.deposit}
                                </Text>
                                
                                <Text
                                 display="inline"
                                 lineHeight="45px"
                                 fontSize="15px" width="29px">
                                &nbsp;만원</Text>
                            </Grid>
                            :
                            <Grid
                             display="block" whiteSpace="nowrap"
                             >
                                <Text
                                display="inline"
                                fontSize="30px" fontWeight="700"
                                lineHeight="45px">전세&nbsp;
                                    {post.yearly.deposit}
                                </Text>
                                <Text
                                display="inline"
                                lineHeight="45px"
                                fontSize="15px" width="29px">
                                    &nbsp;만원</Text>
                            </Grid>
                        }
                            
                        </Grid>
                        <Grid
                        alignItems="flex-start"  width="auto"
                        borderRight="1px solid rgb(231, 231, 231)"
                        padding="0 28px" flexDirection="column">
                            <Text margin="0 0 5px">공급면적</Text>

                            <Text fontSize="30px" fontWeight="700"
                            lineHeight="45px"
                            whiteSpace="nowrap">

                                {/* 제곱미터 면적 */}
                                {!area && (
                                <>
                                {post.building_area}
                                  m²
                                <ToggleBtn onClick={()=>calcArea(true)}>
                                    ⇆ 평
                                    </ToggleBtn>
                                </>
                                )}
                                
                                {/* 평수 면적 */}
                                {area && (
                                <>
                                {(post.building_area*0.3025).toFixed(1)}
                                 평&nbsp;
                                <ToggleBtn onClick={()=>calcArea(false)}>⇆ m²</ToggleBtn>
                                </>
                                )}

                            </Text>
                        </Grid>
                        <Grid
                        width="auto"
                        alignItems="flex-start"
                        color="rgb(50, 108, 249)"
                        padding="0 28px"
                        flexDirection="column"
                        borderRight="1px solid rgb(231, 231, 231)"
                        >
                            <Text margin="0 0 5px">한달 예상 주거비</Text>
                            <Text lineHeight="45px" fontSize="30px" fontWeight="700"
                                whiteSpace="nowrap">
                                {post.monthly.pay + post.management_fee}
                                만 원 + α</Text>
                        </Grid>

                    </Grid>

                    <Grid
                    //  flex="0 0 550px"
                     justifyContent="flex-end">
                        <Text
                         margin="0 0 5px">
                        지안공인중개사무소
                        </Text>
                    </Grid>
                </Grid>


                <Grid justifyContent="space-between" margin="0 0 20px">
                    <Grid width="auto">
                        <Image url={eye}
                         width="17px" height="17px"
                         margin="0 6px 0 0" />
                        <Text>최근 7일 70회</Text>
                        <Text margin="0 16px">•</Text>
                        <Image url={link}
                         width="17px" height="17px"
                         margin="0 4px 0 0" />
                        <Text margin="0 16px">•</Text>
                        <Image url={siren}
                         width="16px" height="16px"
                         margin="0 6px 0 0" />
                        <Text fontSize="12px">허위매물 신고</Text>
                    </Grid>
                    <Text>※ 중개사무소 대표가 직접 확인하고 승인한 매물입니다.</Text>
                </Grid>
               

                {/* 방 정보 표 */}
                <Table post={post}/>

                {/* 이미지 슬라이드 */}
                <ImageSlide images={post.url}/>

                {/* 작성글의 제목, 내용 */}
                <Grid margin="50px 0 0 0" padding="0 0 130px 0">
                    <Text
                        wordBreak="break-all"
                        fontSize="28px" fontWeight="400"
                        lineHeight="36px"
                        color="rgb(34, 34, 34)"
                        flex="0 0 520px" padding="0 150px 0 0">{post.title}</Text>
                    <Text
                        color="rgb(101, 101, 101)"
                        fontSize="16px"
                        lineHeight="26px"
                        wordBreak="break-all"
                        whiteSpace="pre-wrap" >{post.contents}</Text>
                </Grid>
            </Grid>
        )}

        {post && (
        <>
        {/* 가격정보, 옵션, 위치 내비게이션 */}
        <Grid position="sticky" top="0"
            backgroundColor="white"
            fontFamily={`NanumGothic, -apple-system, sans-serif`}
            height="58px"
            justifyContent="space-around"
            borderTop="1px solid rgb(221, 221, 221)"
            borderBottom="1px solid rgb(221, 221, 221)">
            
            <Text
            color="rgb(136, 136, 136)"
            fontSize="15px"
            textAlign="center"
            cursor="pointer">
                <A href="#price">가격정보</A>
            </Text>
            <Text
            color="rgb(136, 136, 136)"
            fontSize="15px"
            textAlign="center"
            cursor="pointer">
                <A href="#option">옵션</A>
            </Text>
            <Text
            color="rgb(136, 136, 136)"
            fontSize="15px"
            textAlign="center"
            cursor="pointer">
                <A href="#location">위치</A>
            </Text>
        </Grid>


        <Grid width="1180px" display="block"
              fontFamily={`NanumGothic, -apple-system, sans-serif`}>
            {/* 가격정보 */}
            <Price
             trade_info={trade_info} 
            additional_info={additional_info} />
            
            {/* 옵션 */}
            <Option appliance={appliance}/>

            {/* 위치 */}
            <Location address_info={address_info} />
        </Grid>
        
        </>    
        )}
    </Grid>
    )
};

export default Detail;