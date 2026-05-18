import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import './App.css'
import TopNav from './Components/TopNav/TopNav'
import CatNav from './Components/CatNav/CatNav'
import LandingPage from './Components/LandingPage'
import { Routes, Route } from 'react-router-dom'
import ProductDetails from './Components/ProductDetails/ProductDetails'

function App() {

  return (
    <div className='App'>
      <TopNav />
      <CatNav />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/ProductDetails" element={<ProductDetails />} />
      </Routes>
        

    </div>
  )
}

export default App
