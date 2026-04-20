import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiPlus } from 'react-icons/fi'

const faqs = [
  {
    q: 'How does Lumio connect to my data?',
    a: 'Lumio integrates with 50+ data sources including databases, spreadsheets, and analytics platforms. Setup is secure and takes just minutes with OAuth connections.',
  },
  {
    q: 'Is my data secure?',
    a: 'Absolutely. We use enterprise-grade encryption, SOC 2 Type II compliance, and never store your raw data. All connections use secure encrypted tunnels.',
  },
  {
    q: 'Can I cancel anytime?',
    a: 'Yes. No long-term contracts. Cancel your subscription anytime with no penalties or hidden fees. Simple as that.',
  },
  {
    q: 'Do you offer a free trial?',
    a: 'We offer a 14-day free trial with full access to all features. No credit card required to get started.',
  },
  {
    q: 'How long does setup take?',
    a: 'Most teams are running their first dashboard in under 30 minutes. We provide step-by-step onboarding to make it smooth.',
  },
  {
    q: 'What integrations do you support?',
    a: 'We support popular tools like Salesforce, HubSpot, Google Analytics, Slack, and 45+ other integrations through our platform.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState(0)

  return (
    <section className="bg-bg-base py-24">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          className="mb-16 text-center"
        >
          <p className="text-text-eyebrow mb-3">Got Questions?</p>
          <h2 className="text-5xl font-bold leading-tight text-text-primary sm:text-6xl">
            Frequently asked questions.
          </h2>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ delay: i * 0.05 }}
              className="rounded-lg border border-border-base bg-bg-surface overflow-hidden hover:border-accent-green/30 transition-all duration-300"
            >
              <button
                onClick={() => setOpen(open === i ? -1 : i)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-bg-elevated/50 transition-colors"
              >
                <h3 className="text-left font-semibold text-text-primary">{faq.q}</h3>
                <motion.div
                  animate={{ rotate: open === i ? 45 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex-shrink-0 ml-4 text-accent-green"
                >
                  <FiPlus size={20} strokeWidth={2.5} />
                </motion.div>
              </button>

              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="border-t border-border-base px-6 py-4 text-text-secondary text-sm leading-6"
                  >
                    {faq.a}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
