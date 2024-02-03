import React, { useEffect } from 'react'
import { useState } from 'react';
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper';
import '../Home.scss'
import SwitchTabs from '../../../components/switchTabs/SwitchTabs';
import useFetch from '../../../hooks/useFetch';
import Carousel from '../../../components/carousel/Carousel';

const Trending = () => {
    const[endPoint,setEndPoint]=useState("day");
    const {data, loading} = useFetch(`/trending/all/${endPoint}`);
    useEffect(()=>{
        console.log(data)
    },[data])
const onTabChange = (tab)=>{
    setEndPoint(tab === "Day" ? "day" : "week");
}
  return (
    <div className='carouselSection'>
        <ContentWrapper>
            <span className='carouselTitle'>Trending</span>
            <SwitchTabs data={["Day", "Week"]} onTabChange={onTabChange}></SwitchTabs>
        </ContentWrapper>
        <Carousel data={data?.results} loading={loading}></Carousel>
    </div>
  )
}

export default Trending;