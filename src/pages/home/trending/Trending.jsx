import React from 'react'
import { useState } from 'react';
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper';
import '../Home.scss'
import SwitchTabs from '../../../components/switchTabs/SwitchTabs';
import useFetch from '../../../hooks/useFetch';

const Trending = () => {
    const[endPoint,setEndPoint]=useState("day");
    const {data, loading} = useFetch(`/trending/all/${endPoint}`);
const onTabChange = ()=>{
    setEndPoint(tab === "Day" ? "day" : "week");
}
  return (
    <div className='carouselSection'>
        <ContentWrapper>
            <span className='carouselTitle'>Trending</span>
            <SwitchTabs data={["Day", "Week"]} onTabChange={onTabChange}></SwitchTabs>
        </ContentWrapper>
    </div>
  )
}

export default Trending;