import React from 'react';
import {Drop , DropTitle , Span , Form  , FormIn , FormInput , TextArea , Submit } from "./style.js"


import Footer from "../Footer/index"


const Contact = () => {

    return (
        <React.Fragment>
            <Drop>
                <div className ="container">
                    <DropTitle><Span>Drop </Span>Me A line</DropTitle>
                    <Form>
                        <FormIn>
                            <FormInput type="text" placeholder="Your Name" sup />
                            <FormInput type="email" placeholder="Your Email" sup />
                        </FormIn>
                        <FormInput type="text" sub placeholder="Your Subject" />
                        <TextArea cols="30" rows="10" placeholder="Your Message"></TextArea>
                        <Submit type="submit" value="Send Message" />
                    </Form>
                </div>
            </Drop>
            <Footer />
        </React.Fragment>
    );
}

export default Contact;