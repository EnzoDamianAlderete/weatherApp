const StatsComponent =({currentData})=>{
    return(
        <div className="flex md:flex-col md:p-4 bg-slate-50 justify-around text-center py-4 rounded-xl my-4 drop-shadow-lg">
            <div className="">
                <h4 className="text-slate-300 font-bold">Wind</h4>
                <p className="text-sltone-900 font-bold text-xl">{currentData.wind_mph}m/h</p>
            </div>

            <div className="">
                <h4 className="text-slate-300 font-bold">Humidity</h4>
                <p className="text-sltone-900 font-bold text-xl">{currentData.humidity}%</p>
            </div>

            <div className="">
                <h4 className="text-slate-300 font-bold">Visibility</h4>
                <p className="text-sltone-900 font-bold text-xl">{currentData.vis_km}km</p>
            </div>

            
        </div>
    )
}

export default StatsComponent;