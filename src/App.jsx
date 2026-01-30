import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import DocsPage from './pages/DocsPage'
import './index.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="docs/:slug" element={<DocsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
