import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navber from './components/Navber';


function App() {
  return (
    <div>
     {/* Navber and Route Mount here */}
      <Navber/>
       <Routes>
         <Route path='/' element={<Home/>} />
      </Routes>
    </div>  
    )
}

export default App