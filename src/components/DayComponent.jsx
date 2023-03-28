import './DayComponent.css'

const DayComponent =()=>{
    return(
        <div className="bg-neutral-900 text-neutral-50 flex w-72 justify-between">
            <h4 className="font-bold text-xl pt-2 pl-2">Monday</h4>

            <div className="flex align-middle justify-center">
                <p className="font-bold text-xl pt-3">29°</p>
                <img 
                className="icon"
                src={`../img/Clear.svg`} 
                alt="rain" />
            </div>
        </div>
    )
}

export default DayComponent;