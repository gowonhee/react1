import React from 'react'

const Banner = ({popularList}) => {
    // console.log('popularList', `url(https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${popularList.backdrop_path})`)

  return (
    <div>
        <div className='homeTitle' 
            style={{backgroundImage : `url(https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${popularList.backdrop_path})`}}>
            <h1>{popularList.title} </h1>
            <h4>{popularList.overview}</h4>
        </div>
    </div>
  )
}

export default Banner