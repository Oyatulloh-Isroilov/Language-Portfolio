import { Routes, Route } from 'react-router-dom'
import Header from "./pages/Header"
import Hero from "./pages/Hero"
import { useTranslation } from 'react-i18next'
function App() {
  const { t } = useTranslation();

  return (
    <>
      <div className="container">
        <div className="components">
          <Header />
          <Hero />
        </div>
      </div>
    </>
  )
}

export default App
