import React from 'react'
import useFetch from '../../hooks/useFetch'
import { useParams } from 'react-router-dom'
import DetailsBanner from './detailsBanner/DetailsBanner'

const Details = () => {
  // const {mediaType, id} = useParams();
  // const {data, loading} = useFetch(`/${mediaType}/${id}`)
  return (
    
    <div>
      <DetailsBanner></DetailsBanner>
    </div>
  )
}

export default Details