import React , {useState , useEffect} from 'react';
import {PortfolioSec , PortfolioTitle , Span , PortfolioList , PortfolioItem , Box , Image , OverLay , OverLaySpan} from "./style.js";


import axios from "axios" ;

const Portfolio = () => {

    const [Images , setImages] = useState([]) ; 

    useEffect (() => {
        axios.get("js/data.json").then(res =>{
            setImages(res.data.portfolio)
        })
    } , [])

    const PortfolioImage = Images.map((imageItem) =>{
        return <Box key = {imageItem.id}>
        <Image src = {imageItem.image} alt = "" />
        <OverLay>
            <OverLaySpan>
                Show Image
            </OverLaySpan>
        </OverLay>
    </Box>
    })

    return (
        <PortfolioSec>
            <PortfolioTitle><Span>My</Span> Portfolio</PortfolioTitle>
            <PortfolioList>
                <PortfolioItem  active = "1" >All</PortfolioItem>
                <PortfolioItem>HTML</PortfolioItem>
                <PortfolioItem>Photoshop</PortfolioItem>
                <PortfolioItem>Wordpress</PortfolioItem>
                <PortfolioItem>Mobile</PortfolioItem>
            </PortfolioList>
            
            <div className ="box">
                {PortfolioImage}
            </div>
            
        </PortfolioSec>
    );
}

export default Portfolio;