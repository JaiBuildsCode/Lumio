import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const trustedBrands = ['Vercel', 'Linear', 'Raycast', 'Figma', 'Retool', 'Notion', 'Supabase', 'Posthog']
const duplicatedBrands = [...trustedBrands, ...trustedBrands]

export default function TrustedBy() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="bg-bg-base py-12 border-b border-border-base">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-7xl px-6 lg:px-8"
      >
        <div className="mb-12 text-center">
          <p className="text-text-eyebrow">Trusted by teams at</p>
        </div>

        <div className="relative overflow-hidden">
          {/* Fade edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-16 bg-gradient-to-r from-bg-base to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-16 bg-gradient-to-l from-bg-base to-transparent" />

          {/* Scrolling container */}
          <motion.div
            animate={{ x: [0, -50 * 80] }}
            transition={{
              duration: 30,
              ease: 'linear',
              repeat: Infinity,
            }}
            className="flex gap-16 whitespace-nowrap"
          >
            {duplicatedBrands.map((brand, index) => (
              <div key={index} className="inline-flex min-w-max items-center">
                <span className="text-sm font-semibold text-text-secondary hover:text-text-primary transition-colors">
                  {brand}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
