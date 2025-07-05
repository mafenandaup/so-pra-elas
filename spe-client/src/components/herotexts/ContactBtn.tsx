import React from 'react'

import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion } from "framer-motion"
import '../../styles/local/hero.css'

interface textProps {
    texto: string
}

const ContactBtn = ({texto}: textProps) => {
  return (
    <div>
      <motion.button whileHover={{ scale: 1.1 }} className='contact-button'><FontAwesomeIcon icon={faWhatsapp} />{texto}</motion.button>
    </div>
  )
}

export default ContactBtn
