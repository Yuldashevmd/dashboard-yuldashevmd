import React from "react";
import { Outlet, useNavigate } from "react-router";
import { dashList } from "../../utils/dashboard";
import {
  ClockDiv,
  ContentSide,
  DashDiv,
  Link,
  MainContainer,
  Ul,
} from "./style";
import { ReactComponent as SettingIcon } from "../../assets/Dashboard-icons/setting.svg";
import Navbar from "../navbar";
import { useState } from "react";
import { useEffect } from "react";

function DashboardSidebar() {
  const [clock,setClock]=useState();

  useEffect(()=>{
    let date =new Date();
    setClock(date.getHours() +':'+ date.getMinutes() +":"+ date.getSeconds())
  },[]);
  const navigate = useNavigate();
  return (
    <MainContainer>
      <DashDiv>
        <div onClick={() => navigate("/dashboard")} className="logo__part">
          <SettingIcon />
          <h1>Dashboard</h1>
        </div>
        <div className="clock__panel">
          <Ul>
            {dashList.map((item) => (
              <Link activestyle="active" to={item?.path} key={item?.id}>
                <img src={item?.icon} alt="img" />
                <span>{item?.title}</span>
              </Link>
            ))}
          </Ul>
          <ClockDiv>
          {clock}
          </ClockDiv>
        </div>
      </DashDiv>
      <ContentSide>
        <Navbar />
        <Outlet />
      </ContentSide>
    </MainContainer>
  );
}

export default DashboardSidebar;
