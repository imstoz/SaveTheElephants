import React, { useState } from 'react'
import Navbar from '../Navbar'
import { HomeContainer, HomeContent, HomeItems, HomeH1, HomeP, HomeBtn, HomeMap } from './HomeElements';
import Img from '../../images/africaoutline.png';
import Sidebar from '../Sidebar';



const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };


    return (
        <HomeContainer>
            <Navbar toggle={toggle} />
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <HomeContent>
                <HomeItems>
                    <HomeH1>Save the Elephants</HomeH1>
                    <HomeP>Around 90% of African elephants have been 
                            wiped out in the past century – mainly due to 
                            the ivory trade. <br /> <br />

                            Elephant poaching, even though it’s illegal, has 
                            been getting dramatically worse in parts of Africa 
                            in the last 10 years – mostly because of growing 
                            demand for ivory in China and the Far East. <br /> <br />

                            Around 20,000 African elephants are being killed 
                            every year for their ivory - that’s around 55 every day.</HomeP>
                    <HomeBtn>Help us save the elephants</HomeBtn>
                </HomeItems>
                <HomeMap><img src={Img} className='map' alt="logo" /></HomeMap>
            </HomeContent>
        </HomeContainer>
    )
}

export default Home
