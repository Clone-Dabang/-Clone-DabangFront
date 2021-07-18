import React, {useEffect} from 'react';
import {Grid, Text, Icon, ListCont, DetailList} from "../components/Styles";
import { useDispatch, useSelector } from "react-redux";
import { getOnePostServer } from '../redux/modules/room';
import eye from "../images/eye_shaped_icon.png";
import link from "../images/link_icon.png";
import siren from "../images/siren_icon.png";

const Detail = (props) => {
    const dispatch = useDispatch();
    //임시 서버에서 id는 0
    // const id = 0;
    const id = props.match.params.id;

    const post_list = useSelector((store) => store.room.list);
    console.log(post_list,"post_list")

    const post_idx = post_list.findIndex((p) => p.id === id);
    console.log(post_idx,"postindex")
    const post = post_list[post_idx];


     useEffect(() => {
        if (post) {
        return;
        }
        dispatch(getOnePostServer(id));
    }, []);   

    console.log(post,"post");
    return (
        <React.Fragment>
        {post && (
            <Grid
             fontFamily={`NanumGothic, -apple-system, sans-serif`}
             display="block" width="1180px"
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
                                {post.sale_info.room_type}
                            </Text>
                        {post.trade_info.is_montly?
                            <Grid display="block" whiteSpace="nowrap">
                                <Text
                                 display="inline"
                                 fontSize="30px" fontWeight="700"
                                 lineHeight="45px">
                                    월세&nbsp;
                                    {post.trade_info.monthly_deposit}/
                                    {post.trade_info.monthly_pay}
                                    
                                </Text>
                                
                                <Text
                                 display="inline"
                                 lineHeight="45px"
                                 fontSize="15px" width="29px">
                                &nbsp;만원</Text>
                            </Grid>
                            :
                            <Grid
                             display="block"
                             borderRight="1px solid rgb(231, 231, 231)">
                                <Text
                                fontSize="30px" fontWeight="700"
                                lineHeight="45px">전세
                                    {post.trade_info.yearly_deposit}
                                </Text>
                                <Text
                                fontSize="15px">
                                    &nbsp;만원</Text>
                            </Grid>
                        }
                            
                        </Grid>
                        <Grid
                        alignItems="flex-start"  width="auto"
                        borderRight="1px solid rgb(231, 231, 231)"
                        padding="0 28px" flexDirection="column">
                            <Text margin="0 0 5px">전용면적</Text>
                            <Text fontSize="30px" fontWeight="700"
                            lineHeight="45px">
                                {post.basic_info.building_area}
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
                            <Text lineHeight="45px" fontSize="30px" fontWeight="700">만 원 + α</Text>
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
                        <Icon url={eye}
                         width="17px" height="17px"
                         margin="0 6px 0 0" />
                        <Text>최근 7일 70회</Text>
                        <Text margin="0 16px">•</Text>
                        <Icon url={link}
                         width="17px" height="17px"
                         margin="0 4px 0 0" />
                        <Text margin="0 16px">•</Text>
                        <Icon url={siren}
                         width="16px" height="16px"
                         margin="0 6px 0 0" />
                        <Text fontSize="12px">허위매물 신고</Text>
                    </Grid>
                    <Text>※ 중개사무소 대표가 직접 확인하고 승인한 매물입니다.</Text>
                </Grid>

                {/* 확인매물 표시 여부 필요 */}
                
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
                        전용/계약면적</Text>
                        <Text>/{post.basic_info.building_area}</Text>
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

                <Grid display="block">
                    이미지 슬라이드
                    <Grid margin="50px 0 0 0" padding="0 0 130px 0">
                        <Text
                         wordBreak="break-all"
                         fontSize="28px" fontWeight="400"
                         lineHeight="36px"
                         color="rgb(34, 34, 34)"
                         flex="0 0 520px" padding="0 150px 0 0">{post.detail_info.title}</Text>
                        <Text
                         color="rgb(101, 101, 101)"
                         fontSize="16px"
                         lineHeight="26px"
                         wordBreak="break-all"
                         whiteSpace="pre-wrap" >{post.detail_info.contents}</Text>
                    </Grid>
                </Grid>
            </Grid>
        )}
        </React.Fragment>
    );
};

export default Detail;