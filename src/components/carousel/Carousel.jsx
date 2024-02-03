import React, { useEffect, useRef } from "react";
import {
    BsFillArrowLeftCircleFill,
    BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import dayjs from "dayjs";

import ContentWrapper from "../contentWrapper/ContentWrapper";
import Img from "../lazyLoading/img";
import PosterFallback from "../../assets/no-poster.png";
import './Carousel.scss';

const Carousel = ({data, loading}) => {
    const carouselContainner = useRef();
    const {url} = useSelector((state)=> state.home);
    console.log(url.poster);
    console.log(data);
    const navigate = useNavigate();

    useEffect(()=>{
        console.log(data);
    },[data])
    const navigation = (direction)=>{
        
    }
    const skItem = ()=>{
        return(
            <div className="skeletonItem">
                <div className="posterBlock skeleton"></div>
                <div className="textBlock">
                    <div className="title skeleton"></div>
                    <div className="date skeleton"></div>
                </div>
            </div>
        )
    }
    const arr = [1,2,3,4,5];
  return (
    <div className="carousel">
        <ContentWrapper>
            <BsFillArrowLeftCircleFill 
                className="carouselLeftNav arrow"
                onClick={()=> navigation("left")}
            >
            </BsFillArrowLeftCircleFill>
            <BsFillArrowRightCircleFill
                className="carouselRightNav arrow"
                onClick={()=> navigation("right")}
            >
            </BsFillArrowRightCircleFill>
            {!loading ? (<div className="carouselItems">
                {data?.map((item) => {
                    const posterUrl = item.poster_path ? url.poster + item.poster_path : PosterFallback;
                    return(
                       <div key={item.id} className="carouselItem">
                            <div className="posterBlock">
                                <Img src={posterUrl}></Img>
                            </div>
                            <div className="textBlock">
                                <span className="title">
                                    {item.title || item.name}
                                </span>
                                <span className="date">
                                    {dayjs(item.first_air_date).format('MMM DD YYYY') || "N/A"}
                                </span>
                            </div>
                       </div> 
                    )
                })}
            </div>):(<div className="loadingSkeleton">
                    {
                        arr.map(()=>{
                            return <div className="skeletonItem">
                            <div className="posterBlock skeleton"></div>
                            <div className="textBlock">
                                <div className="title skeleton"></div>
                                <div className="date skeleton"></div>
                            </div>
                        </div>
                        })
                    }
            </div>)}
        </ContentWrapper>
    </div>
  )
}

export default Carousel