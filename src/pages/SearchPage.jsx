import Navbar from "../components/Navbar";
import InputComponent from "../components/InputComponent";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const SearchPage =()=>{

    const {ubication, setUbication} = useContext(AppContext)
    return(
        <div>
            <InputComponent setUbication={setUbication}/>
        <div className="h-screen flex flex-col align-middle justify-center">
        <h3 className=" text-slate-500 ">Search any location.</h3>
        <Navbar/>
        </div>
        </div>
        
    )
}

export default SearchPage;