import autoescolaImg from '../../assets/stockimgs/autoescola1.webp'
import CNHImg from '../../assets/stockimgs/womancnh.webp'
import '../../styles/about.css'
const About = () => {
  return (
      <>
          <section className="content-section-extended" id="about">
              <div className="about-content">
                  <img src={autoescolaImg} alt="autoescola" />
                  <div className="about-textbox">
                      <h1>Quem somos nós?</h1> <br />
                      <p>A autoescola Só Pra Elas é uma autoescola pensada por mulheres, para mulheres, com atendimento pensado para cada necessidade individual. </p> <br />
                      <p><b> Nós acreditamos que dirigir não é um privilégio - mas sim um direito de todas.</b></p> <br />
                      <p>Fundada com o propósito de criar um ambiente acolhedor, respeitoso e livre de julgamentos,<b> oferecemos aulas teóricas e práticas com instrutoras treinadas para te guiar com excelência.</b> Aqui, você aprende no seu ritmo, com empatia, paciência e confiança.</p> <br />
                  </div>
              </div>
              <div className="about-content">
                   <div className="about-textbox">
                      <h1>O Nosso propósito</h1> <br />
                      <p>Segundo o IBGE, embora as mulheres sejam a maioria da população brasileira, elas representam apenas cerca de 35% das pessoas habilitadas para dirigir. Além disso, 80% delas relata situações de medo ou insegurança ao conduzir.</p> <br />
                      <p>Nosso objetivo é reduzir essas disparidades e preocupações, criando um espaço onde as mulheres possam aprender a dirigir com confiança, acolhimento e respeito.  </p> <br />
                      <p>Nosso espaço é seguro, livre de assédio, e projetado para fortalecer a autoestima de alunas que, muitas vezes, foram desencorajadas ou subestimadas ao longo da vida. </p> <br />
                      <p> Sabemos que o volante pode parecer assustador para quem nunca teve apoio — por isso, estamos aqui para mudar essa história.</p>
                  </div>
                  <img src={CNHImg} alt="autoescola" />

              </div>
          </section>
      </>
  )
}

export default About
