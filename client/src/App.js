import './style/App.css'
import Cities from './components/Cities'
import { Routes, Route } from 'react-router-dom'
import CreatePost from './components/CreatePost'
import Comment from './components/Comment'

function App() {
  return (
    <div className="App">
      <header className="App-header">Header</header>
      <main>
        <div>
          <CreatePost />
          <Comment />
          <Routes>
            <Route path="/" element={<Cities />} />
          </Routes>
        </div>
      </main>
    </div>
  )
}

export default App
