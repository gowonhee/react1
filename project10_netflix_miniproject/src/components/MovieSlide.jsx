import React from 'react'
import MovieCard from './MovieCard'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


const MovieSlide = ({postCard}) => {

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },

        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },

        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },

        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    console.log(postCard);
    

    return (
        <div className='slide'>
            <h1>Popular Movie</h1>
            <Carousel responsive={responsive}>
                {postCard ? postCard.title.map(item => (
                        <MovieCard key={item.id} item={item} />
                    )) : <></>}
                    {/* <div>Item1</div>
                    <div>Item1</div>
                    <div>Item1</div>
                    <div>Item1</div> */}
            </Carousel>

            <h1>Top rated Movie</h1>
            <Carousel responsive={responsive}>
                <div>Item 1</div>
                <div>Item 2</div>
                <div>Item 3</div>
                <div>Item 4</div>
            </Carousel>

            <h1>Upcoming Movie</h1>
            <Carousel responsive={responsive}>
                <div>Item 1</div>
                <div>Item 2</div>
                <div>Item 3</div>
                <div>Item 4</div>
            </Carousel>
        </div>
    )
}

export default MovieSlide