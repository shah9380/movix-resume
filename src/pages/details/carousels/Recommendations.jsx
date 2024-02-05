import React, { useEffect } from 'react'

import '../../home/Home.scss'

import useFetch from '../../../hooks/useFetch';
import Carousel from '../../../components/carousel/Carousel';
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper';

const Recommendations = ({mediaType, id}) => {
    const {data, loading, error} = useFetch(`/${mediaType}/${id}/recommendations`);
    
    const title = mediaType === "tv" ? "Recommended TV Shows" : "Recommended Movies";

  return (
        <>
        {data?.results?.length && <div className='carouselSection'>
                <ContentWrapper>
              {title && <span className='carouselTitle'>{title}</span>}
          </ContentWrapper><Carousel title={title} data={data?.results} loading={loading} endpoint={mediaType}></Carousel>
            </div>}
        </>
  )
}

export default Recommendations;