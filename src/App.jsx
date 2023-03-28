import './App.css';
import HeaderComponent from './components/HeaderComponent';
import InputComponent from './components/InputComponent';
import LocationComponent from './components/LocationComponent';
import Navbar from './components/Navbar';
import StatsComponent from './components/StatsComponent';
import DaysContainer from './containers/DaysContainer';

function App() {
  return (
    <div className='body flex flex-col bg-slate-100 min-h-full'>
      <InputComponent/>
      <LocationComponent/>
      <HeaderComponent/>
      <StatsComponent/> 
      <DaysContainer/>
      <Navbar/>
    </div>
  );
}

export default App;
