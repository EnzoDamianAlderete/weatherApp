import HoursContainer from "./HoursContainer";
import ForecastSingleDay from "../components/ForecastSingleDay"

const ForecastContainer =({forecastSingleDay,daysWeek,index})=>{


    return(
        <div className="bg-blue-600  rounded-lg text-white">
            <ForecastSingleDay index={index} daysWeek={daysWeek} forecastSingleDay={forecastSingleDay}/>
        </div>
    )
}

export default ForecastContainer;