import './App.css'
import { Routes,Route } from 'react-router-dom'

import BentoGrid from './components/BentoGrid/BentoGrid'
import TechStack from './pages/TechStack'
import Project from './pages/Project'
import Blog from './pages/blogs/Blog'
import SweetnessOfDebugging from './pages/blogs/SweetnessOfDebugging'

function App() {

  return (
    <>
    <Routes>
      <Route path='/tech-stack' element={<TechStack />}/>
      <Route path='/projects/:projectId' element={<Project />}/>
      <Route path='/' element={<BentoGrid />}/>
      <Route path='/blogs' element={<Blog />}/>
      <Route path='/blogs/sweetness-of-debugging' element={<SweetnessOfDebugging />} />
    </Routes> 
    </>
  )
}

export default App
