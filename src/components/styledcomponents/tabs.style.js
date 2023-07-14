import styled, { keyframes } from "styled-components";

const slides = keyframes`
from{
  width: 0%;
  background: #ccc;
}to{
  width: 100%;
  background: #fff;
}
`

export const TextTab = styled.div`
  color: #fff;
  width: 25%;
  position: relative;
  text-align: left;
  
  &:before {
    content: '';
    height: 2px;
    width: 100%;
    background: rgba(255,255,255,0.3);
    position: absolute;
    top: -20px;
    left: 0;
    animation: ${slides} alternate 2s linear;
  }
`
export const CustomText = styled.div`
  font-weight: 900;
  text-align: center;
  font-size: calc(40px + 4.75295vw);
  color: red;
  background: linear-gradient(180deg,#0010f1 10%,hsla(0,0%,100%,.45) 98%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`
export const TextCards = styled.div`

`