import { Route, Routes } from 'react-router-dom'
import './App.css'
import Homepage from './PAGES/Homepage'
import PageNotFound from './PAGES/PageNotFound'
import './assets/bootstrap.min.css';
import Reglog from './PAGES/Reglog'




function App() {
  

  return (
    <>
    <Routes>
      <Route path="*" element={<PageNotFound/>}/>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/login" element={<Reglog/>}/>
    </Routes>
    </>
  )
}

export default App
