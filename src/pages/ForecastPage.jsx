import { useContext } from "react";
import LocationComponent from "../components/LocationComponent";
import Navbar from "../components/Navbar";
import ForecastContainer from "../containers/ForecastContainer";
import { AppContext } from "../context/AppContext";

const ForecastPage =()=>{
    const {forecast,dataLocation,daysWeek} = useContext(AppContext);
    return(
        <div className="overflow-hidden p-2 max-w-full flex flex-col justify-center align-middle">
         <LocationComponent dataLocation={dataLocation}/>
        {forecast.map((forecastSingleDay,index) =>{
            return(
                <span key={index}>
                    <ForecastContainer index={index} daysWeek={daysWeek} forecastSingleDay={forecastSingleDay}/>
                </span>
            )
        })}
        <Navbar/>
        </div>
    )
}

export default ForecastPage;