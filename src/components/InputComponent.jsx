import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const InputComponent =({ubication, setUbication})=>{

        const [query, setQuery] = useState('');
        const [results, setResults] = useState([]);
        const navigate = useNavigate();

        const currentLocation =()=>{
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function(position) {
                  let latitud = position.coords.latitude;
                  let longitud = position.coords.longitude;
                  setUbication(`${latitud},${longitud}`);
                });
              } else {
                console.log("Geolocalización no es soportada por este navegador.");
              }
              navigate('/');
        }
      
        useEffect(() => {
          if (query.length > 3) {
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': '144a3cf0c0msh0c66d76d19b8f57p1949b4jsn0aa250a87484',
                    'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
                }
            };
            
            fetch(`https://weatherapi-com.p.rapidapi.com/search.json?q=${query}`, options)
                .then(response => response.json())
                .then(response => {
                    console.log(response)
                    setResults(response);
                })
                .catch(err => console.error(err));
          } else {
            setResults([]);
          }
        }, [query]);
      
        const handleInputChange = (event) => {
          setQuery(event.target.value);
        }
      
         const handleResultClick = (result) => {
           setQuery(result);
           setResults([]);
           console.log(`en resutls queda esto: ${results}`)
           console.log(`en query queda esto: ${query}`)
           setUbication(query);
         }
        
         const onSearch=()=>{
            navigate("/")
         }
           

    return(
        <>
        <label className="relative block w-full p-4 ">
            <span className="sr-only">Search</span>
            <span
            onClick={()=>onSearch()}
            className=" text-slate-400 absolute inset-y-0 right-0 flex items-center pr-8">
            <svg 
            width="26" 
            height="26" 
            fill="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg">
                <path 
                d="M15.755 14.255h-.79l-.28-.27a6.471 6.471 0 0 0 1.57-4.23 6.5 6.5 0 1 0-6.5 6.5c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99 1.49-1.49-4.99-5Zm-6 0c-2.49 0-4.5-2.01-4.5-4.5s2.01-4.5 4.5-4.5 4.5 2.01 4.5 4.5-2.01 4.5-4.5 4.5Z"></path>
            </svg>
            </span>
            <input 
            onChange={(e)=>handleInputChange(e)}
            value={query}
            className="placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-3xl py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" 
            placeholder="Search for location" 
            type="text" 
            name="search"/>
            {query.length > 0 && (
            <ul>
                {results.map((result,index) => (
                <li className="bg-neutral-800 text-white p-2" 
                key={index} 
                onClick={()=>handleResultClick(`${result.name},${result.country}`)}
                >
                    {result.name},{result.country}
                </li>
                ))}
            </ul>
            )}
        </label>

        <button
        className="bg-emerald-400 text-white p-3 rounded-full"
        onClick={currentLocation}
        >my ubication</button>
        </>
    )
}

export default InputComponent;