import './DayComponent.css'

const DayComponent =()=>{
    return(
        <div className="bg-neutral-900 rounded-2xl text-neutral-50 flex justify-around">
            <h4 className="text-md p-4">Monday</h4>

            <div className="flex">
                <p className=" text-md p-4">29° <span className='text-md text-blue-500'>22°</span></p>
            </div>

            
                <img 
                    className="icon"
                    src={`../img/Clear.svg`} 
                    alt="rain" />
            
        </div>
    )
}

export default DayComponent;