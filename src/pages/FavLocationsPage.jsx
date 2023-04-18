import FavLocationComponent from "../components/FavLocationComponent"
import Navbar from "../components/Navbar";
import InputComponent from "../components/InputComponent";

const FavLocationsPage =()=>{
    return(
        <div className="flex flex-col">
        <h2 className="font-bold text-3xl mb-4">Important capitals on the world</h2>
        <div className="flex flex-wrap">
            <div className="flex flex-wrap align-middle justify-around gap-4">
            <FavLocationComponent/>
            <FavLocationComponent/>
            <FavLocationComponent/>
            <FavLocationComponent/>
            </div>
            
            <Navbar/>
        </div>
        </div>
        
    )
}

export default FavLocationsPage;