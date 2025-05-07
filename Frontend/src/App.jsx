import { Outlet } from 'react-router-dom'
import {Navbar, Footer} from '../config/importComponents'

function App() {
  return (
  <>
    <Navbar/>
    <Outlet/>
    <Footer/>
  </>
  )
}

export default App
