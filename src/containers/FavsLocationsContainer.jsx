import HeaderComponent from "../components/HeaderComponent";
import StatsComponent from "../components/StatsComponent";
import HourContainer from "./HoursContainer";

const FavsLocationsContainer =()=>{
    return (
        <div className="bg-gray-700 ">
            <HeaderComponent/>
            <StatsComponent/>
            <HourContainer/>
        </div>
    )
}

export default FavsLocationsContainer;