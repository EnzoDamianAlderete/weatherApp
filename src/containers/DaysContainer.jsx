import DayComponent from "../components/DayComponent";

const DaysContainer =({forecast,daysWeek})=>{

    return(
        <div className="  bg-neutral-900 rounded-3xl mb-14">
            {forecast.map((element, index)=>{
                return(
                    <span key={index} >
                        <DayComponent index={index} daysWeek={daysWeek} element={element}/>
                    </span>
                    
                )
            })}
        </div>
        
    )
}

export default DaysContainer;