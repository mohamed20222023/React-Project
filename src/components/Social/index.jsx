import React , {useEffect , useState} from 'react';
import {SocialSec , SocialMedia , Icon , P , Span , Info2} from "./style.js"
import axios  from 'axios';



const Social = () => {



    const [social , setSocial] = useState([]);

    useEffect(() => {
        axios.get("js/data.json").then(res => {
            setSocial(res.data.social)
        })
    } , []);

    const socialMedia = social.map(item => {
        return  <SocialMedia pro = {item.id} key={item.id}>
                        <Icon className={item.icon}></Icon>
                        <P>
                            <Span>{item.title}</Span>
                            <Info2>{item.body}</Info2>
                        </P>
                    </SocialMedia>
    })




    return (
        <SocialSec>
            {socialMedia}
        </SocialSec>
    );
}

export default Social;