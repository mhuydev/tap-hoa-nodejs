import { Image } from 'antd';
import React from 'react';
import { WrapperSliderStyle } from './style';

const SliderComponent = ({ arrImages }) => {
    // Ensure arrImages is an array before mapping
    if (!Array.isArray(arrImages)) {
        console.error("arrImages is not an array!");
        return null; // Or handle the error accordingly
    }

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000
    };
    return (
        <WrapperSliderStyle {...settings}>
            {arrImages.map((image) => {
                return (
                    <Image key={image} src={image} alt="slider" preview={false} width="100%" height="274px" />
                )
            })}
        </WrapperSliderStyle>
    )
}

export default SliderComponent;
