import { motion } from 'framer-motion'

const transition = (Component) => {
  return () => (
    <>
      <Component />
      <motion.div
        className="fade-in"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0 }}
        exit={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      />
      <motion.div
        className="fade-out"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      />
    </>
  )
}

export default transition