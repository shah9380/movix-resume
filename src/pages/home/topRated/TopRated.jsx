import React, { useEffect } from 'react'
import { useState } from 'react';
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper';
import '../Home.scss'
import SwitchTabs from '../../../components/switchTabs/SwitchTabs';
import useFetch from '../../../hooks/useFetch';
import Carousel from '../../../components/carousel/Carousel';

const TopRated = () => {
    const[endPoint,setEndPoint]=useState("movie");
    const {data, loading} = useFetch(`/${endPoint}/top_rated`);
    useEffect(()=>{
        console.log(data)
    },[data])
const onTabChange = (tab)=>{
    setEndPoint(tab === "Movies" ? "movie" : "tv");
}
  return (
    <div className='carouselSection'>
        <ContentWrapper>
            <span className='carouselTitle'>Top Rated</span>
            <SwitchTabs data={["Movies", "TV Shows"]} onTabChange={onTabChange}></SwitchTabs>
        </ContentWrapper>
        <Carousel data={data?.results} loading={loading}></Carousel>
    </div>
  )
}

export default TopRated;