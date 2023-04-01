import './DayComponent.css'

const DayComponent =({element,daysWeek,index})=>{
    
    return(
        <div className="bg-neutral-900 rounded-2xl text-neutral-50 flex justify-around">
            <h4 className="text-lg p-4">{daysWeek[index]}</h4>

            <div className="flex">
                <p className=" text-md p-4">{element.day.maxtemp_c}° <span className='text-md text-blue-500'>{element.day.mintemp_c}°</span></p>
            </div>

            
                <img 
                    className="icon"
                    src={element.day.condition.icon} 
                    alt="icon" />
            
        </div>
    )
}

export default DayComponent;