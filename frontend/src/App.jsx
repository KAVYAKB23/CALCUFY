import { Route, Routes } from 'react-router-dom'
import './App.css'
import PageNotFound from './PAGES/PageNotFound'
import './assets/bootstrap.min.css';
import Reglog from './PAGES/Reglog'

 import Calculator from './COMPONENTS/Calculator';





function App() {


  return (
    <>
      <Routes>
        <Route path="/login" element={<Reglog />} />
        <Route path="*" element={<PageNotFound />} />
       
        <Route path='/calculator' element={<Calculator/>}/>
      </Routes>
    </>
  )
}

export default App
