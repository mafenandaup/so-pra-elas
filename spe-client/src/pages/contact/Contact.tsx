
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faWhatsapp, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import '../../styles/contact.css'

const Contact = () => {
  return (
      <>
          <footer className="contact-container">
                <div className="divisor">
               
                        <h2>Sobre nós</h2>
                        <p>A autoescola <b>Só Pra Elas</b> é uma agência de condutores especializados em atender o público feminino. Atendimento exclusivo e personalizado, garantindo muito mais autonomia na hora de dirigir. Venha fazer parte da nossa história!</p>
              </div>
              <div className="divisor">
               
                   <h2>Redes Sociais</h2>
                  <p> <FontAwesomeIcon icon={faInstagram} className="social-icon" /> @sopraelas</p>
                  <p> <FontAwesomeIcon icon={faXTwitter} className="social-icon" /> @sopraelas</p>
                  <p> <FontAwesomeIcon icon={faWhatsapp} className="social-icon" /> (71) 99999-9999</p>
              </div>
                <div className="divisor">
                  <p>&copy;2025 Maria Fernanda Maia - Todos os direitos reservados.</p>
              </div>
             
          </footer>
      </>
  )
}

export default Contact
