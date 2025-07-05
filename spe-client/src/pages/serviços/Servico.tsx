import type { IconDefinition } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface ServicoProps {
  title: string
  img: IconDefinition;
  description: string;
}

const Servico = ({title, img, description} : ServicoProps) => {
  return (
 <>
      <div className="servico-element"></div>
      <div className="servico-icon"><FontAwesomeIcon icon={img} /></div>
      <div className="servico-textbox">
      <h1>{ title}</h1>
      <p>{description}</p>

      </div>
      <button>Saiba Mais</button>
    </>
  )
}

export default Servico
