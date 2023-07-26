import './App.css';
import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from 'react-router-dom';

import HomePage from './pages/HomePage';
import DetailsPage from './pages/DetailsPage';
// import RouteLayout from './layout/RouteLayout';

const router = createBrowserRouter(
  createRoutesFromElements(
  <Route >
    <Route path="/" element={<HomePage />} />
    <Route path="/details" element={<DetailsPage />} />
  </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router}/>        
  );
}

export default App;
