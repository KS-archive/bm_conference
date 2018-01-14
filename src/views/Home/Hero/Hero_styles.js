import styled from 'styled-components';
import { colorPalette } from '../../../utils/styles';

export const Hero = styled.section`
width: 100%;
height: 100vh;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
text-align: center;
position: relative;
color: white;
`
export const HeroText = styled.div`
 > h1{
  font-size: 60px;
  font-weight: 700;
  margin-top: 0;
  margin-bottom: 5px;
}
> h2{
  font-size: 42px;
  font-weight: 100;
  margin-top: 0;
  margin-bottom: 20px;
}
> h3{
  font-size: 24px;
  font-weight: 900;
  margin-top: 0;
  margin-bottom: 30px;
}
> p{
  font-size: 24px;
  font-weight: normal;
  margin-top: 0;
  margin-bottom: 33px;
}
`
export const HeroButton = styled.button`
margin-top: 33px;
background-color: #095e8d;
color: white;
height: 46px;
width: 140px;
font-size: 18px;
border: none;
border-radius: 5px;
margin-right: 30px;
margin-left: 30px;
&:hover{
  background-color: #1872a3;
  cursor: pointer;
}
`
