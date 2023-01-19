import { 
  Route, 
  Navigate, 
  RouterProvider, 
  createBrowserRouter, 
  createRoutesFromElements 
} from 'react-router-dom';

import { Layout } from './components/Layout'
import { Aboutpage } from './pages/Aboutpage';
import { Homepage } from './pages/Homepage';
import { Storepage } from './pages/Storepage';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout />}>
    <Route index element={<Homepage />} />
    <Route path='store' element={<Storepage />} />
    <Route path='about' element={<Aboutpage />} />
  </Route>
))

export const App = () => <RouterProvider router={router} />
