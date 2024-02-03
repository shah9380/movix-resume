import React, { useEffect } from 'react'
import './Genres.scss'
import { useSelector } from 'react-redux'

const Genres = ({data}) => {
const {genres} = useSelector((state)=> state.home);
  return (
    <div style={{zIndex: "20"}} className="genres">
        {data?.map((g)=>{
            if(!genres[g]?.name) return;
            return(
                <div style={{zIndex: "20"}} key={g} className="genre">
                    {genres[g]?.name}
                </div>
            )
        })}
        <div>Hello</div>
    </div>
  )
}

export default Genres