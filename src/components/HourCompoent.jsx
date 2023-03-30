import "./HourComponent.css"

const HourComponent =()=>{
    return(
        <div className="flex text-center flex-col align-middle justify-center card--hour">
            <h5 className="pt-2">10 AM</h5>

            <img
            className="h-12 w-12"
            src={`../img/Heavy rain.svg`}
            alt="sun" />

            <p className="text-xl font-bold">19°</p>
        </div>
    )
}

export default HourComponent;