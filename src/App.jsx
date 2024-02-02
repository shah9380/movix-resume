import { useState, useEffect } from 'react'
import './App.css'
import {fetchDataFromApi} from './utils/api';
import { useDispatch, useSelector } from 'react-redux';
import { getApiConfiguration, getGenres } from './store/homeSlice';

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
    <>
      <header>{url.data?.total_pages}</header>
    </>
  )
}

export default App
