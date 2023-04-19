const ForecastSingleDay =({forecastSingleDay})=>{
    return(
        <div className="flex justify-around">
            <div className="flex">
                <svg width="30" height="30" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.32 17.4a1.8 1.8 0 1 1-2.4-1.698V13.8a.6.6 0 0 1 1.2 0v1.902a1.8 1.8 0 0 1 1.2 1.698Z"></path>
                <path d="M8.52 5.4a3 3 0 1 1 6 0v9.06a4.2 4.2 0 1 1-6 0V5.4Zm3-1.8a1.8 1.8 0 0 0-1.8 1.8v9.585l-.2.18a3 3 0 1 0 4 0l-.2-.18V5.4a1.8 1.8 0 0 0-1.8-1.8Z"></path>
                </svg>
            <h5 className="pt-1">Min:{forecastSingleDay.day.mintemp_c}°</h5>
            </div>

            <div className="flex">
                <svg width="30" height="30" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.32 17.4a1.8 1.8 0 0 1-3.452.715 1.801 1.801 0 0 1 1.052-2.412V10.2a.6.6 0 0 1 1.2 0v5.502a1.8 1.8 0 0 1 1.2 1.698Z"></path>
                <path d="M8.52 5.4a3 3 0 1 1 6 0v9.06a4.2 4.2 0 1 1-6 0V5.4Zm3-1.8a1.8 1.8 0 0 0-1.8 1.8v9.585l-.2.18a3 3 0 1 0 4 0l-.2-.18V5.4a1.8 1.8 0 0 0-1.8-1.8Z"></path>
                </svg>
                <h5 className="pt-1">Max:{forecastSingleDay.day.maxtemp_c}°</h5>
            </div>
            <div className="flex">
                <svg 
                width="30" 
                height="30" 
                fill="none" 
                stroke="currentColor" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg">
                <path d="m12 22.5 2.466-3.75"></path>
                <path d="m9.253 19.5 2.962-4.5"></path>
                <path d="M8.25 8.625A6.375 6.375 0 1 1 14.625 15h-7.5a4.125 4.125 0 1 1 1.34-8.025"></path>
                </svg>
                <h5 className="pt-1">Chance:{forecastSingleDay.day.daily_chance_of_rain}%</h5>
            </div>

            <div>
                <img src={forecastSingleDay.day.condition.icon} alt="" />
            </div>
            
            
        </div>
    )
}

export default ForecastSingleDay;

