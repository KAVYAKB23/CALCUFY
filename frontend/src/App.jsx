import { Route, Routes } from 'react-router-dom'
import './App.css'
import PageNotFound from './PAGES/PageNotFound'
import './assets/bootstrap.min.css';
import Reglog from './PAGES/Reglog'
import Calculator from './COMPONENTS/Calculator';
import Home from './PAGES/Home';
import Aboutus from './PAGES/Aboutus';
import Records from './PAGES/Records';
import Analysis from './PAGES/Analysis';
import Budgets from './PAGES/Budgets';
import Accounts from './PAGES/Accounts';
import ContactUs from './PAGES/Contactus';





function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<Aboutus/>}/>
        <Route path="/login" element={<Reglog />} />
        <Route path='/contact' element={<ContactUs/>}/>
        <Route path="*" element={<PageNotFound />} />
        <Route path='/records' element={<Records/>}/>
        <Route path='/calculator' element={<Calculator/>}/>
        <Route path='/analysis' element={<Analysis/>}/>
        <Route path='budgets' element={<Budgets/>}/>
        <Route path='accounts' element={<Accounts/>}/>
      </Routes>
    </>
  )
}

export default App
