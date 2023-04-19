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
        <label className="relative w-full p-4 flex flex-col">
            <span className="sr-only">Search</span>
            <div className="flex gap-2">
            <input 
            onChange={(e)=>handleInputChange(e)}
            value={query}
            className="placeholder:text-slate-400 bg-white w-full border border-slate-300 rounded-3xl py-2 pl-9 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" 
            placeholder="Search for location" 
            type="text" 
            name="search"/>
            <button
            onClick={()=>onSearch()}
            className="bg-cyan-400 text-white p-2 rounded-full"
            >Search
            </button>
            </div>
            {query.length > 0 && (
            <ul>
                {results.map((result,index) => (
                <li className="bg-neutral-800 text-white p-2 hover:cursor-pointer w-9/12" 
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
        className="bg-emerald-400 text-white p-3 rounded-full self-center "
        onClick={currentLocation}
        >My location
        </button>
        </>
    )
}

export default InputComponent;