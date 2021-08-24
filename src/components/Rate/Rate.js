import React, { useState } from "react";
// Component
import Button from "../Button/Button";


const Rate = ({ callback }) => {
    const [rateValue, setRateValue] = useState(5);
    
    return (
        <div>
            <input 
                type="range" 
                min='1'
                max='10'
                value={rateValue}
                onChange={e => setRateValue(e.currentTarget.value)}
                />
            {rateValue}
            <div>
                <button onClick={() => callback(rateValue)}>Rate</button>   
            </div>
        </div>
        
    )
}

export default Rate;
