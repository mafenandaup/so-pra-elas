
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {motion} from "framer-motion"

const HeroTexts = () => {
  return (
  <>
          <div className="hero-contents">
<h1>Você, onde quiser chegar!</h1>
<p>Não sabe como começar a dirigir na prática, ou já porta a CNH, mas não se sente segura? Não se preocupe, podemos te ajudar! Clique o botão abaixo para agendar sua primeira aula, e dar o primeiro passo como motorista sem medo.</p>
       <motion.button whileHover={{scale:1.1}}><FontAwesomeIcon icon={faWhatsapp} /> Matricule-se agora</motion.button>
        </div>
</>
  )
}

export default HeroTexts
