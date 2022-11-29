import React from "react";
import StatusBar from "../genericComponents/statusBar";
import { Form, TableDiv } from "./style.js";
import { Table } from "antd";
const StudentsPage = () => {
  const columns = [
    {
      title: "F.I.O",
      dataIndex: "name",
      key: 1,
    },
    {
      title: "Yo'nalish",
      dataIndex: "Yo'nalish",
      key: 2,
    },
    {
      title: "Telefon nomer",
      dataIndex: "Telefon nomer",
      key: 3,
    },
    {
      title: "To'lov",
      dataIndex: "To'lov",
      key: 4,
    },
    {
      title: "Guruh",
      dataIndex: "Guruh",
      key: 5,
    },
    {
      title: "Status",
      dataIndex: "",
      key: "x",
      render: () => <a>Active</a>,
    },
  ];
  const data = [
    {
      key: 1,
      name: "John Brown",
      "Yo'nalish": "Microsoft",
      "Telefon nomer": +998974341254,
      "To'lov": 600,
      Guruh: 1,
    },
    {
      key: 2,
      name: "Jim Green",
      "Yo'nalish": "Microsoft",
      "Telefon nomer": +998974341254,
      "To'lov": 600,
      Guruh: 1,
    },
    {
      key: 3,
      name: "Not Expandable",
      "Yo'nalish": "Microsoft",
      "Telefon nomer": +998974341254,
      "To'lov": 600,
      Guruh: 1,
    },
    {
      key: 4,
      name: "Joe Black",
      "Yo'nalish": "Microsoft",
      "Telefon nomer": +998974341254,
      "To'lov": 600,
      Guruh: 1,
    },
  ];
  return (
    <div>
      <StatusBar />
      <TableDiv>
        <div className="header">
          <div className="text">
            <h1>Hamma O'quvchilar</h1>
            <p>Faol o'quvchilar</p>
          </div>
          <Form>
            <input type="text" placeholder="Qidiruv" />
            <p>
              Short status{" "}
              <span>
                <select name="Faol" id="">
                  <option value="Faol">Faol</option>
                  <option value="Qoniqarli">Qoniqarli</option>
                  <option value="Yomon">Yomon</option>
                </select>
              </span>
            </p>
          </Form>
        </div>
        <Table columns={columns} dataSource={data} />
      </TableDiv>
    </div>
  );
};
export default StudentsPage;
