import React from "react";
import './HeaderComponent.css';

const HeaderComponent =()=>{
    return(
        <div className="headerToday drop-shadow-lg h-full">
            <div>
                <div>
                    <img src={`../img/Heavy rain.svg`} alt="rain" />
                </div>

                <div>
                    <h2 className="Today text-2xl">Heavy Rain</h2>
                    <p className="Day mb-4">Monday</p>
                </div>
            </div>

            <div>
                <div className="mediaTemp-today">
                    29°
                </div>
                <div className="feelsLike">
                    Feels like 30°
                </div>
                
            </div>
        </div>
    )
}

export default HeaderComponent;