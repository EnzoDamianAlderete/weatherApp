import FavLocationComponent from "../components/FavLocationComponent"
import Navbar from "../components/Navbar";
import InputComponent from "../components/InputComponent";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";

const FavLocationsPage =()=>{

    const {capitals} = useContext(AppContext);

    console.log('capi desde page',capitals)
    return(
        <div className="flex flex-col">
        <h2 className="font-bold text-3xl mb-4">Important capitals on the world</h2>
        <div className="flex flex-wrap">
            <div className="flex flex-wrap align-middle justify-around gap-4">
                {capitals.map((elemet, index) =>{
                    return(
                        <span key={index}>
                            <FavLocationComponent elemet={elemet} />
                        </span>
                    )
                })}
            
            </div>
            
            <Navbar/>
        </div>
        </div>
        
    )
}

export default FavLocationsPage;