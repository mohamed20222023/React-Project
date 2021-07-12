import React , {Component} from 'react';
import {ProfileSkill , ProfileSec , ProfileTitle , ProfileTitleSpan , ProfileList , ProfileItem , ProfileItemSpan,
    ProfileItemSpanWeb , Skills , SkillsDesc ,Bar ,BarTitle , BarPerc ,BarParent , BarParentSpan ,  } from "./style.js"

import axios from "axios";

class Profile extends Component {
    state = { 
        first : [],
        second : []
     } 


     componentDidMount () {
         axios.get("js/data.json").then((res) => {
             this.setState({
                 first : res.data.profile1 , 
                 second : res.data.profile ,
             })
         })
     }

    render() { 

        const first = this.state.first ; 
        const ProfileF = first.map(item =>{
            return <ProfileItem key = {item.id}>
                        <ProfileItemSpan>{item.title}</ProfileItemSpan>
                        {item.body}
                    </ProfileItem>
        } )

        const second = this.state.second ; 
        const ProfileS = second.map(item => {
            return <Bar key = {item.id}>
                        <BarTitle>{item.name}</BarTitle>
                        <BarPerc>{item.percentage}</BarPerc>
                        <BarParent>
                            <BarParentSpan sp = {item.id} ></BarParentSpan>
                        </BarParent>
                    </Bar>
        })

    return (
        <ProfileSkill>
            <div className="container">
                <ProfileSec>
                    <ProfileTitle><ProfileTitleSpan>My </ProfileTitleSpan>Profile</ProfileTitle>
                    <ProfileList>
                        {ProfileF}
                        <ProfileItem>
                            <ProfileItemSpan>Website</ProfileItemSpan>
                            <ProfileItemSpanWeb href = "https://www.google.com/" target = "_blank">www.google.com</ProfileItemSpanWeb>
                        </ProfileItem>
                    </ProfileList>
                </ProfileSec>
                
                <Skills>
                    <ProfileTitle>Some <ProfileTitleSpan>skills</ProfileTitleSpan></ProfileTitle>
                    <SkillsDesc>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis similique.
                    </SkillsDesc>
                    {ProfileS}
                </Skills>
                
            </div>
        </ProfileSkill>
    );}
}


export default Profile;