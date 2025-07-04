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
                      <h1>Quem somos nós?</h1>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus inventore sapiente optio laboriosam deleniti quod sunt cumque culpa, officia eligendi labore quidem assumenda accusamus accusantium atque id minus similique nesciunt.</p>
                  </div>
              </div>
              <div className="about-content">
                   <div className="about-textbox">
                      <h1>Quem somos nós?</h1>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus inventore sapiente optio laboriosam deleniti quod sunt cumque culpa, officia eligendi labore quidem assumenda accusamus accusantium atque id minus similique nesciunt.</p>
                  </div>
                  <img src={CNHImg} alt="autoescola" />

              </div>
          </section>
      </>
  )
}

export default About
