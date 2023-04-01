
const LocationComponent =({dataLocation})=>{
    return(
        <h2 className="pt-2"><span className="font-bold">{dataLocation.name},</span>{dataLocation.country}</h2>
    )
}

export default LocationComponent;