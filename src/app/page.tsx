import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Philosophy from '@/components/Philosophy'
import About from '@/components/About'
import Services from '@/components/Services'
import Process from '@/components/Process'
import Numbers from '@/components/Numbers'
import Zones from '@/components/Zones'
import Testimonials from '@/components/Testimonials'
import Faq from '@/components/Faq'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import ScrollReveal from '@/components/ScrollReveal'

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Philosophy />
        <About />
        <Services />
        <Process />
        <Numbers />
        <Zones />
        <Testimonials />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <ScrollReveal />
    </>
  )
}
