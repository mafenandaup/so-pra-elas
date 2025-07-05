import '../../styles/servicos.css'
import {servicos} from '../serviços/servicos.json';
import Servico from '../serviços/Servico';
const Servicos = () => {
  return (
 <>
      <section className="content-section servicos" id="servicos">
        <h1 className="servicos-title">Nossos Serviços</h1>
     <div className="servicos-contain">
              {servicos.map((servico) => (
           <Servico key={servico.title} title={servico.title} icon={servico.icon} description={servico.description}  />
        ))}
        </div>
      </section>
    </>
  )
}

export default Servicos
