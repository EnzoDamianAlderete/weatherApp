import React from "react";
import './HeaderComponent.css';

const HeaderComponent =({daysWeek,currentData,currentDataIcon})=>{

    return(
        <div className="headerToday drop-shadow-lg h-full md:w-full md:m-4">
            <div>
                <div>
                    <img src={`../img/${currentDataIcon}.svg`} alt="icon" />
                </div>

                <div>
                    <h2 className="Today text-2xl">{currentDataIcon}</h2>
                    <p className="Day mb-4">{daysWeek[0]}</p>
                </div>
            </div>

            <div>
                <div className="mediaTemp-today">
                    {currentData.temp_c}°
                </div>
                <div className="feelsLike">
                    Feels like {currentData.feelslike_c}°
                </div>
                
            </div>
        </div>
    )
}

export default HeaderComponent;