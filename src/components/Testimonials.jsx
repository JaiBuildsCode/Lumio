import { motion } from 'framer-motion'
import { FiStar } from 'react-icons/fi'

const testimonials = [
  {
    quote: 'Lumio transformed how our team approaches data. Insights that used to take days now take minutes.',
    name: 'Mira Jensen',
    role: 'Head of Growth',
    company: 'Quill',
    initials: 'MJ',
  },
  {
    quote: 'We immediately saw ROI from implementing Lumio. Highly recommended.',
    name: 'Ethan Shaw',
    role: 'VP of Product',
    company: 'Atlas',
    initials: 'ES',
  },
  {
    quote: 'The AI recommendations feel natural and never pushy. It just helps us see what we missed.',
    name: 'Priya Rao',
    role: 'Director of Analytics',
    company: 'Velox',
    initials: 'PR',
  },
  {
    quote: 'Our entire team now trusts the data. That changed everything about how we prioritize.',
    name: 'Noor Khalid',
    role: 'Operations Director',
    company: 'Tovex',
    initials: 'NK',
  },
  {
    quote: 'Setup was painless. We were live with our first dashboard the same day.',
    name: 'James Chen',
    role: 'CEO',
    company: 'Nova Labs',
    initials: 'JC',
  },
  {
    quote: 'Best investment we made this year. Every team member loves it.',
    name: 'Sofia Rodriguez',
    role: 'Chief Data Officer',
    company: 'Sentry',
    initials: 'SR',
  },
]

const duplicatedTestimonials = [...testimonials, ...testimonials]

export default function Testimonials() {
  return (
    <section className="bg-bg-base py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          className="mb-16 text-center"
        >
          <p className="text-text-eyebrow mb-3">Real Teams, Real Results</p>
          <h2 className="text-5xl font-bold leading-tight text-text-primary sm:text-6xl">
            Loved by teams building the future.
          </h2>
        </motion.div>

        {/* Scrolling testimonials */}
        <div className="relative overflow-hidden">
          {/* Fade edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-16 bg-gradient-to-r from-bg-base to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-16 bg-gradient-to-l from-bg-base to-transparent" />

          <motion.div
            animate={{ x: [0, -50 * 80] }}
            transition={{ duration: 40, ease: 'linear', repeat: Infinity }}
            className="flex gap-6 py-8"
          >
            {duplicatedTestimonials.map((testimonial, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -4 }}
                className="flex-shrink-0 w-96 rounded-2xl border border-border-base bg-bg-surface p-8 shadow-dashboard hover:shadow-glow-green transition-all duration-300"
              >
                <div className="mb-4 flex gap-1">
                  {[...Array(5)].map((_, j) => (
                    <FiStar
                      key={j}
                      size={18}
                      className="fill-accent-gold stroke-accent-gold"
                    />
                  ))}
                </div>
                <p className="mb-6 text-sm leading-7 text-text-secondary">"{testimonial.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-accent-green to-accent-cyan text-sm font-bold text-bg-base flex-shrink-0">
                    {testimonial.initials}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-text-primary">{testimonial.name}</p>
                    <p className="text-xs text-text-secondary">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
