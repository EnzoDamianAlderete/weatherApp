import React, { createContext, useEffect, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({children}) =>{
  const [dataLocation , setDataLocation] = useState([]);
  const [currentData , setCurrentData] = useState([]);
  const [currentDataIcon , setCurrentDataIcon] = useState([]);
  const [forecast , setForecast] = useState([]);
  const [dailyForecast , setDailyForecast] = useState([]);
  const [daysWeek,setDaysWeek]= useState([]);
  const [searchUbication,setSearchUbication]= useState([]);
  const [ubication, setUbication] = useState('london');
  const [loading, setLoading] = useState(true);
  
  const [capitals, setCapitals] = useState([]);
  const nameCapitals=['London','Washington','Moscow','Paris','Beijing','Buenos Aires']

  const {REACT_APP_KEY,REACT_APP_HOST,REACT_APP_URI_API} = process.env;
  

  function getDates() {
    const currentDate = new Date();
    const tomorrow = new Date();
    tomorrow.setDate(currentDate.getDate() + 1);
  
  
    const dayAfterTomorrow = new Date();
    dayAfterTomorrow.setDate(currentDate.getDate() + 2);
  
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  
    
    const currentDay = daysOfWeek[currentDate.getDay()];
    const tomorrowName = daysOfWeek[tomorrow.getDay()];
    const dayAfterTomorrowName = daysOfWeek[dayAfterTomorrow.getDay()];
  
    
    return [
      currentDay,
      tomorrowName,
      dayAfterTomorrowName
    ];
  }
      
  const dates = getDates();
  useEffect(()=>{
    setDaysWeek(dates);
  },[])


  useEffect(()=>{
    setLoading(true);
      const options = {
          method: 'GET',
          headers: {
              'X-RapidAPI-Key': `${REACT_APP_KEY}`,
              'X-RapidAPI-Host': `${REACT_APP_HOST}`
          }
      };
      
      fetch(`https://${REACT_APP_URI_API}/current.json?q=${ubication}`, options)
          .then(response => response.json())
          .then(response => 
              {
                  setDataLocation(response.location);
                  setCurrentData(response.current);
                  setCurrentDataIcon(response.current.condition.text);
              })
          .catch(err => console.error(err));

          fetch(`https://${REACT_APP_URI_API}/forecast.json?q=${ubication}&days=3`, options)
          .then(response => response.json())
          .then(response =>{
              setForecast(response.forecast.forecastday);
              setDailyForecast(response.forecast.forecastday[0].hour);
              
          })
          .catch(err => console.error(err));
    let arrayCapitals = []
    nameCapitals.map( cap =>{
      fetch(`https://${REACT_APP_URI_API}/current.json?q=${cap}`, options)
          .then(response => response.json())
          .then(response => 
              {
                arrayCapitals = arrayCapitals.concat(response);
                setCapitals(arrayCapitals);
              })
          .catch(err => console.error(err));
          })
    setTimeout(() => {
      setLoading(false);
    }, 1300);
  },[ubication])


    

  return < AppContext.Provider value={{
  searchUbication,
  setSearchUbication,
  daysWeek,
  dataLocation,
  currentData,
  currentDataIcon,
  forecast,
  dailyForecast,
  ubication, 
  capitals,
  loading,
  setLoading,
  setUbication}}>
            {children}
          </AppContext.Provider>
}