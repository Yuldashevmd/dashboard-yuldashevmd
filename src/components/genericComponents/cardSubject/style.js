import styled from "styled-components";

export const Card = styled.div`
  width: 287.57px;
  height: 221.07px;
  background: ${(props) => (props.props ? "#DBF6FD" : " #FEE4CB")};
  border-radius: 25px;
  padding: 17px 22px;
`;
export const DatePart = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  p {
    font-weight: 600;
  }
  .date {
    font-weight: 500;
    font-size: 10px;
    line-height: 12px;
    color: #6f6f6f;
  }
`;

export const SubjectPart = styled.div`
  h2 {
    font-weight: 700;
    font-size: 20px;
  }
  p {
    font-weight: 500;
    font-size: 12px;
    line-height: 12px;
    color: #6f6f6f;
    margin: 7px 0;
  }
`;
export const Form = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0;
  p {
    font-weight: 700;
    font-size: 12px;
    line-height: 15px;
    color: #242424;
    text-align: end;
  }
  input {
    accent-color: #ff942e;
  }
`;
export const TeacherPart = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  p {
    font-size: 12px;
    line-height: 15px;
    color: #242424;
  }
  button {
    width: 18px;
    height: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: 0.5px solid #ff942e;
    color: #ff942e;
    cursor:pointer;
  }
`;
