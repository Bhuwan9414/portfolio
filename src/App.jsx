import './App.css'
import Navbar from './components/navbar'
import About from './components/about'
import Project from './components/Project'
import Skills from './components/Skills'
import Contact from './components/Contact'

// 110909
function App() {

  return (

    <div className='bg-[black] min-h-screen'>
      <Navbar></Navbar>
      <About></About>
      <Project></Project>
      <Skills></Skills>
      <Contact></Contact>
    </div>

  )
}

export default App