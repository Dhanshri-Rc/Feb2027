import { motion } from 'framer-motion'
export default function Button({ children, variant='teal', href, onClick, className='', icon: Icon }) {
  const cls = variant === 'teal' ? 'btn-teal' : variant === 'gold' ? 'btn-gold' : 'btn-outline-teal'
  const inner = <span className="flex items-center gap-2">{Icon && <Icon size={14}/>}{children}</span>
  if (href) return <motion.a href={href} whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.98 }} className={`${cls} ${className}`}>{inner}</motion.a>
  return <motion.button onClick={onClick} whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.98 }} className={`${cls} ${className}`}>{inner}</motion.button>
}
