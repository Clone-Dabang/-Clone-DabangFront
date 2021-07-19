import React from 'react';
import { Grid, Image, Text } from './Styles';

const ImageSlide = () => {
    const [slide, setSlide] = React.useState(false);
    const [image, changeImage] = React.useState(0);
    const imgWidth = 868;
    const images =  [
    "https://cdn.pixabay.com/photo/2021/07/09/02/29/family-6398107_960_720.jpg",
    "https://cdn.pixabay.com/photo/2020/02/11/16/25/manarola-4840080__340.jpg",
    "https://cdn.pixabay.com/photo/2021/07/09/02/29/family-6398107_960_720.jpg",
    "https://cdn.pixabay.com/photo/2021/07/09/02/29/family-6398107_960_720.jpg",
    "https://cdn.pixabay.com/photo/2021/07/09/02/29/family-6398107_960_720.jpg",
    "https://cdn.pixabay.com/photo/2021/07/09/02/29/family-6398107_960_720.jpg",
    "https://cdn.pixabay.com/photo/2021/07/09/02/29/family-6398107_960_720.jpg",
];
    const imgCnt = images.length; //이미지 개수

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
    
    return (
        <React.Fragment>
            <Grid onClick={()=>setSlide(true)} margin="30px 0 0 0" display="block" height="420px">
                <Image float="left" width="620px" height="100%" url={images[0]} />
                    {images.map((item,idx) => {
                        if(idx > 0 && idx < 5)
                            return <Image float="left" width="280px" height="50%" url={item} />;
                        else if(idx === 5) 
                            return <Image> 전체 보기</Image>;
                        
                    })}
            </Grid>

        {/* 화면에 풀 사이즈로 사진 보이기 */}
        {slide && (
            <Grid
                top="0" left="0"
                backgroundColor="rgba(0, 0, 0, 0.7)"
                position="fixed" padding="120px 0" flexDirection="column">
                {/* 큰 이미지 슬라이드 */}
                <Grid maxHeight="640px" padding="0 22px" justifyContent="space-between" alignItems="center">
                    {/* 현재 이미지 순서 */}
                    <Text zIndex="1" position="absolute" top="20%" left="20%" fontSize="50px">{-image/imgWidth+1}/{imgCnt}</Text>
                    
                    <Text fontSize="50px" onClick={previous}>이전</Text>
                    <Grid maxWidth="868px" overflow="hidden">
                        <Grid transitionDuration="0.5s" transform={`translateX(${image}px)`}>
                            {images.map((item,idx) => (
                                <Image key={idx} flex="0 0 868px" url={item} />
                            ))}
                        </Grid>
                    </Grid>
                    <Text fontSize="50px" onClick={next}>다음</Text>
                    <Text position="absolute" top="20%" right="10%" fontSize="50px" onClick={()=>setSlide(false)}>닫기</Text>

                </Grid>

                {/* 작은 이미지 슬라이드 */}
                <Grid
                 justifyContent="center"
                 maxWidth="1040px" overflow="hidden"
                 maxHeight="93px" margin="20px 78px">
                    <Grid position="relative" transitionDuration="0.5s" transform="">
                        {images.map((item, idx) => {
                            if ((-image/imgWidth)!==idx)
                                return <Image  onClick={()=>changeImage(-idx*imgWidth)} key={idx} flex="0 0 140px" margin="0 10px 0 0" url={item} />;
                            else return <Image selectImage={true} key={idx} flex="0 0 140px" margin="0 10px 0 0" url={item} />;
                    })}
                    </Grid>
                </Grid>
            </Grid>
        )}
        </React.Fragment>
    );
};

export default ImageSlide;