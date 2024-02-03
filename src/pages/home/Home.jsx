import React from 'react'
import HeroBanner from './heroBanner/HeroBanner'
import Trending from './trending/Trending'
import SwitchTabs from '../../components/switchTabs/SwitchTabs'

const Home = () => {
  const onTabChange =()=>{

  }
  return (
    <div className='homePage'>
        <HeroBanner></HeroBanner>
        <Trending></Trending>
        <div style={{height: 1000}}></div>
        <SwitchTabs data={["day", "week"]} onTabChange={onTabChange}></SwitchTabs>
    </div>
  )
}

export default Home