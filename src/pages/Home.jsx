import Hero from '../components/Hero'
import About from './../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Work from '../components/Work';
import Contact from '../components/Contact';
import Footer from '../components/Footer';


export default function Home() {
  return (
    <div>
       {/*All Routes files here*/}
      <Hero/>
      <About/>
      <Skills/>
      <Projects/>
      <Work/>
      <Contact/>
      <Footer/>
    </div>
  )
}
