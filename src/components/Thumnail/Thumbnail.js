import React from 'react';
import moviesgrid from '../MoviesGrid/MoviesGrid';
// Styles
import { Image } from './Thumbnail.styles';

const Thumbnail = ({ image, movieId, clickable }) => {
    return (
        <div> 
            { clickable 
                ? <a href=""><Image src={image} alt={movieId} /></a> 
                : <Image src={image} alt={movieId} /> 
            
        }
            {/* <Image src={image} alt={movieId} /> */}
        </div>
    )
}

export default Thumbnail;
