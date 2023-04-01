import HoursContainer from "./HoursContainer";
import ForecastSingleDay from "../components/ForecastSingleDay"
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const ForecastContainer =()=>{

    const {dailyForecast} = useContext(AppContext);

    return(
        <div className="bg-blue-600  rounded-lg text-white">
            <h3 className="text-md font-medium flex pl-2">Saturday:</h3>
            <ForecastSingleDay/>
            <HoursContainer dailyForecast={dailyForecast}/>
        </div>
    )
}

export default ForecastContainer;