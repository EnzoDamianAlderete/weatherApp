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
      const options = {
          method: 'GET',
          headers: {
              'X-RapidAPI-Key': '144a3cf0c0msh0c66d76d19b8f57p1949b4jsn0aa250a87484',
              'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
          }
      };
      
      fetch(`https://weatherapi-com.p.rapidapi.com/current.json?q=${ubication}`, options)
          .then(response => response.json())
          .then(response => 
              {
                  setDataLocation(response.location);
                  setCurrentData(response.current);
                  setCurrentDataIcon(response.current.condition.text);
              })
          .catch(err => console.error(err));

          fetch('https://weatherapi-com.p.rapidapi.com/forecast.json?q=corrientes&days=3', options)
          .then(response => response.json())
          .then(response =>{
              setForecast(response.forecast.forecastday);
              setDailyForecast(response.forecast.forecastday[0].hour);
              
          })
          .catch(err => console.error(err));
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
  setUbication}}>
            {children}
          </AppContext.Provider>
}