import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiDatabase, FiCpu, FiTrendingUp } from 'react-icons/fi'

const steps = [
  { title: 'Connect your data', description: 'Link all your data sources securely. Supports 50+ integrations out of the box.', icon: FiDatabase, num: '01' },
  { title: 'AI analyzes patterns', description: 'Our machine learning automatically organizes and finds hidden insights.', icon: FiCpu, num: '02' },
  { title: 'You make better decisions', description: 'Get clear, actionable recommendations and automate next steps.', icon: FiTrendingUp, num: '03' },
]

export default function HowItWorks() {
  const ref = useRef(null)
  useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="bg-bg-base py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          className="mb-20 text-center"
        >
          <p className="text-text-eyebrow mb-3">From raw data to clarity</p>
          <h2 className="text-5xl font-bold leading-tight text-text-primary sm:text-6xl">
            Three simple steps.
          </h2>
        </motion.div>

        <div className="relative">
          {/* Connecting dashed line on desktop */}
          <div
            className="hidden lg:block absolute left-0 right-0 h-px"
            style={{
              backgroundImage: 'linear-gradient(to right, #4ADE80 0%, #4ADE80 50%, transparent 50%, transparent 100%)',
              backgroundSize: '12px 1px',
              top: '32px',
              zIndex: 0,
            }}
          />

          <div className="grid gap-12 lg:grid-cols-3">
            {steps.map((step, index) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                {/* Background number */}
                <div className="absolute -top-12 -left-8 text-8xl font-black text-border-subtle pointer-events-none opacity-30">
                  {step.num}
                </div>

                {/* Card content */}
                <div className="relative z-10">
                  <div className="mb-6 flex justify-center relative z-20">
                    <div className="h-16 w-16 rounded-full bg-accent-green/10 flex items-center justify-center text-accent-green border border-accent-green/20">
                      <step.icon size={32} />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-text-primary text-center">{step.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-text-secondary text-center">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
