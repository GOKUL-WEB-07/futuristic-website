import './page.css'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion';

const Home = () => {

  const navigate = useNavigate();

  const gotoService = () => {
    navigate('/Product');
  }
 
  return (
    <>
   <div className="banner">
    <div className="text">
      <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
      >
      <h1>Experience the Future</h1>
      <p>Unlock the power of AI, automation, and intelligent design <br /> <br /> all in one seamless platform hello</p>
      <button onClick={gotoService} className='btn'>Get into the Future</button>
      </motion.div>
    </div>
   </div>
    </>
  )
}

export default Home