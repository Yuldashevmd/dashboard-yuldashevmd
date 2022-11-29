import React from "react";
import IncomeBar from "../genericComponents/incomeBar";
import OverView from "../../assets/Navbar-icons/overview.svg";
import Customers from "../../assets/Navbar-icons/customers.svg";
import { Content } from "./style";

export default function DashboardPage() {
  return (
    <div>
      <IncomeBar />
      <Content>
        <img src={OverView} alt="over" />
        <img src={Customers} alt="custo" />
      </Content>
    </div>
  );
}
