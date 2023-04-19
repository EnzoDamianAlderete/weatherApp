import { useEffect, useState } from "react";
import "./FavLocationComponent.css"

const FavLocationComponent =({elemet})=>{


    const [countryName, setCountryName] = useState("");

    useEffect(() => {
      const getCountryName = () => {
        if (elemet.location.country === "United States of America") {
          return "USA";
        } else {
          return elemet.location.country;
        }
      };
      setCountryName(getCountryName());
    }, [elemet.location.country]);
  

    return(
        <div className="bg-neutral-900 text-yellow-50 p-4 rounded-2xl mt-4 md:p-8">
            <div className="flex">
                <div className="text-3xl md:text-5xl">
                    <h3>{parseInt(elemet.current.temp_c)}°</h3>
                </div>
                <img
                 src={`../img/${elemet.current.condition.text}.svg`}
                 alt="icon" />
            </div>

            <div className="text-xs md:text-2xl">
                <h3>{elemet.location.name}</h3>
                <h4 className="md:text-lg">{countryName}</h4>
                
            </div>

            <div className="flex justify-between text-xs md:text-xl">
                <div className="flex">
                    <svg width="12" height="12" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2c-5.33 4.55-8 8.48-8 11.8 0 4.98 3.8 8.2 8 8.2s8-3.22 8-8.2c0-3.32-2.67-7.25-8-11.8Zm0 18c-3.35 0-6-2.57-6-6.2 0-2.34 1.95-5.44 6-9.14 4.05 3.7 6 6.79 6 9.14 0 3.63-2.65 6.2-6 6.2Zm-4.17-6c.37 0 .67.26.74.62.41 2.22 2.28 2.98 3.64 2.87.43-.02.79.32.79.75 0 .4-.32.73-.72.75-2.13.13-4.62-1.09-5.19-4.12a.75.75 0 0 1 .74-.87Z"></path>
                    </svg>
                    <p>{elemet.current.precip_in}%</p>
                </div>

                <div className="flex ">
                    <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.4 4.32a3 3 0 0 0-3 3 .6.6 0 1 1-1.2 0 4.2 4.2 0 1 1 4.2 4.2H3a.6.6 0 1 1 0-1.2h14.4a3 3 0 1 0 0-6ZM9 5.52a1.2 1.2 0 0 0-1.2 1.2.6.6 0 0 1-1.2 0A2.4 2.4 0 1 1 9 9.12H3a.6.6 0 0 1 0-1.2h6a1.2 1.2 0 1 0 0-2.4Zm-6.6 7.8a.6.6 0 0 1 .6-.6h12.05a3.6 3.6 0 1 1-3.6 3.6.6.6 0 1 1 1.2 0 2.4 2.4 0 1 0 2.4-2.4H3a.6.6 0 0 1-.6-.6Z"></path>
                    </svg>
                    <p>{elemet.current.wind_kph}km/h</p>
                </div>
            </div>
            
        </div>
    )
}

export default FavLocationComponent;