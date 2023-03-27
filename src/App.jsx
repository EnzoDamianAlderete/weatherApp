import './App.css';
import HeaderComponent from './components/HeaderComponent';
import LocationComponent from './components/LocationComponent';
import StatsComponent from './components/StatsComponent';

function App() {
  return (
    <div className='body flex flex-col bg-slate-100 min-h-full'>
      <LocationComponent/>
      <HeaderComponent/>
      <StatsComponent/>
    </div>
  );
}

export default App;
