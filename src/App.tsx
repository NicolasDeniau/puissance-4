import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './routes/Home'
import Scores from './routes/Scores'
import Play from './routes/Play'
import NotFound from './routes/NotFound'

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/scores">Scores</Link>
          </li>
          <li>
            <Link to="/jouer">Jouer</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/scores' element={<Scores />} />
        <Route path='/jouer' element={<Play />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
