import { Outlet } from 'react-router-dom';
import { Container } from 'react-bootstrap' 
import { Navbar } from './Navbar';

import { ShoppingCartProvider } from '../context/ShoppingCartContext';

export const Layout = () => {
  return (
    <>
    <ShoppingCartProvider>
      <Navbar />
      <Container>
        <Outlet />
      </Container>
    </ShoppingCartProvider>

    <footer>footer</footer>
    </>
  )
}