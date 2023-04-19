import HoursContainer from "./HoursContainer";
import ForecastSingleDay from "../components/ForecastSingleDay"

const ForecastContainer =({forecastSingleDay})=>{


    return(
        <div className="bg-blue-600  rounded-lg text-white">
            <h3 className="text-md font-medium flex pl-2">Saturday:</h3>
            <ForecastSingleDay forecastSingleDay={forecastSingleDay}/>
        </div>
    )
}

export default ForecastContainer;