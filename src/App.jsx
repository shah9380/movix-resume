import { useState, useEffect } from 'react'
import './App.css'
import {fetchDataFromApi} from './utils/api';

import { BrowserRouter, Routes, Route } from 'react-router-dom';


import { useDispatch, useSelector } from 'react-redux';
import { getApiConfiguration, getGenres } from './store/homeSlice';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import Explore from './pages/explore/Explore';
import Details from './pages/details/Details';
import SearchResults from './pages/searchResults/SearchResults';
import Error from './pages/error/Error';

function App() {
  const dispatch = useDispatch();
  const {url} = useSelector((state) => state.home);
  useEffect(()=>{
      apiTesting();
      genresCall();
  },[])

  const apiTesting = ()=>{
    fetchDataFromApi('/configuration').then((res)=>{
      console.log(res.data.images.secure_base_url);
      const url = {
        backdrop: res.data.images.secure_base_url + "original",
        poster: res.data.images.secure_base_url + "original",
        profile: res.data.images.secure_base_url + "original",
      }
      dispatch(getApiConfiguration(url));
    })
  }

  const genresCall = async ()=>{{
      let promises = [];
      let endPoints = ["tv", "movie"];
      let allGenres = {};

      endPoints.forEach((url)=>{
          promises.push(fetchDataFromApi(`/genre/${url}/list`));
      })


      const data = await Promise.all(promises);
      data.map((item)=>{
        return item.data.genres.map((item)=>(allGenres[item.id] = item))
      })
      dispatch(getGenres(allGenres));
  }}

  return (
    <BrowserRouter>
      <Header></Header>
        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/:mediaType/:id' element={<Details />}></Route>
            <Route path='/search/:query' element={<SearchResults />}></Route>
            <Route path='/explore/:mediaType' element={<Explore></Explore>}></Route>
            <Route path='*' element={<Error></Error>}></Route>
        </Routes>
      <Footer></Footer>
    </BrowserRouter>
  )
}

export default App
