import '../../styles/servicos.css'
import { faIdCard, faRecycle, faFlagCheckered, faCarSide } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const iconMap = {
  faIdCard,
  faRecycle,
  faFlagCheckered,
  faCarSide
};

interface ServicoProps {
  title: string;
icon: keyof typeof iconMap;
  description: string;
}

const Servico = ({title, icon, description} : ServicoProps) => {
  return (
 <>
      <div className="servico-element">
      <FontAwesomeIcon icon={iconMap[icon]} className='servico-icon'/>
      <div className="servico-textbox">
      <h1>{ title}</h1>
      <p>{description}</p>
      </div>
</div>
    </>
  )
}

export default Servico
