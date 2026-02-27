import './css/module1.css'
import './modules/aboutme.jsx'
import './css/carousel.css'
import './App.css'
import module1 from './modules/module1.jsx'
import aboutme from './modules/aboutme.jsx'


function App() {
  return (
    <>
      {module1()}
      {aboutme()}
    </>
  )
}

export default App
