import { useState } from 'react'
import './App.css'
import Header from './components/header'
import Footer from './components/footer'
import Index from './components/index'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Header />
        <main id="main">
          <Routes>
            <Route path="/" element={<Index />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
