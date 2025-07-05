import Depoimento from "./Depoimento"
import { depoimentos } from '../depoimentos/depoimentos.json'
import '../../styles/depoimentos.css'

const Depoimentos = () => {
  return (
    <>
      <section className="content-section depoimentos" id="depoimentos">
        <div className="depoimentos-contain">
              {depoimentos.map((depoimento) => (
           <Depoimento key={depoimento.nome} nome={depoimento.nome} text={depoimento.text} date={depoimento.date} />
        ))}
        </div>
      </section>
    </>
  )
}

export default Depoimentos
