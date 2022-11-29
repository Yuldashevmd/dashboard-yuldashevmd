import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 194.99px;
  background: #ffffff;
  box-shadow: 0px 10px 60px rgba(226, 236, 249, 0.5);
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;
export const IconBar = styled.div`
  display: flex;
  align-items: center;
  gap: 0 20px;
  svg {
    width: 99.71px;
    height: 100px;
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
  }
`;
