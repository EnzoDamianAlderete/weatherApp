import "./HourComponent.css"

const HourComponent =({elemet})=>{
    return(
        <div className="flex flex-col card--hour">
            <h5 className="pt-2">{elemet.time.slice(10, 13)}HS</h5>

            <img
            className="h-12 w-12 img--icon__hour mt-1"
            src={elemet.condition.icon}
            alt="sun" />

            <p className="text-xl font-bold">{elemet.temp_c}°</p>
        </div>
    )
}

export default HourComponent;