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
  },[])

  const apiTesting = ()=>{
    fetchDataFromApi('/movie/popular').then((res)=>{
      console.log(res);
      dispatch(getApiConfiguration(res));
    })
  }

  return (
    <BrowserRouter>
      {/* <Header></Header> */}
        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/:mediaType/:id' element={<Details />}></Route>
            <Route path='/search/:query' element={<SearchResults />}></Route>
            <Route path='/explore/:mediaType' element={<Explore></Explore>}></Route>
            <Route path='*' element={<Error></Error>}></Route>
        </Routes>
      {/* <Footer></Footer> */}
    </BrowserRouter>
  )
}

export default App
