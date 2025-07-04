
import '../../styles/hero.css'
import Navbar from '../../components/navbar/Navbar'
import HeroTexts from '../../components/herotexts/HeroTexts'

const Hero = () => {
  return (
    <>
       <Navbar />
      <section className="content-section hero-bg">
        <HeroTexts />
      </section>
    </>
  )
}

export default Hero
