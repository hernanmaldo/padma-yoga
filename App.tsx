import Header from './components/Header'
import Hero from './components/Hero'
import Programs from './components/Programs'
import Benefits from './components/Benefits'
import Testimonials from './components/Testimonials'
import Blog from './components/Blog'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Programs />
        <Benefits />
        <Testimonials />
        <Blog />
      </main>
      <Footer />
    </div>
  )
}