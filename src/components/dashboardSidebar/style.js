import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

export const DashDiv = styled.div`
  width: 306px;
  height: 100vh;
  box-shadow: 0px 10px 60px rgba(226, 236, 249, 0.5);
  padding: 39px 31px;
  position: relative;
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
`;
export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  gap:8px 0;
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
  :hover {
    background: #5932ea;
    color: #fff;
  }
`;

export const ContentSide =styled.div`
width:70%;
margin:0 auto;
display:flex;
flex-direction:column;

`