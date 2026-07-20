import { useState } from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Marquee from '../components/Marquee'
import About from '../components/About'
import Couple from '../components/Couple'
import Procedures from '../components/Procedures'
import Videos from '../components/Videos'
import Space from '../components/Space'
import Locations from '../components/Locations'
import Footer from '../components/Footer'
import VideoModal from '../components/VideoModal'

export default function HomePage() {
  const [activeVideo, setActiveVideo] = useState(null)

  return (
    <div className="min-h-svh bg-porcelain text-espresso">
      <Header />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Procedures />
        <Space />
        <Videos onOpenVideo={setActiveVideo} />
        <Couple />
        <Locations />
      </main>
      <Footer />
      <VideoModal
        video={activeVideo}
        onClose={() => setActiveVideo(null)}
        onChange={setActiveVideo}
      />
    </div>
  )
}
