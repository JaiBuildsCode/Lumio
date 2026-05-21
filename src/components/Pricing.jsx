import { useState } from 'react'
import SpinLogo from './SpinLogo'
import { motion } from 'framer-motion'
import { FiCheck } from 'react-icons/fi'

const plans = [
  {
    name: 'Starter',
    price: 49,
    description: 'For small teams getting started.',
    features: ['Up to 3 users', '5 dashboards', 'Basic reports', 'Email support', 'Community access'],
    highlight: false,
  },
  {
    name: 'Pro',
    price: 149,
    description: 'For growing teams.',
    features: ['Up to 10 users', 'Unlimited dashboards', 'AI-powered insights', 'Priority support', 'Custom branding', 'Advanced integrations'],
    highlight: true,
  },
  {
    name: 'Enterprise',
    price: 499,
    description: 'For large organizations.',
    features: ['Unlimited users', 'Custom integrations', 'Dedicated account manager', 'SLA support', 'White-label option', 'On-premise deployment'],
    highlight: false,
  },
]

export default function Pricing() {
  const [billing, setBilling] = useState('monthly')
  const isYearly = billing === 'yearly'

  return (
    <section id="pricing" className="bg-bg-base py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          className="mb-16 text-center"
        >
          <p className="text-text-eyebrow mb-3">Simple Pricing</p>
          <h2 className="text-5xl font-bold leading-tight text-text-primary sm:text-6xl">
            No hidden fees. Cancel anytime.
          </h2>
        </motion.div>

        {/* Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          className="mx-auto mb-16 flex max-w-sm items-center justify-center gap-1 rounded-full border border-border-base bg-bg-surface p-1"
        >
          <button
            onClick={() => setBilling('monthly')}
            className={`flex-1 rounded-full px-6 py-2.5 text-sm font-semibold transition-all duration-200 ${
              !isYearly
                ? 'bg-accent-green text-bg-base'
                : 'text-text-secondary hover:text-text-primary'
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setBilling('yearly')}
            className={`flex-1 rounded-full px-6 py-2.5 text-sm font-semibold transition-all duration-200 ${
              isYearly
                ? 'bg-accent-green text-bg-base'
                : 'text-text-secondary hover:text-text-primary'
            }`}
          >
            Yearly
          </button>
          {isYearly && (
            <motion.span
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute right-4 rounded-lg bg-accent-green/20 px-3 py-1 text-xs font-semibold text-accent-green border border-accent-green/30"
            >
              Save 30%
            </motion.span>
          )}
        </motion.div>

        {/* Plans */}
        <div className="grid gap-8 lg:grid-cols-3">
          {plans.map((plan, i) => {
            const monthlyPrice = plan.price
            const yearlyPrice = Math.round(monthlyPrice * 12 * 0.7)

            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className={`relative rounded-2xl border transition-all duration-300 ${
                  plan.highlight
                    ? 'bg-gradient-to-br from-bg-surface to-accent-green/5 shadow-glow-green lg:scale-105'
                    : 'border-border-base bg-bg-surface shadow-dashboard hover:shadow-glow-green'
                } p-8`}
              >
                {/* Professional highlight for Pro plan */}
                {plan.highlight && (
                  <div className="absolute -inset-0.5 rounded-2xl pointer-events-none" aria-hidden>
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-transparent to-accent-green/6 blur-md opacity-90" />
                    <div className="absolute inset-0 rounded-2xl border border-accent-green/20 shadow-[0_20px_60px_rgba(34,211,238,0.06)]" />
                  </div>
                )}

                <div className={`relative z-10 ${plan.highlight ? 'bg-bg-surface rounded-xl p-6 -m-6' : ''}`}>
                  {plan.highlight && (
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
                      <SpinLogo size={18} />
                      <div className="inline-flex items-center gap-2 bg-bg-surface/80 px-3 py-1 rounded-full border border-accent-green/30">
                        <span className="text-xs font-semibold text-accent-green uppercase">Most Popular</span>
                      </div>
                    </div>
                  )}

                  <div className={`mb-8 ${plan.highlight ? 'pt-4' : ''}`}>
                    <h3 className="text-lg font-bold text-text-primary">{plan.name}</h3>
                    <p className="mt-1 text-sm text-text-secondary">{plan.description}</p>
                    <div className="mt-6 flex items-baseline gap-1">
                      <span className="text-5xl font-bold text-text-primary">
                        ${isYearly ? yearlyPrice : monthlyPrice}
                      </span>
                      <span className="text-text-secondary">/{isYearly ? 'yr' : 'mo'}</span>
                    </div>
                  </div>

                  <div className="mb-8 space-y-3 border-t border-border-base pt-8">
                    {plan.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-3 text-sm text-text-secondary">
                        <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-accent-green/10 text-accent-green flex-shrink-0 mt-0.5">
                          <FiCheck size={14} strokeWidth={3} />
                        </span>
                        {feature}
                      </div>
                    ))}
                  </div>

                  <button
                    className={`w-full rounded-lg px-6 py-3 text-sm font-semibold transition-all duration-200 ${
                      plan.highlight
                        ? 'bg-accent-green text-bg-base hover:brightness-110 shadow-glow-green'
                        : 'border border-border-base text-text-primary hover:border-accent-green hover:text-accent-green'
                    }`}
                  >
                    Get started
                  </button>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
