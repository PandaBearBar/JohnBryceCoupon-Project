
import { useEffect } from 'react'
import './App.css'
import Footer from './Components/LayoutArea/Footer/Footer'
import {Head} from './Components/LayoutArea/Head/Head'
import Main from './Components/LayoutArea/Main/Main'


function App() {
  return (
    <div className="App">
      <Head/>
      <Main />
      <Footer />
    </div>
  )
}

export default App
