import '../../styles/local/servicos.css'
import {servicos} from '../serviços/servicos.json';
import Servico from '../serviços/Servico';
import ContactBtn from '../../components/herotexts/ContactBtn'

import { motion } from "framer-motion";

const skillVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};



const Servicos = () => {
  return (
 <>
      <section className="content-section servicos" id="servicos">
        <h1 className="servicos-title">Nossos Serviços</h1>
        <motion.div className="servicos-contain" variants={skillVariants} initial="hidden" whileInView="visible" exit="hidden" viewport={{ once: true, amount: 0.4 }}>
              {servicos.map((servico) => (
           <Servico key={servico.title} title={servico.title} icon={servico.icon} description={servico.description}   />
        ))}
        </motion.div>
             <ContactBtn texto=' Saiba Mais'/>
      </section>
    </>
  )
}

export default Servicos
