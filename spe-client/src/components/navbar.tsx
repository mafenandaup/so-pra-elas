import "../styles/hero.css"

const Navbar = () => {
  return (
      <>
          <nav className="hero-nav">
              <img src="./../assets/logos/sopelas.png" alt="so pra elas logo" />
              
              <div className="nav-links">
               <a href="#depoimentos">Depoimentos</a>
               <a href="#about">Sobre nós</a>
               <a href="#servicos">Servicos</a>
               <a href="#contact">Entre em contato</a>
              </div>
          </nav>
      </>
  )
}

export default Navbar
