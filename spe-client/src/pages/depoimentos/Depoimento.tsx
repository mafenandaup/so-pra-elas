import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../styles/local/depoimentos.css'
import { faUser } from '@fortawesome/free-regular-svg-icons'

interface DepoimentoProps {
  nome: string; // explicitando diretamente o tipo como string em TS
  text: string;
  date: string;
}

const Depoimento = ({nome, text, date}: DepoimentoProps) => {
  return (
      <div className="depoimento-element">
      <div className="depoimento-icon"><FontAwesomeIcon className='icon-img' icon={faUser}/></div>
      <h1>{nome}</h1>
      <p>{text}</p>
      <h5>Enviado em {date}</h5>
      </div>
  )
}

export default Depoimento
