import Navbar from "../components/Navbar";
import InputComponent from "../components/InputComponent";

const SearchPage =()=>{
    return(
        <div>
            <InputComponent/>
        <div className="h-screen flex flex-col align-middle justify-center">
        <h3 className=" text-slate-500 ">Search any location.</h3>
        <Navbar/>
        </div>
        </div>
        
    )
}

export default SearchPage;