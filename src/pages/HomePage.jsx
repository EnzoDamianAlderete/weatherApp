import React, { useContext } from "react";
import HeaderComponent from "../components/HeaderComponent";
import LocationComponent from "../components/LocationComponent";
import Navbar from "../components/Navbar";
import StatsComponent from "../components/StatsComponent";
import DaysContainer from "../containers/DaysContainer";
import HoursContainer from "../containers/HoursContainer";
import { AppContext } from "../context/AppContext";

const HomePage =()=>{

    const {daysWeek,dataLocation,currentData,currentDataIcon,dailyForecast,forecast} = useContext(AppContext);
    return(
        
            <div className=" overflow-hidden p-2 max-w-full flex flex-col justify-center align-middle">
            <LocationComponent dataLocation={dataLocation}/>
            <HeaderComponent daysWeek={daysWeek} currentData={currentData} currentDataIcon={currentDataIcon}/>
            <StatsComponent currentData={currentData}/>
            <h3 className="text-md font-medium flex pl-2">Today:</h3>
            <HoursContainer dailyForecast={dailyForecast}/>
            <h3 className="text-md font-medium flex pl-2">Next days:</h3>
            <DaysContainer daysWeek={daysWeek} forecast={forecast}/>
            <Navbar/>
        </div> 
        
        
    )
}

export default HomePage;