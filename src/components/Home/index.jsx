import React from 'react';

import { Homee, HomeInfor, HomeTitle, HomeInfo, HomeDesc, UxSpan, HomeBtn } from "./style.js"

const Home = () => {

    return (
        <Homee>
            <div className="container">
                <HomeInfor>
                    <HomeTitle>Muhammed Eid</HomeTitle>
                    <HomeInfo>Creative Director</HomeInfo>
                    <HomeDesc>
                        Iam a professional <UxSpan>UX Designer</UxSpan> and Front-End Developer creating modern and resposive designs to Web and Mobile. Let us work together. Thank you.
                    </HomeDesc>
                    <HomeBtn>Let's Begin</HomeBtn>
                </HomeInfor>
            </div>
        </Homee>
    );
}

export default Home;