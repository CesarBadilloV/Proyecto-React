import './css/module1.css'
import './App.css'
import module1 from './modules/module1.jsx'
import module2 from './modules/module2.jsx'


function App() {
  return (
    <>
      {module1()}
      {module2()}
    </>
  )
}

export default App
