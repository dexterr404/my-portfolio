import './App.css'
import { Routes,Route } from 'react-router-dom'

import BentoGrid from './components/BentoGrid/BentoGrid'
import TechStack from './pages/TechStack'
import Project from './pages/Project'

function App() {

  return (
    <>
    <Routes>
      <Route path='/tech-stack' element={<TechStack />}/>
      <Route path='/projects/:projectId' element={<Project />}/>
      <Route path='/' element={<BentoGrid />}/>
    </Routes> 
    </>
  )
}

export default App
