import HourComponent from "../components/HourCompoent";
import './HoursContainer.css';

const HourContainer =({dailyForecast})=>{
    // const hours =[01,02,03,04,05,06,07,08,09,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24];

    return(
        <>
        <div className="container--hours rounded-xl shadow-2xl m-2 mb-4">
            {dailyForecast.map((elemet, index)=>{
                return(
                    <span key={index}>
                        <HourComponent elemet={elemet}/>
                    </span>
                )
            })}
        </div>
        </>
        
    )
}

export default HourContainer;