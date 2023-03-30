import './App.css';
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import FavLocationsPage from './pages/FavLocationsPage';
import ForecastPage from './pages/ForecastPage';
import Page404 from './pages/Page404';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>,
  },
  {
    path: "/search",
    element: <SearchPage/>,
  },
  {
    path: "/favs-locations",
    element: <FavLocationsPage/>,
  },
  {
    path: "/forecast",
    element: <ForecastPage/>,
  },
  {
    path: "*",
    element: <Page404/>,
  },
]);

function App() {
  return (
    <div className='body flex flex-row flex-wrap bg-slate-100 App'>
       <RouterProvider router={router} />
    </div>
  );
}

export default App;
