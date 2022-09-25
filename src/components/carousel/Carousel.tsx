import React from "react";
import { Carousel as AntCarousel, Image } from "antd";
import styled from "@emotion/styled";
import one from "../../assets/images/1.jpg";
import two from "../../assets/images/2.jpg";
import three from "../../assets/images/3.jpg";
import four from "../../assets/images/4.jpg";
import five from "../../assets/images/5.jpg";

export const Carousel = () => {
  return (
    <AntCarouselBox autoplay>
      <Image src={one}></Image>
      <Image src={two}></Image>
      <Image src={three}></Image>
      <Image src={four}></Image>
      <Image src={five}></Image>
    </AntCarouselBox>
  );
};

const AntCarouselBox = styled(AntCarousel)`
  text-align: center;
  height: 350px;
  line-height: 250px;
  background: #eceef2;
  overflow: hidden;
  border-radius: 4px;
`;
