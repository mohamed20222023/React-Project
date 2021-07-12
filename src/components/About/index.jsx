import React from 'react';
import {Creative , CreativInfo , InfoTitle , Span , InfoDir , InfoDesc , Ancor} from "./style.js"

const About = () => {

    return (
        <Creative>
        <div className="container">
            <CreativInfo>
                <InfoTitle><Span>This is</Span> Me</InfoTitle>
                <InfoDir>Creative Director</InfoDir>
                <InfoDesc>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est <Ancor href="#">explicabo</Ancor> maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
                </InfoDesc>
                <InfoDesc>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est explicabo maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
                </InfoDesc>
            </CreativInfo>
        </div>
    </Creative>
    );
}

export default About;