import styled from "styled-components";



export const WorkSec = styled.div`
height: auto;
    padding: 50px 0;
    overflow: hidden;
    background: #fff
`

export const Worktitle = styled.h2`
    font-size: 60px;
`

export const WorkTitSpan = styled.span`
    font-weight: normal
`

export const Part = styled.div`
    margin-top: 20px;
    width: 30%;
    float: left;
    height: auto;
    padding: 100px 0;
    border: 1px solid #888;
    box-sizing: border-box;
    text-align: center;
    margin-left: 5%;

    margin-left:${props => props.first === 1 ? 0 : "5%"}
`

export const Icon = styled.i`
    color: #888;
    margin-bottom: 20px
`

export const PartTitle = styled.h4`
    font-size: 25px;
    color: #eb5424;
    margin-bottom: 20px
`

export const Line = styled.hr`
    width: 60%;
    margin: auto;
    margin-bottom: 20px
`

export const PartDesc = styled.p`
    font-size: 14px;
    color: #888;
    padding: 20px
`


/*
.work {
    height: auto;
    padding: 50px 0;
    overflow: hidden;
    background: #fff
}

.work .work-title {
    font-size: 60px;
}

.work .work-title span {
    font-weight: normal
}

.work .part {
    margin-top: 20px;
    width: 30%;
    float: left;
    height: auto;
    padding: 100px 0;
    border: 1px solid #888;
    box-sizing: border-box;
    text-align: center;
    margin-left: 5%
}

.work .first {
    margin-left: 0
}

.work .part .icon {
    color: #888;
    margin-bottom: 20px
}

.work .part .part-title {
    font-size: 25px;
    color: #eb5424;
    margin-bottom: 20px
}

.work .part .line {
    width: 60%;
    margin: auto;
    margin-bottom: 20px
}

.work .part .part-desc {
    font-size: 14px;
    color: #888;
    padding: 20px
}
*/