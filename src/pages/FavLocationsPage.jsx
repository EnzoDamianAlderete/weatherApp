import FavLocationComponent from "../components/FavLocationComponent"
import Navbar from "../components/Navbar";
import InputComponent from "../components/InputComponent";

const FavLocationsPage =()=>{
    return(
        <div className="flex flex-wrap align-middle justify-around">
            <InputComponent />
            <div className="flex flex-wrap align-middle justify-around">
            <FavLocationComponent/>
            <FavLocationComponent/>
            <FavLocationComponent/>
            <FavLocationComponent/>
            </div>
            
            <Navbar/>
        </div>
    )
}

export default FavLocationsPage;