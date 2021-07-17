import React, {useEffect} from 'react';
import {Grid, Text} from "../components/Styles";
import { useDispatch, useSelector } from "react-redux";
import { getOnePostServer } from '../redux/modules/room';

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
            <Grid flexDirection="column">
                <Grid flexDirection="column">
                    <Grid>
                        <Grid flexDirection="column">
                            <Text>{post.sale_info.room_type}</Text>
                            {post.trade_info.is_montly?
                            <Text>월세
                                {post.trade_info.monthly_deposit}/
                                {post.trade_info.monthly_pay}
                                만원
                            </Text>
                            :
                            <Text>전세
                                {post.trade_info.yearly_deposit}
                                만원
                            </Text>}
                            
                        </Grid>
                        <Grid flexDirection="column">
                            <Text>전용면적</Text>
                            <Text>{post.basic_info.building_area}
                            </Text>
                        </Grid>
                        <Grid flexDirection="column">
                            <Text>한달 예상 주거비</Text>
                            <Text>만 원 + a</Text>
                        </Grid>
                        <Grid>
                            <Text>지안공인중개사무소</Text>
                        </Grid>
                    </Grid>

                    <Grid>
                        <Grid>
                            <Text>최근 7일 700회</Text>
                            <Text>·</Text>
                            <Text>링크아이콘</Text>
                            <Text>·</Text>
                            <Text>허위매물신고</Text>
                        </Grid>
                        <Text>※ 중개사무소 대표가 직접 확인하고 승인한 매물입니다.</Text>
                    </Grid>
                </Grid>

                {/* 확인매물 표시 여부 필요 */}
                
                <Grid flexDirection="column">
                    <Grid>
                        <Grid>
                            <Text>해당층/건물층</Text>
                            <Text>/{post.basic_info.floor}</Text>
                        </Grid>
                        
                        <Grid>
                            <Text>전용/계약면적</Text>
                            <Text>/{post.basic_info.building_area}</Text>
                        </Grid>
                        
                        <Grid>
                            <Text>방 수/욕실 수</Text>
                            <Text></Text>
                        </Grid>
                        
                        <Grid>
                            <Text>방향</Text>
                            <Text></Text>
                        </Grid>
                    </Grid>

                    <Grid>
                        <Grid>
                            <Text>난방종류</Text>
                            <Text></Text>
                        </Grid>
                        
                        <Grid>
                            <Text>빌트인</Text>
                            <Text>{post.additional_info.has_built_in}</Text>
                        </Grid>
                        
                        <Grid>
                            <Text>총 세대 수</Text>
                            <Text></Text>
                        </Grid>
                        
                        <Grid>
                            <Text>건물 주차 수</Text>
                            <Text></Text>
                        </Grid>
                    </Grid>

                    <Grid>
                        <Grid>
                            <Text>세대당 주차수</Text>
                            <Text></Text>
                        </Grid>
                        
                        <Grid>
                            <Text>반려동물</Text>
                            <Text>{post.additional_info.has_pet}</Text>
                        </Grid>
                        
                        <Grid>
                            <Text>베란다/발코니</Text>
                            <Text>{post.additional_info.has_balcony}</Text>
                        </Grid>
                        
                        <Grid>
                            <Text>전세자금대출</Text>
                            <Text>{post.additional_info.loan_possibility}</Text>
                        </Grid>
                    </Grid>

                    <Grid>
                        <Grid>
                            <Text>입주가능일</Text>
                            <Text>{post.basic_info.moving_date}</Text>
                        </Grid>
                        
                        <Grid>
                            <Text>주용도</Text>
                            <Text></Text>
                        </Grid>
                        
                        <Grid>
                            <Text>사용승인일</Text>
                            <Text></Text>
                        </Grid>
                        
                        <Grid>
                            <Text>최초 등록일</Text>
                            <Text></Text>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid flexDirection="column">
                    이미지 슬라이드
                    <Grid>
                        <Text>{post.detail_info.title}</Text>
                        <Text>{post.detail_info.contents}</Text>
                    </Grid>
                </Grid>
            </Grid>
        )}
        </React.Fragment>
    );
};

export default Detail;