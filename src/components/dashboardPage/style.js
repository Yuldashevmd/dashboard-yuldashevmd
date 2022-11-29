import styled from "styled-components";

export const Content =styled.div`
width:1019px;
display:flex;
align-items:center;
img{
    width:50%;
    cursor:pointer;
    transition: all 0.3s ease;
    :hover{
        transform:scale(1.1)
    }
}
`