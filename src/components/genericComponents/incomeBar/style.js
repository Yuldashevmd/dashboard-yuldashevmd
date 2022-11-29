import styled from "styled-components";

export const Container = styled.div`
  width: 1019px;
  height: 194.99px;
  background: #ffffff;
  box-shadow: 0px 10px 60px rgba(226, 236, 249, 0.5);
  border-radius: 30px;
  display: flex;
  align-items:center;
  justify-content: space-around;
`;
export const IconBar = styled.div`
  display: flex;
  align-items:flex-start;
  gap: 0 18px;
  svg {
    width: 100px;
    height: 90px;
    cursor: pointer;
    :hover {
      opacity: 0.8;
    }
  }
  .icon__part {
    display: flex;
    flex-direction: column;
    gap: 5px 0;
    span {
      font-size: 14px;
      line-height: 21px;
      color: #acacac;
    }
    h2 {
      font-weight: 600;
      font-size: 32px;
      line-height: 100%;
      color: #333333;
    }
    .number__part {
      display: flex;
      align-items: center;
      gap: 0 5px;
      img {
        width: 23px;
        height: 25px;
      }
      p {
        font-size: 12px;
        line-height: 18px;
      }
    }
  }
`;
