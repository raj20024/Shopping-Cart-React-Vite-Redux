import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Cart from './Pages/Cart'
import Nav from './Pages/Nav'
Nav

function App() {


  return (
    <>
    <Nav/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </>
  )
}

export default App
