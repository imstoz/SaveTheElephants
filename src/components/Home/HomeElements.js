import styled from 'styled-components';
import ImgBg from '../../images/elephantbg.png';

export const HomeContainer = styled.div`
    display: block;
    background: url(${ImgBg});
    background-color: #000;
    height: 100%;
    width: 100vw;
    background-position: center;
    background-size: cover;
`;

    export const HomeContent = styled.div`
    display: flex;
    // flex-flow: row;
    vertical-align: top;
    justify-content: space-between;

    @media screen and (max-width: 900px) 
{
    display: flex;
    flex-flow: column;
}
    `;

export const HomeItems = styled.div`
    display: flex;
    flex-flow: column;
    align-self: center;
    max-height: 100%;
    padding: 1rem 1rem;
    max-width: 400px;
    margin: 2%;
    color: #fff;
    line-height: 1;
    margin-top: 4%;
    justify-content: space-between;

    // @media screen and (max-width: 650px) {
    //     width: 100%;
    //     padding: 0 2rem;
    // }
    @media screen and (max-width: 1150px) 
{
    order: 1;
}


`;

export const HomeH1 = styled.h1`
    font-size: clamp(2.7rem, 4.5vw, 3.7rem);
    margin-bottom: 3rem;
    box-shadow: 3px 5px #A82525;
    letter-spacing: 3px;
    text-transform: uppercase;
    font-weight: bold;

    @media screen and (max-width: 900px) 
    {
       color: #000;
    }
`;

export const HomeP = styled.p`
font-size: clamp(1rem, 1vw, 1.2rem);
margin-bottom: 3rem;
line-height: 1.4;
@media screen and (max-width: 900px) 
    {
       color: #000;
       font-weight: 600;
    }
`;

export const HomeBtn = styled.button`
font-size: 1.2rem;
padding: 1rem 2rem;
border: none;
background: #A82525;
letter-spacing: .5px;
margin-bottom: 2rem;
color: #fff;
text-transform: uppercase;
transition: 0.2s ease-out;
&:hover {
    background: #ffc500;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #000;
}
`;

export const HomeMap = styled.div`

    align-self: center;
    color: #fff;
    margin: 0;
    padding: 0 1rem;
    margin: 2%;
    margin-bottom: 2rem;
    max-width: 525px;

    @media screen and (max-width: 1056px) {
        align-items: center;
        max-width: 100%;
    }

    @media screen and (max-width: 1150px) 
{
    order: 2;
`;

