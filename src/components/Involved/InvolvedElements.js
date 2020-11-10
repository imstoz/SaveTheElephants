import styled from 'styled-components';

export const InvolvedContainer = styled.div`
    display: block;
    background-color: #000;
    height: 100%;
    width: 100vw;
    background-position: center;
    background-size: cover;
    margin: 0;

`

export const InvolvedContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 1097px) 
    {
      display: flex; 
      flex-flow: column; 
    }
    
`

export const InvolvedItems = styled.div`
    max-width: 500px;
    text-align: left;
    // background-color: orange;
    color: #fff;
    padding: 4%;
    margin: 4%;
    display: inline-block;
    vertical-align: top;
    

    @media screen and (max-width: 1097px) 
    {
        order: 1;
        width: 100%;
    }
    @media screen and (max-width: 600px) 
    {
    max-width: 392px;
    }
`

export const ElephantLogo = styled.div`
    max-width: 50%;
    padding: 2%;
    // margin: 2%;
    display: inline-block;
    min-width: 16.375rem;
    text-align: center;

    @media screen and (max-width: 1097px) 
    {
        order: 2;
        width: 100%;
          margin-bottom: 2rem;
    }
`

export const InvolvedH1 = styled.div`
font-size: clamp(2.7rem, 4.5vw, 4rem);
    margin-bottom: 3rem;
    box-shadow: 3px 5px #A82525;
    letter-spacing: 3px;
    text-transform: uppercase;
    font-weight: bold;
    
`

export const InvolvedP = styled.div`
    font-size: clamp(1rem, 1vw, 1.2rem);
    margin-bottom: 3rem;
    line-height: 1.4;
    max-width: 525px;
`

export const InvolvedBtn = styled.div`
    font-size: 1.2rem;
    padding: 1rem 2rem;
    border: none;
    background: #A82525;
    letter-spacing: .5px;
    color: #fff;
    float: left;
    text-transform: uppercase;
    transition: 0.2s ease-out;
    
    &:hover {
    background: #ffc500;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #000;
}
`