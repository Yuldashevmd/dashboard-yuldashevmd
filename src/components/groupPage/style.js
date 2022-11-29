import styled from "styled-components";

export const GroupDiv = styled.div`
  width: 1019px;
  height: 100vh;
  background: #ffffff;
  border-radius: 40px 40px 0px 0px;
  margin: 32px 0;
  padding: 34px 43px;
  .header {
    display: flex;
    justify-content: space-between;
    font-weight: bold;
  }
  .below__header {
    display: flex;
    align-items: center;
    gap: 0 25px;
    margin: 28px 0;
    h1 {
      font-weight: 500;
      font-size: 28px;
    }
    p {
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;
      color: #838383;
    }
  }
`;
export const ContentCourse =styled.div`
display:flex;
flex-wrap:wrap;
gap:25px;
`