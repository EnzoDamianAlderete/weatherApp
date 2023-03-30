import HourComponent from "../components/HourCompoent";
import './HoursContainer.css';

const HourContainer =()=>{

    return(
        <>
        <h3 className="text-md font-medium">Today:</h3>
        <div className="container--hours rounded-xl shadow-2xl m-2 ">
            <HourComponent/>
            <HourComponent/>
            <HourComponent/>
            <HourComponent/>
            <HourComponent/>
            <HourComponent/>
            <HourComponent/>
            <HourComponent/>
        </div>
        </>
        
    )
}

export default HourContainer;