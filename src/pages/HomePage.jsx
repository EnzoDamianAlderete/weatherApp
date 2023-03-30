import React from "react";
import HeaderComponent from "../components/HeaderComponent";
import LocationComponent from "../components/LocationComponent";
import Navbar from "../components/Navbar";
import StatsComponent from "../components/StatsComponent";
import DaysContainer from "../containers/DaysContainer";
import HoursContainer from "../containers/HoursContainer";

const HomePage =()=>{
    return(
        <div className=" overflow-hidden p-2 max-w-full flex flex-col justify-center align-middle">
            <LocationComponent/>
            <HeaderComponent/>
            <StatsComponent/>
            <HoursContainer/>
            <DaysContainer/>
            <Navbar/>
        </div>
    )
}

export default HomePage;