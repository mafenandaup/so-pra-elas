import "../../styles/local/hero.css"
import {motion} from "framer-motion"

const Navbar = () => {
  return (
      <>
          <nav className="hero-nav">
              <img src='../../assets/logos/sopelas.png' alt="so pra elas logo" />
              
              <div className="nav-links">
               <motion.a whileHover={{scale: 1.1}} href="#depoimentos">Depoimentos</motion.a>
               <motion.a  whileHover={{scale: 1.1}} href="#about">Sobre nós</motion.a>
               <motion.a  whileHover={{scale: 1.1}} href="#servicos">Serviços</motion.a>
               <motion.a  whileHover={{scale: 1.1}} href="#contact">Entre em contato</motion.a>
              </div>
          </nav>
      </>
  )
}

export default Navbar
