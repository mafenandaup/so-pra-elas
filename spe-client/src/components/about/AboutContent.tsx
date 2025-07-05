import autoescolaImg from '../../assets/stockimgs/autoescola1.webp'
import CNHImg from '../../assets/stockimgs/womancnh.webp'
import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from "framer-motion";


const TransitionRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1.3 } },
    exit: { opacity: 0, x: -50, transition: { duration: 0.4 } },
};

const TransitionLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1.3 } },
    exit: { opacity: 0, x: 50, transition: { duration: 0.4 } },
};

const AboutContent = () => {

    const ref = useRef(null); // Referência ao elemento
    const isInView = useInView(ref, { once: true }); // Detecta quando o elemento entra na viewport

    return (
        <>

            <div className="about-content">
                <motion.img  ref={ref} variants={TransitionRight} initial="hidden" animate={isInView ? "visible" : "hidden"} exit= "exit" src={autoescolaImg} alt="autoescola" />
                <div className="about-textbox">
                    <motion.h1 ref={ref} variants={TransitionLeft} initial="hidden" animate={isInView ? "visible" : "hidden"} exit= "exit">Quem somos nós?</motion.h1> <br />
                    <motion.p ref={ref} variants={TransitionLeft} initial="hidden" animate={isInView ? "visible" : "hidden"} exit= "exit">A autoescola Só Pra Elas é uma autoescola pensada por mulheres, para mulheres, com atendimento pensado para cada necessidade individual. </motion.p> <br />
                    <motion.p ref={ref} variants={TransitionLeft} initial="hidden" animate={isInView ? "visible" : "hidden"} exit= "exit"><b> Nós acreditamos que dirigir não é um privilégio - mas sim um direito de todas.</b></motion.p> <br />
                    <motion.p ref={ref} variants={TransitionLeft} initial="hidden" animate={isInView ? "visible" : "hidden"} exit= "exit">Fundada com o propósito de criar um ambiente acolhedor, respeitoso e livre de julgamentos,<b> oferecemos aulas teóricas e práticas com instrutoras treinadas para te guiar com excelência.</b> Aqui, você aprende no seu ritmo, com empatia, paciência e confiança.</motion.p> <br />
                </div>
            </div>
            <div className="about-content">
                <div className="about-textbox">
                    <motion.h1 ref={ref} variants={TransitionRight} initial="hidden" animate={isInView ? "visible" : "hidden"} exit= "exit">O Nosso propósito</motion.h1> <br />
                    <motion.p ref={ref} variants={TransitionRight} initial="hidden" animate={isInView ? "visible" : "hidden"} exit= "exit">Segundo o IBGE, embora as mulheres sejam a maioria da população brasileira, elas representam apenas cerca de 35% das pessoas habilitadas para dirigir. Além disso, 80% delas relata situações de medo ou insegurança ao conduzir.</motion.p> <br />
                    <motion.p ref={ref} variants={TransitionRight} initial="hidden" animate={isInView ? "visible" : "hidden"} exit= "exit">Nosso objetivo é reduzir essas disparidades e preocupações, criando um espaço onde as mulheres possam aprender a dirigir com confiança, acolhimento e respeito.  </motion.p> <br />
                    <motion.p ref={ref} variants={TransitionRight} initial="hidden" animate={isInView ? "visible" : "hidden"} exit= "exit">Nosso espaço é seguro, livre de assédio, e projetado para fortalecer a autoestima de alunas que, muitas vezes, foram desencorajadas ou subestimadas ao longo da vida. </motion.p> <br />
                    <motion.p ref={ref} variants={TransitionRight} initial="hidden" animate={isInView ? "visible" : "hidden"} exit= "exit"> Sabemos que o volante pode parecer assustador para quem nunca teve apoio — por isso, estamos aqui para mudar essa história.</motion.p>
                </div>
                <motion.img ref={ref} variants={TransitionLeft} initial="hidden" animate={isInView ? "visible" : "hidden"} exit= "exit" src={CNHImg}  alt="autoescola" />

            </div>
        </>
    )
}

export default AboutContent
