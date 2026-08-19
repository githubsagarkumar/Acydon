import { useCallback, useState } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { ProblemSection } from './components/ProblemSection'
import { HowItWorks } from './components/HowItWorks'
import { Features } from './components/Features'
import { InteractiveBoard } from './components/InteractiveBoard'
import { FinalCTA } from './components/FinalCTA'
import { Footer } from './components/Footer'
import { EasterEggBanner } from './components/EasterEggBanner'
import { useKonamiCode } from './hooks/useKonamiCode'

function App() {
  const [easterEggVisible, setEasterEggVisible] = useState(false)

  const activateEasterEgg = useCallback(() => {
    setEasterEggVisible(true)
    setTimeout(() => setEasterEggVisible(false), 4000)
  }, [])

  useKonamiCode(activateEasterEgg)

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProblemSection />
        <HowItWorks />
        <Features />
        <InteractiveBoard />
        <FinalCTA />
      </main>
      <Footer />
      <EasterEggBanner visible={easterEggVisible} />
    </>
  )
}

export default App
