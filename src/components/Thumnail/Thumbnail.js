import React from 'react';
import { Link } from 'react-router-dom';
// Styles
import { Image } from './Thumbnail.styles';

const Thumbnail = ({ image, movieId, clickable }) => {
    return (
        <div> 
            { clickable 
                ?   <Link to={`/${movieId}`}>
                        <Image src={image} alt={movieId} />
                    </Link> 
                : <Image src={image} alt={movieId} /> 
            
        }
            {/* <Image src={image} alt={movieId} /> */}
        </div>
    )
}

export default Thumbnail;
