import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import useFetch from '../../../hooks/useFetch';
import { useSelector } from 'react-redux';
import './HeroBanner.scss';

import Img from '../../../components/lazyLoading/img';
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper';

const HeroBanner = () => {
    const[banner,setBanner]=useState("");
    const[query,setQuery] = useState("");
    const{ url } = useSelector((state)=> state.home);
    const navigate = useNavigate();

    const {data, loading} = useFetch("/movie/upcoming");
    useEffect(()=>{
            const bg = url?.backdrop + data?.results[Math.floor(Math.random() * 20)]?.backdrop_path ;
            setBanner(bg);
    },[data, url])
    const searchQueryHandler = (e)=>{
        if(e.key === "Enter" && query.length > 0){
            navigate(`/search/${query}`);
        }
    }
  return (
    <div className="heroBanner">
        {!loading && <div className="backdrop-img">
            <Img src={banner+""} className="lazy-load"></Img>
        </div>}
        <div className="opacity-layer"></div>
        <ContentWrapper>
            <div className="heroBannerContent">
                    <span className="title">Welcome</span>
                    <span className="subTitle">
                        Millions of Movies, TV shows and people to discover.
                        Explore now.
                    </span>
                    <div className="searchInput">
                        <input type="text" 
                            placeholder='Search for a movie or tv show....' 
                            onKeyUp={searchQueryHandler}
                            onChange={(e)=>setQuery(e.target.value)}  
                        />
                        <button className='button'>Search</button>
                    </div>
                </div>
        </ContentWrapper>

    </div>
  )
}

export default HeroBanner