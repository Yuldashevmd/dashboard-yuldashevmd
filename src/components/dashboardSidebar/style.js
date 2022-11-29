import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const MainContainer = styled.div`
  width: 1440px;
  height: 1100px;
  display: flex;
  margin: auto;
`;

export const DashDiv = styled.div`
  width: 306px;
  height: 100%;
  box-shadow: 0px 10px 60px rgba(226, 236, 249, 0.5);
  padding: 39px 31px;
  .logo__part {
    display: flex;
    align-items: center;
    gap: 0 11px;
    margin-bottom: 50px;
    cursor:pointer;
    h1{
      user-select:none;
    }
  }
  .clock__panel{
    height:80%;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
  }
`;
export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  height: 48%;
  justify-content:space-between;
`;

export const Link = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 0 15px;
  width: 250px;
  height: 46px;
  border-radius: 8px;
  padding: 13px;
  cursor: pointer;
  list-style: none;
  text-decoration: none;
  color: #9197b3;
  font-size:16px;
  :hover {
    background: #5932ea;
    color: #fff;
  }
`;

export const ContentSide =styled.div`
width:1019px;
margin:0 auto;
display:flex;
flex-direction:column;
`;
export const ClockDiv =styled.div`
width: 250px;
height: 150px;
background: linear-gradient(107.91deg, #EAABF0 7.37%, #4623E9 95.19%);
border-radius: 20px;
display: flex;
  align-items: center;
  justify-content:center;
  font-weight: 600;
font-size: 32px;
line-height: 100%;
color:#fff;
`;