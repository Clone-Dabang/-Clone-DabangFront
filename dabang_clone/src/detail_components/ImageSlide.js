import React from 'react';
import { Grid, Image, Text } from '../components/Styles';
import cancle from "../images/cancle_icon.png";
import prev from "../images/previous_icon.png";
import nxt from "../images/next_icon.png";



const ImageSlide = (props) => {
    const [slide, setSlide] = React.useState(false);
    const [image, changeImage] = React.useState(0);
    const imgWidth = 868;
    const {images} = props;
    const imgCnt = images.length; //이미지 개수
    const curImg = -image/imgWidth+1 //현재 이미지 순서

    //이전 사진 보여주기
    const previous = () => {
        if (image===0)
            return;
        console.log(image,"image위치");
        changeImage(image+imgWidth);
        console.log(image,"image위치");
    }
    //다음 사진 보여주기
    const next = () => {
        if (image===-imgWidth*(imgCnt-1))
            return;
        console.log(image,"image위치");
        changeImage(image-imgWidth);
        console.log(image,"image위치");
    }
    

    // //작은 이미지 슬라이드 구현(미완...)
    // const [smImage, changeSmImage] = React.useState(0);
    // const smImgWidth = 140;
    // //이전 사진 보여주기
    // const smPrevious = () => {
    //     if (image===0)
    //         return;
    //     changeImage(image+imgWidth); //큰 이미지앨범 위치값

    // }
    // //다음 사진 보여주기
    // const smNext = () => {
    //     if (image===-imgWidth*(imgCnt-1))
    //         return;
    //     changeImage(image-imgWidth); //큰 이미지앨범 위치값
    //     if (curImg > 7){
    //         changeSmImage(smImage-smImgWidth) //작은 이미지앨범 위치값
    //     }
    // }


    return (
        <React.Fragment>
            <Grid cursor="pointer" position="relative" onClick={()=>setSlide(true)} margin="30px 0 0 0" display="block" height="420px">
                <Image float="left" width="620px" height="100%" url={images[0]} />
                {images.map((item,idx) => {
                    if(idx > 0 && idx < 4)
                        return <Image float="left" width="280px" height="50%" url={item} />;
                    else if(idx === 4) 
                        return <Image position="relative" float="left" width="280px" height="50%"
                         url={item} showAllBG>
                            <Image showAllText>
                                <Text fontSize="80px" fontWeight="10">+</Text><br />
                                {imgCnt}개 전체 보기
                            </Image>                             
                        </Image>;
                })}

            </Grid>

        {/* 화면에 풀 사이즈로 사진 보이기 */}
        {slide && (
            <Grid
                zIndex="2"
                top="0" left="0"
                backgroundColor="rgba(0, 0, 0, 0.7)"
                position="fixed" padding="120px 0" flexDirection="column">
                {/* 큰 이미지 슬라이드 */}
                <Grid position="relative" maxHeight="640px" margin="0 auto" padding="0 22px" justifyContent="center" alignItems="center">
                    
                    {/* 현재 이미지 순서 */}
                    <Text zIndex="2" color="white" position="relative" top="-47%" left="60px" fontSize="35px">{curImg}/{imgCnt}</Text>
                    
                    <Image url={prev}
                        width="70px" height="70px" cursor="pointer" zIndex="2"
                        position="relative" top="0%" left="-20px" onClick={previous}
                    />
                    <Grid maxWidth="868px" overflow="hidden">
                        <Grid transitionDuration="0.5s" transform={`translateX(${image}px)`}>
                            {images.map((item,idx) => (
                                <Image key={idx} flex="0 0 868px" url={item} />
                            ))}
                        </Grid>
                    </Grid>
                    <Image url={nxt}
                        width="70px" height="70px" cursor="pointer"
                        position="relative" top="0%" right="-20px" onClick={next}
                    />
                    <Image url={cancle}
                         width="30px" height="30px" cursor="pointer"
                         position="relative" top="-47%" right="20px" onClick={()=>setSlide(false)}
                         />
                </Grid>

                {/* 작은 이미지 슬라이드 */}
                <Grid
                 justifyContent="center"
                 maxWidth="1040px" overflow="hidden"
                 maxHeight="93px" margin="20px auto">
                    <Grid cursor="pointer"
                     position="relative"
                     transitionDuration="0.5s" transform={()=>{}}> //작은 이미지 앨범 이동
                        {images.map((item, idx) => {
                            if ((-image/imgWidth)!==idx) //작은 이미지 선택, 큰 이미지 앨범 위치값 변경
                                return <Image  onClick={()=>changeImage(-idx*imgWidth)} key={idx} flex="0 0 140px" margin="0 10px 0 0" url={item} />;
                            else return <Image selectImage={true} key={idx} flex="0 0 140px" margin="0 10px 0 0" url={item} />;
                    })}

                    {/* 이미지가 7개 보다 많을 때 작은 이미지 버튼 보이기 */}
                    {/* {imgCnt > 7 && (
                        <>
                        <Image url={prev}
                            width="40px" height="40px" cursor="pointer" zIndex="1"
                            position="absolute" top="25px" left="-8px" onClick={smPrevious}
                        />
                        <Image url={nxt}
                            width="40px" height="40px" cursor="pointer"  zIndex="1"
                            position="absolute" top="25px" right="-7px" onClick={smNext}
                        />
                        </>
                    )} */}
                    </Grid>
                </Grid>
            </Grid>
        )}
        </React.Fragment>
    );
};

export default ImageSlide;