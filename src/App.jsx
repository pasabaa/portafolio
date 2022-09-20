import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/home/HomePage'
import './App.css'
import Development from './pages/development/Development'
import About from './pages/about/About'

function App() {


  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/portafolio' element={<HomePage/>}/>
        <Route path='/portafolio/development' element={<Development/>}/>
        <Route path='/portafolio/about' element={<About/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
