import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import MetricsTicker from './components/MetricsTicker'
import TrustedBy from './components/TrustedBy'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import SocialProof from './components/SocialProof'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import CtaBanner from './components/CtaBanner'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-bg-base text-text-primary">
      <Navbar />
      <main className="overflow-hidden">
        <Hero />
        <MetricsTicker />
        <TrustedBy />
        <Features />
        <HowItWorks />
        <SocialProof />
        <Pricing />
        <Testimonials />
        <FAQ />
        <CtaBanner />
        <Footer />
      </main>
    </div>
  )
}

export default App
