import './StatsComponent.css';

const StatsComponent =()=>{
    return(
        <div className="Stats flex bg-slate-50 justify-around text-center py-4 rounded-xl m-4 drop-shadow-lg">
            <div className="">
                <h4 className="text-slate-300 font-bold">Wind</h4>
                <p className="text-sltone-900 font-bold text-xl">33m/h</p>
            </div>

            <div className="">
                <h4 className="text-slate-300 font-bold">Humidity</h4>
                <p className="text-sltone-900 font-bold text-xl">23%</p>
            </div>

            <div className="">
                <h4 className="text-slate-300 font-bold">Visibility</h4>
                <p className="text-sltone-900 font-bold text-xl">23km</p>
            </div>

            
        </div>
    )
}

export default StatsComponent;