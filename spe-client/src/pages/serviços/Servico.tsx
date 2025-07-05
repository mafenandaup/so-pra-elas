import '../../styles/local/servicos.css'
import { faIdCard, faRecycle, faFlagCheckered, faCarSide } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { motion } from "framer-motion";

const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    exit: { opacity: 0, y: -50, transition: { duration: 0.4 } },
};

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
      <motion.div className="servico-element" variants={itemVariants}>
      <FontAwesomeIcon icon={iconMap[icon]} className='servico-icon'/>
     
      <h1>{ title}</h1>
      <p>{description}</p>
        
</motion.div>
    </>
  )
}

export default Servico
