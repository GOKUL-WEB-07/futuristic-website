import React from 'react'
import { motion } from 'framer-motion';


const Product = () => {
  return (
    <>
    <motion.div
      initial={{ opacity: 0, Y: 50 }}
      animate={{ opacity: 1, Y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
    >
    <h1>
      Our Futuristic <span className='highlight'>Services</span>
      </h1>
  </motion.div>
    </>
  )
}

export default Product