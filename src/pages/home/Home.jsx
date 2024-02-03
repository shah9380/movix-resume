import React from 'react'
import HeroBanner from './heroBanner/HeroBanner'
import Trending from './trending/Trending'
import SwitchTabs from '../../components/switchTabs/SwitchTabs'
import Popular from './popular/Popular'
import TopRated from './topRated/TopRated'

const Home = () => {
  return (
    <div className='homePage'>
        <HeroBanner></HeroBanner>
        <Trending></Trending>
        <Popular></Popular>
        <TopRated></TopRated>
        <div style={{height: 1000}}></div>
    </div>
  )
}

export default Home