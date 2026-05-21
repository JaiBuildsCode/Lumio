import { motion } from 'framer-motion'
import { FiCheck } from 'react-icons/fi'
import SpinLogo from './SpinLogo'

export default function CtaBanner() {
  return (
    <section className="relative overflow-hidden py-24" style={{ backgroundColor: '#052E16' }}>
      {/* Blurred orb backgrounds */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -bottom-32 -right-40 h-96 w-96 rounded-full bg-accent-green blur-3xl opacity-20"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/2 -left-32 h-80 w-80 rounded-full bg-accent-green blur-3xl opacity-10"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <SpinLogo size={26} />
            <h2 className="text-4xl sm:text-5xl font-bold leading-tight text-white">
              Ready to see clearly?
            </h2>
          </div>
          <p className="text-lg text-white/70 mb-10 max-w-2xl mx-auto">
            Join thousands of teams transforming raw data into actionable decisions. Start your free 14-day trial today.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex rounded-lg bg-accent-green text-bg-base px-10 py-4 text-base font-bold transition-all duration-200 hover:brightness-110 shadow-glow-green mb-10"
          >
            Start free trial →
          </motion.button>

          {/* Feature pills */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 10 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap items-center justify-center gap-6 text-sm text-white/70"
          >
            {['Free 14-day trial', 'No credit card required', 'Cancel anytime'].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <FiCheck size={16} className="text-accent-green" />
                <span>{item}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}