import React, {useEffect} from 'react';
import {Grid, Text} from "../components/Styles";
import { useDispatch, useSelector } from "react-redux";
import { getOnePostServer } from '../redux/modules/room';

const Detail = (props) => {
    const dispatch = useDispatch();
    //임시 서버에서 id는 0
    // const id = 0;
    const id = props.match.params.id;

     useEffect(() => {
        // if (post) {
        // return;
        // }
        console.log(id,"id");
        dispatch(getOnePostServer(id));

    }, []);   



    const post_list = useSelector((store) => store.room.list);

    const post_idx = post_list.findIndex((p) => p.id === id);
    const post = post_list[post_idx];



    console.log(post_list,"list")
    return (
        <React.Fragment>
            <Grid>
                <Grid>
                    <Grid>
                        <Text>{post.sale_info.room_type}</Text>
                        {post.trade_info.is_montly?
                         <Text>월세
                              {post.trade_info.monthly_deposit}
                              {post.trade_info.monthly_pay}
                              만원
                         </Text>
                          :
                         <Text>전세
                             {post.trade_info.yearly_deposit}
                             만원
                         </Text>}
                        
                    </Grid>
                    <Grid>
                        <Text>전용면적</Text>
                        <Text>{post.basic_info.building_area}
                        </Text>
                    </Grid>
                    <Grid>
                        <Text>한달 예상 주거비</Text>
                        <Text>만 원 + a</Text>
                    </Grid>
                    <Grid>
                        <Text>지안공인중개사무소</Text>
                    </Grid>
                </Grid>

                <Grid>
                    <Grid>
                        <Text>좋아요</Text>
                        <Text>·</Text>
                        <Text>최근 7일 700회</Text>
                        <Text>·</Text>
                        <Text>링크아이콘</Text>
                        <Text>·</Text>
                        <Text>허위매물신고</Text>
                    </Grid>
                    <Text>※ 중개사무소 대표가 직접 확인하고 승인한 매물입니다.</Text>
                </Grid>
            </Grid>

            <Grid>

            </Grid>
        </React.Fragment>
    );
};

export default Detail;