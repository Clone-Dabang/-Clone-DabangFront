import React from 'react';
import { Grid, Text, Image, Table, Tbody, Tr, Td_lineOne, Td_lineTwo } from '../components/Styles';
import ErrorOutlineSharpIcon from '@material-ui/icons/ErrorOutlineSharp';

const Price = (props) => {
    const {monthly,yearly} = props.trade_info;
    const {management_fee, is_parking_space} = props.additional_info;
    
    return (
        <React.Fragment>
            <Grid id="price"
                padding="120px 0" flexDirection="column"
                justifyContent="center"
                >
                <Text
                    color="rgb(34, 34, 34)"
                    fontSize="28px"
                    fontWeight="400"
                    lineHeight="41px"
                    >가격정보</Text>

                <Table>
                    <colgroup>
                        <col width="35%"></col>
                        <col width="35%"></col>
                        <col width="15%"></col>
                        <col width="15%"></col>
                    </colgroup>
                    <Tbody>
                        <Tr height="50px">
                            <Td_lineOne>
                            {(monthly.pay!==0)? 
                                "월세": "전세"    
                            }
                            </Td_lineOne>
                            <Td_lineOne borderLeft>관리비</Td_lineOne>
                            <Td_lineOne borderLeft>주차</Td_lineOne>
                            <Td_lineOne borderLeft>단기임대</Td_lineOne>
                        </Tr>
                        <Tr>
                            {/* 월세, 전세 구분 */}
                            <Td_lineTwo>
                            {(monthly.pay!==0)? 
                                `${monthly.pay}
                                /
                                ${monthly.deposit}`
                            : yearly.deposit   
                            }    
                            </Td_lineTwo>

                            <Td_lineTwo borderLeft>
                                <Grid display="block" padding="20px 28px 27px">
                                    {management_fee?
                                    (<>
                                    <Text
                                    padding="0 0 24px 0">
                                    매월&nbsp;
                                    {management_fee}
                                    만 원<br />
                                        <Text display="inline"
                                        color="rgb(134, 134, 134)"
                                        fontSize="13px"
                                        fontWeight="400"
                                        lineHeight="19px">
                                        (청소비, 경비비, 승강기유지비, 수선유지비, 기타)
                                        </Text>
                                    </Text>
                                    <Text
                                    padding="24px 0 0 0"
                                    borderTop="1px dashed rgb(201, 201, 201)"
                                    >별도 금액으로 부과
                                        <br /> -
                                    </Text>
                                    </>)
                                    :
                                    `없음`    
                                    }
                                    
                                </Grid>
                            </Td_lineTwo>
                            <Td_lineTwo borderLeft>
                            {is_parking_space?
                            "가능": "불가능"
                            }</Td_lineTwo>
                            <Td_lineTwo borderLeft>불가능</Td_lineTwo>
                        </Tr>
                    </Tbody>
                </Table>

                <Grid
                    width="850px"
                    height="138px"
                    margin="30px auto 0px"
                    padding="40px 55px 30px"
                    border="1px solid rgb(20, 118, 252)"
                    borderRadius="4px"
                    boxShadow="rgb(0 0 0 / 5%) 0px 1px 5px 0px"
                    alignItems="flex-start">
                        <Text
                            width="165px"
                            padding="5px 0 0 0"
                            color="rgb(20, 118, 252)"
                            fontSize="20px"
                            >한달 예상 주거비용</Text>
                        <Text padding="0 0 0 40px">
                            <Grid alignItems="center"
                                fontSize="30px"
                                color="rgb(20, 118, 252)"
                                fontWeight="500">
                                {(monthly.pay!==0)?
                                `${monthly.pay + management_fee}
                                만 원`
                                : `없음`}
                                
                                <Text display="inline"
                                    margin="0 0 0 5px"
                                    color="rgb(76, 76, 76)"
                                    fontSize="15px"
                                    fontWeight="400">
                                    (월세 + 관리비)
                                </Text>
                            </Grid>
                            <Grid fontSize="13px"
                                  color="rgb(134, 134, 134)"
                                  fontWeight="400"
                                  alignItems="center"
                                  padding="5px 0">
                                <ErrorOutlineSharpIcon fontSize="small"/>
                                <Text>
                                &nbsp;별도 금액으로 부과되는 항목은 제외됩니다.    
                                </Text>
                            </Grid>                            
                        </Text>
                </Grid>

            </Grid>
        </React.Fragment>
    );
};

export default Price;