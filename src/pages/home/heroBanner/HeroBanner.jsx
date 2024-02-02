import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import useFetch from '../../../hooks/useFetch';

const HeroBanner = () => {
    const[banner,setBanner]=useState("");
    const[query,setQuery] = useState("");

    const navigate = useNavigate();

    const {data, loading} = useFetch("/movie/upcoming");
    useEffect(()=>{
        setBanner(data.results[Math.floor(Math.random() * 20)])
        console.log(banner, "banner");
    },[data])
    const searchQueryHandler = (e)=>{
        if(e.key === "Enter" && query.length > 0){
            navigate(`/search/${query}`);
        }
    }
  return (
    <div className="heroBanner">
        <div className="wrapper">
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
                    <button>Search</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeroBanner