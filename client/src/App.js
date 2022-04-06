import './style/App.css'
import Cities from './components/Cities'
import Attractions from './components/Attractions'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <header className="App-header">Header</header>
      <main>
        <div>
          <Routes>
            <Route path="/" element={<Cities />} />
            <Route path="/cities/:id" element={<Attractions />} />
          </Routes>
        </div>
      </main>
    </div>
  )
}

export default App
