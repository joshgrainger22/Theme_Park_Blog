import './style/App.css'
import Cities from './components/Cities'
import Attractions from './components/Attractions'
import { Routes, Route } from 'react-router-dom'
import CreatePost from './components/CreatePost'


function App() {
  return (
    <div className="App">
      <header className="App-header">Header</header>
      <main>
        <div>
          <CreatePost />
          <Routes>
            <Route path="/" element={<Cities />} />
            <Route path="/cities/:id" element={<Attractions />} />
          </Routes>
        </div>
        <Attractions />
      </main>
    </div>
  )
}

export default App
