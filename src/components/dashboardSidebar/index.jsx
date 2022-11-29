import React from "react";
import { Outlet, useNavigate } from "react-router";
import { dashList } from "../../utils/dashboard";
import { ContentSide, DashDiv, Link, MainContainer, Ul } from "./style";
import {ReactComponent as SettingIcon} from '../../assets/Dashboard-icons/setting.svg'
import Navbar from "../navbar";

function DashboardSidebar() {
  const navigate =useNavigate();
  return (
    <MainContainer>
      <DashDiv>
        <div onClick={()=>navigate('/dashboard')} className="logo__part">
          <SettingIcon/> 
          <h1>Dashboard</h1>
        </div>
        <Ul>
          {dashList.map((item) => (
            <Link activestyle='active' to={item?.path} key={item?.id}>
              <img src={item?.icon} alt="img" /><span>{item?.title}</span>
            </Link>
          ))}
        </Ul>
      </DashDiv>
      <ContentSide>
      <Navbar/>
      <Outlet />
      </ContentSide>
    </MainContainer>
  );
}

export default DashboardSidebar;
