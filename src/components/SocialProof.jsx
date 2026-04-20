import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiStar } from 'react-icons/fi'

export default function SocialProof() {
  const ref = useRef(null)
  useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="bg-bg-base py-24 relative overflow-hidden">
      {/* Background orb */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(13, 40, 24, 0.3) 0%, transparent 70%)',
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center"
        >
          {/* Quote */}
          <blockquote className="mb-8">
            <p className="text-4xl sm:text-5xl font-serif italic text-text-primary leading-tight font-playfair-display">
              "Lumio replaced four tools we were paying for. Our team made better decisions in the first week."
            </p>
          </blockquote>

          {/* Stars */}
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex gap-1 justify-center mb-6"
          >
            {[1, 2, 3, 4, 5].map((i) => (
              <FiStar key={i} className="w-6 h-6 fill-accent-gold stroke-accent-gold text-accent-gold" />
            ))}
          </motion.div>

          {/* Attribution */}
          <div className="flex flex-col items-center">
            {/* Avatar */}
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="h-16 w-16 rounded-full bg-gradient-to-br from-accent-green to-accent-cyan border-2 border-accent-green/30 mb-4 flex items-center justify-center text-text-primary font-bold text-lg"
            >
              SC
            </motion.div>
            <p className="text-text-primary font-semibold">Sarah Chen</p>
            <p className="text-text-secondary text-sm">Head of Growth, Tovex</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
