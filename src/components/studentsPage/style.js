import styled from "styled-components";

export const TableDiv = styled.div`
  width: 1019px;
  height: 812px;
  box-shadow: 0px 10px 60px rgba(226, 236, 249, 0.5);
  border-radius: 30px;
  margin: 34px 0;
  padding: 30px 39px;
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 40px;
    h1 {
      font-weight: 600;
      font-size: 22px;
      line-height: 33px;
    }
    p {
      font-weight: 400;
      font-size: 14px;
      line-height: 21px;
    }
  }
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  gap: 0 15px;
  input{
width: 227.38px;
height: 38px;
border:none;
background: #F9FBFF;
border-radius: 10px;
outline:none;
padding:0 10px;
  }
  select{
    width: 162.11px;
height: 38px;
border:none;
background: #F9FBFF;
border-radius: 10px;
outline:none;
padding:0 10px;
  }
`;
