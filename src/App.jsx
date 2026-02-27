import './css/module1.css'
import './modules/aboutme.jsx'
import './css/carousel.css'
import './App.css'
import './css/timeline.css';
import './css/education.css';
import './css/footer.css'
import module1 from './modules/module1.jsx';
import aboutme from './modules/aboutme.jsx'
import Footer from './modules/footer.jsx';


function App() {
  return (
    <>
      {module1()}
      {aboutme()}
      {Footer()}
    </>
  )
}

export default App
