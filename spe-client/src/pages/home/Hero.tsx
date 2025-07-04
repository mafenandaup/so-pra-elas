
import '../../styles/hero.css'
import Navbar from '../../components/navbar'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Hero = () => {
  return (
    <>
       <Navbar />
      <section className="content-section hero-bg">
        <div className="hero-contents">
<h1>Insira título muito atraente</h1>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non debitis ad, quos ratione, eum quod et cupiditate totam fugiat molestias voluptate dolorem voluptates repudiandae deserunt ipsam alias aperiam facilis voluptatum?</p>
       <button><FontAwesomeIcon icon={faWhatsapp} /> Matricule-se agora</button>
        </div>
      </section>
    </>
  )
}

export default Hero
