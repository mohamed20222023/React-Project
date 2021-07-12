import React, { Component } from 'react';
import axios from "axios";


import { WorkSec, Worktitle, WorkTitSpan, PartF, Part, Icon, PartTitle, Line, PartDesc } from "./style.js"

class Work extends Component {

    state = {
        works: [],
    }


    componentDidMount() {
        axios.get("js/data.json").then(res => {
            this.setState({
                works: res.data.works
            })
        })
    }

    render() {


        const work = this.state.works.map((workItem) =>
            <Part first={workItem.id} key={workItem.id}>
                <Icon><i className={workItem.icon_name}></i></Icon>
                <PartTitle>{workItem.title}</PartTitle>
                <Line />
                <PartDesc>{workItem.body}</PartDesc>
            </Part>
        )

        return (
            <WorkSec>
                <div className="container">
                    <Worktitle><WorkTitSpan>My</WorkTitSpan> Work</Worktitle>
                    {work}

                </div>
            </WorkSec >);

    }
}

export default Work;