import LocationComponent from "../components/LocationComponent";
import Navbar from "../components/Navbar";
import FavsLocationsContainer from "../containers/FavsLocationsContainer";


const ForecastPage =()=>{
    return(
        <div className="flex flex-col">
        <LocationComponent/>
        <FavsLocationsContainer/>
        <Navbar/>
        </div>
    )
}

export default ForecastPage;