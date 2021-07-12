import styled from "styled-components" ; 

export const SocialSec = styled.div`
    height: auto;
    overflow: hidden
`

export const SocialMedia = styled.div`
    width: 33.33%;
    float: left;
    box-sizing: border-box;
    padding: 100px 0 100px 60px;
    background : ${props => props.pro === 1 ? "#3b5998" : props.pro === 2 ? "#498cbf" : props.pro === 3 ? "#cc2127" : ""}
`

export const Icon = styled.i`
    width: 50px;
    height: 50px;
    background: #fff;
    text-align: center;
    line-height: 50px;
    color: #888;
    float: left;
    margin-right: 10px
`

export const P = styled.p`
    font-weight: bold;
    text-transform: uppercase;
    font-size: 20px;
    color: #fff
`

export const Span = styled.span`
    display: block;
    margin-bottom: 8px
`

export const Info2 = styled.span`
    font-weight: normal
`


/*

.social-media {
    height: auto;
    overflow: hidden
}

.social-media .social {
    width: 33.33%;
    float: left;
    box-sizing: border-box;
    padding: 100px 0 100px 60px
}


.social-media .social.face {
    background: #3b5998;
}

.social-media .social.twitter {
    background: #498cbf;
}

.social-media .social.pin {
    background: #cc2127;
}

.social-media .social .icon {
    width: 50px;
    height: 50px;
    background: #fff;
    text-align: center;
    line-height: 50px;
    color: #888;
    float: left;
    margin-right: 10px
}

.social-media .social p {
    font-weight: bold;
    text-transform: uppercase;
    font-size: 20px;
    color: #fff
}

.social-media .social p span {
    display: block;
    margin-bottom: 8px
}

.social-media .social p span.info2 {
    font-weight: normal
}
*/