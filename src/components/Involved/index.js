import React from 'react'
import Img from '../../images/logo.png'
import { InvolvedContainer, InvolvedContent, InvolvedItems, ElephantLogo, InvolvedH1, InvolvedP, InvolvedBtn } from './InvolvedElements';
import '../../App.css';

const Involved = () => {
    return (
        <InvolvedContainer>
            <InvolvedContent>
            <ElephantLogo>
                    <img src={Img} className='elogo' alt="logo" />
                    </ElephantLogo>
                <InvolvedItems>
                    <InvolvedH1>
                    Get Involved
                    </InvolvedH1>
                    <InvolvedP>
                    The fate of elephants is in the balance. The record price 
                    of ivory has attracted organised crime, rebel militias and even 
                    terrorist groups, fuelling a surge of poaching across the continent. <br /><br />

                    Without the outstanding support and generosity of our donors, STE 
                    would not be able to continue securing a future for the elephants. <br /><br />

                    We urgently need your support, while there is still time. You can be 
                    of vital assistance by donating to either our core funds or to any of 
                    our projects.<br /><br />
                    </InvolvedP>
                    <InvolvedBtn>Donate</InvolvedBtn>
                </InvolvedItems>
            </InvolvedContent>
        </InvolvedContainer>
    )
}

export default Involved
