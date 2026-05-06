import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import './App.css'
import TopNav from './Components/TopNav/TopNav'
import CatNav from './Components/CatNav/CatNav'
import MainComponent from './Components/MainComponent/MainComponent'

function App() {

  return (
    <div className='App'>
      <TopNav />
      <CatNav />
      <MainComponent />

    </div>
  )
}

export default App
