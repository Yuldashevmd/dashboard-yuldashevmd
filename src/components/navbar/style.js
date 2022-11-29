import styled from "styled-components";

export const Container =styled.div`
width:100%;
height:50px;
margin: 37px 0;
display:flex;
align-items:center;
justify-content:space-between;
`
export const NavBtns =styled.div`
display:flex;
align-items:center;
gap:0 18px;
img{
    width:18px;
    height:19px;
    cursor:pointer;
    transition:all 0.2s ease;
    :hover{
        opacity:0.8;
    }
}
`;

export const Form =styled.form`
width:216px;
height:38px;
display:flex;
align-items:center;
box-shadow: 0px 10px 60px rgba(226, 236, 249, 0.5);
border-radius: 12px;
padding:0 5px;
cursor:pointer;
svg{
    :hover{
        opacity:0.8;
    }
}
input{
    border:none;
    outline:none;
    height:100%;
    padding:0 5px;
    transition:all 0.2s ease;
    border-radius:2px;
    :focus{
        border-bottom:1px solid lightskyblue;
    }
}
`