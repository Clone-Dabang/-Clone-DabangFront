import React from 'react';
import { Grid, Text, Image } from '../components/Styles';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import sneakers from "../images/sneakers.svg";
import closet from "../images/closet.svg";
import fridge from "../images/fridge.svg";
import gas from "../images/gas-stove.svg";
import lock from "../images/smart-lock.svg";
import induction from "../images/induction-stove.svg";
import microwave from "../images/microwave.svg";
import tv from "../images/tv.svg";
import bed from "../images/bed.svg";
import desk from "../images/desk.svg";
import bidet from "../images/bidet.svg";
import washer from "../images/washer.svg";

const Option = (props) => {
    const {
        has_induction,
        has_microwave,
        has_air_conditioner,
        has_washer,
        has_tv,
        has_closet,
        has_bed,
        has_desk,
        has_shoe_closet,
        has_bidet,
        has_gas_range,
        has_refrigerator,
        has_door_lock } = props.appliance;
        console.log(has_air_conditioner,"airconditionaer")

    return (
        <React.Fragment>
            <Grid id="option"
                borderTop="1px solid rgb(221, 221, 221)"
                padding="120px 0" flexDirection="column"
                justifyContent="center"
                >
                <Text
                    color="rgb(34, 34, 34)"
                    fontSize="28px"
                    fontWeight="400"
                    lineHeight="41px"
                >옵션</Text>

                <Grid
                    flexWrap="wrap"
                    padding="0px 104px"
                    margin="32px 0 0 0">

                    {has_air_conditioner&&(
                    <Grid fontSize="40px" flexDirection="column" margin="40px 0 0 0" flex="0 0 162px" height="70px">
                        <AcUnitIcon fontSize="inherit"/>
                        <Text fontSize="15px" fontColor="#444444" margin="5px 0 0 0"
                         lineHeight="25px"
                        >에어컨</Text>
                    </Grid>
                    )}
                    {(has_washer)&&(
                    <Grid fontSize="40px" flexDirection="column" margin="40px 0 0 0" flex="0 0 162px" height="70px">
                        <Image url={washer} width="40px" height="40px"/>
                        <Text fontSize="15px" fontColor="#444444" margin="5px 0 0 0"
                         lineHeight="25px"
                        >세탁기</Text>
                    </Grid>                    
                    )}
                    {has_closet&&( 
                    <Grid fontSize="40px" flexDirection="column" margin="40px 0 0 0" flex="0 0 162px" height="70px">
                        <Image url={closet} width="40px" height="40px"/>
                        <Text fontSize="15px" fontColor="#444444" margin="5px 0 0 0"
                         lineHeight="25px"
                        >옷장</Text>
                    </Grid>
                    )}
                    {has_shoe_closet&&( 
                    <Grid fontSize="40px" flexDirection="column" margin="40px 0 0 0" flex="0 0 162px" height="70px">
                        <Image url={sneakers} width="40px" height="40px"/>
                        <Text fontSize="15px" fontColor="#444444" margin="5px 0 0 0"
                         lineHeight="25px"
                        >신발장</Text>
                    </Grid>
                    )}
                    {has_refrigerator&&( 
                    <Grid fontSize="40px" flexDirection="column" margin="40px 0 0 0" flex="0 0 162px" height="70px">
                        <Image url={fridge} width="40px" height="40px"/>
                        <Text fontSize="15px" fontColor="#444444" margin="5px 0 0 0"
                         lineHeight="25px"
                        >냉장고</Text>
                    </Grid>
                    )}
                    {has_gas_range&&( 
                    <Grid fontSize="40px" flexDirection="column" margin="40px 0 0 0" flex="0 0 162px" height="70px">
                        <Image url={gas} width="40px" height="40px"/>
                        <Text fontSize="15px" fontColor="#444444" margin="5px 0 0 0"
                         lineHeight="25px"
                        >가스레인지</Text>
                    </Grid>
                    )}
                    {has_door_lock&&( 
                    <Grid fontSize="40px" flexDirection="column" margin="40px 0 0 0" flex="0 0 162px" height="70px">
                        <Image url={lock} width="40px" height="40px"/>
                        <Text fontSize="15px" fontColor="#444444" margin="5px 0 0 0"
                         lineHeight="25px"
                        >전자도어락</Text>
                    </Grid>
                    )}
                    {has_induction&&( 
                    <Grid fontSize="40px" flexDirection="column" margin="40px 0 0 0" flex="0 0 162px" height="70px">
                        <Image url={induction} width="40px" height="40px"/>
                        <Text fontSize="15px" fontColor="#444444" margin="5px 0 0 0"
                         lineHeight="25px"
                        >인덕션</Text>
                    </Grid>
                    )}
                    {has_microwave&&( 
                    <Grid fontSize="40px" flexDirection="column" margin="40px 0 0 0" flex="0 0 162px" height="70px">
                        <Image url={microwave} width="40px" height="40px"/>
                        <Text fontSize="15px" fontColor="#444444" margin="5px 0 0 0"
                         lineHeight="25px"
                        >전자레인지</Text>
                    </Grid>
                    )}
                    {has_tv&&( 
                    <Grid fontSize="40px" flexDirection="column" margin="40px 0 0 0" flex="0 0 162px" height="70px">
                        <Image url={tv} width="40px" height="40px"/>
                        <Text fontSize="15px" fontColor="#444444" margin="5px 0 0 0"
                         lineHeight="25px"
                        >TV</Text>
                    </Grid>
                    )}
                    {has_bed&&( 
                    <Grid fontSize="40px" flexDirection="column" margin="40px 0 0 0" flex="0 0 162px" height="70px">
                        <Image url={bed} width="40px" height="40px"/>
                        <Text fontSize="15px" fontColor="#444444" margin="5px 0 0 0"
                         lineHeight="25px"
                        >침대</Text>
                    </Grid>
                    )}
                    {has_desk&&( 
                    <Grid fontSize="40px" flexDirection="column" margin="40px 0 0 0" flex="0 0 162px" height="70px">
                        <Image url={desk} width="40px" height="40px"/>
                        <Text fontSize="15px" fontColor="#444444" margin="5px 0 0 0"
                         lineHeight="25px"
                        >책상</Text>
                    </Grid>
                    )}
                    {has_bidet&&( 
                    <Grid fontSize="40px" flexDirection="column" margin="40px 0 0 0" flex="0 0 162px" height="70px">
                        <Image url={bidet} width="40px" height="40px"/>
                        <Text fontSize="15px" fontColor="#444444" margin="5px 0 0 0"
                         lineHeight="25px"
                        >비데</Text>
                    </Grid>
                    )}                    
                </Grid>
            </Grid>
        </React.Fragment>
    );
};

export default Option;