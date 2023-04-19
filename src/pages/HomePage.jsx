import React, { useContext } from "react";
import HeaderComponent from "../components/HeaderComponent";
import LocationComponent from "../components/LocationComponent";
import Navbar from "../components/Navbar";
import StatsComponent from "../components/StatsComponent";
import DaysContainer from "../containers/DaysContainer";
import HoursContainer from "../containers/HoursContainer";
import { AppContext } from "../context/AppContext";
import LoaderComponent from "../components/LoaderComponent";

const HomePage =()=>{

    const {daysWeek,dataLocation,currentData,currentDataIcon,dailyForecast,forecast,loading,setLoading} = useContext(AppContext);

    return(
        <>
        {loading ? <LoaderComponent/> : <div className=" overflow-hidden p-2 max-w-full flex flex-col justify-center align-middle">
            <LocationComponent dataLocation={dataLocation}/>
                <div className="flex flex-col md:flex-row">
                <HeaderComponent daysWeek={daysWeek} currentData={currentData} currentDataIcon={currentDataIcon}/>
                <StatsComponent currentData={currentData}/>
                </div>
            <h3 className="text-md font-medium flex pl-2">Today:</h3>
            <HoursContainer dailyForecast={dailyForecast}/>
            <h3 className="text-md font-medium flex pl-2">Next days:</h3>
            <DaysContainer daysWeek={daysWeek} forecast={forecast}/>
            <Navbar/>
        </div> }
        
        </>
        
        
        
    )
}

export default HomePage;