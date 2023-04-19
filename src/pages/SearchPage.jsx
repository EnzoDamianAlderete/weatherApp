import Navbar from "../components/Navbar";
import InputComponent from "../components/InputComponent";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const SearchPage =()=>{

    const {ubication, setUbication} = useContext(AppContext)
    return(
        <div className="flex flex-col">
            <InputComponent setUbication={setUbication}/>
            <div className="flex flex-col ">
                <h3 className=" text-slate-500 mt-80 mb-40">Search any location.</h3>
                <Navbar/>
            </div>
        </div>
        
    )
}

export default SearchPage;