import React, { useEffect, useRef } from "react";
import {
    BsFillArrowLeftCircleFill,
    BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import dayjs from "dayjs";

import ContentWrapper from "../contentWrapper/ContentWrapper";
import Img from "../../components/lazyLoading/Img";
import PosterFallback from "../../assets/no-poster.png";
import './Carousel.scss';
import CircleRating from "../circleRating/CircleRating";
import Genres from "../genres/Genres";

const Carousel = ({data, loading}) => {
    const carouselContainner = useRef();
    const {url} = useSelector((state)=> state.home);
    console.log(url.poster);
    console.log(data);
    const navigate = useNavigate();

    const navigation = (direction)=>{
        const container = carouselContainner.current;

        const scrollAmount = direction === "left" ? container.scrollLeft - (container.offsetWidth + 20) : container.scrollLeft + (container.offsetWidth + 20);

        container.scrollTo({
            left: scrollAmount,
            behaviour: "smooth"
        })
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
            {!loading ? (<div className="carouselItems" ref={carouselContainner}>
                {data?.map((item) => {
                    const posterUrl = item.poster_path ? url.poster + item.poster_path : PosterFallback;
                    return(
                       <div key={item.id} className="carouselItem" onClick={()=>{
                            navigate(`/${item.media_type}/${item.id}`)
                       }}>
                            <div className="posterBlock">
                                <Img src={posterUrl}></Img>
                                <CircleRating  rating={item.vote_average.toFixed(1)}></CircleRating>
                            </div>
                            <div className="textBlock">
                                <span className="title">
                                    {item.title || item.name}
                                </span>
                                <span className="date">
                                    {dayjs(item.first_air_date).format('MMM DD YYYY') || "N/A"}
                                </span>
                                {/* <Genres data={item.genre_ids.slice(0, 2)}></Genres> */}
                            </div>
                            
                       </div> 
                    )
                })}
            </div>):(<div className="loadingSkeleton">
                    {skItem()}
                    {skItem()}
                    {skItem()}
                    {skItem()}
                    {skItem()}
            </div>)}
        </ContentWrapper>
    </div>
  )
}

export default Carousel