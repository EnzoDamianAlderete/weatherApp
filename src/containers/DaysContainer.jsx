import DayComponent from "../components/DayComponent";

const DaysContainer =()=>{
    return(
        <div className="w-11/12 mt-2 pl-3 p-2 bg-neutral-900 rounded-3xl mb-20">
            <DayComponent/>
            <DayComponent/>
            <DayComponent/>
        </div>
        
    )
}

export default DaysContainer;