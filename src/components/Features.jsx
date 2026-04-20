import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiBarChart2, FiDatabase, FiCpu, FiTrendingUp, FiLayers, FiLock } from 'react-icons/fi'
import { LineChart, Line, AreaChart, Area, ResponsiveContainer } from 'recharts'

const chartData = [
  { month: 'Jan', value: 2400 },
  { month: 'Feb', value: 3200 },
  { month: 'Mar', value: 2800 },
  { month: 'Apr', value: 4100 },
  { month: 'May', value: 3800 },
  { month: 'Jun', value: 4600 },
]

const PulsingDot = () => (
  <motion.div
    animate={{ scale: [1, 1.2, 1], opacity: [1, 0.5, 1] }}
    transition={{ duration: 1.5, repeat: Infinity }}
    className="h-2 w-2 rounded-full bg-accent-green"
  />
)

export default function Features() {
  const ref = useRef(null)
  useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="features" ref={ref} className="bg-bg-base py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <p className="text-text-eyebrow mb-3">Premium Features</p>
          <motion.h2
            className="text-5xl font-bold leading-tight text-text-primary sm:text-6xl"
            initial={{ clipPath: 'inset(0 100% 0 0)' }}
            whileInView={{ clipPath: 'inset(0 0% 0 0)' }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            Built for teams that move fast
          </motion.h2>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-4 auto-rows-max">
          {/* 1. Large chart card (2x2) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0 }}
            whileHover={{ y: -4 }}
            className="lg:col-span-2 lg:row-span-2 rounded-2xl border border-border-base bg-bg-surface p-8 shadow-dashboard hover:shadow-glow-green transition-all duration-300 relative overflow-hidden group"
          >
            {/* Shimmer effect */}
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/5 to-transparent transition-transform duration-1000 ease-out" />

            <div className="mb-6 flex items-start justify-between">
              <div className="flex items-center gap-3">
                <PulsingDot />
                <div>
                  <p className="text-text-eyebrow text-xs">Live Dashboard</p>
                  <h3 className="text-2xl font-bold text-text-primary mt-1">Real-time Analytics</h3>
                </div>
              </div>
            </div>
            <p className="text-sm text-text-secondary mb-6">
              Monitor your metrics with beautiful charts and instant updates.
            </p>
            <div className="h-48 rounded-xl bg-bg-elevated border border-border-base p-4">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <Area type="monotone" dataKey="value" fill="#4ADE80" stroke="#4ADE80" fillOpacity={0.1} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          {/* 2. Integrations card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ y: -4 }}
            className="lg:col-span-2 rounded-2xl border border-border-base bg-bg-surface p-8 shadow-dashboard hover:shadow-glow-green transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-4">
              <PulsingDot />
              <p className="text-text-eyebrow text-xs">Connectivity</p>
            </div>
            <h3 className="text-xl font-bold text-text-primary mb-4">Multiple Integrations</h3>
            <p className="text-sm text-text-secondary mb-6">
              Connect to 50+ data sources out of the box
            </p>
            <div className="grid grid-cols-2 gap-3">
              {['Salesforce', 'HubSpot', 'Google Analytics', 'Stripe', 'Mixpanel', 'Amplitude'].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-text-secondary">
                  <span className="text-accent-green">✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* 3. AI Insights card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -4 }}
            className="rounded-2xl border border-accent-green/30 bg-gradient-to-br from-bg-surface to-accent-green/5 p-8 shadow-glow-green transition-all duration-300 relative overflow-hidden"
          >
            <div className="flex items-center gap-3 mb-4">
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="h-3 w-3 rounded-full bg-accent-green"
              />
              <p className="text-text-eyebrow text-xs">Premium</p>
            </div>
            <h3 className="text-xl font-bold text-text-primary mb-3">AI-Powered Insights</h3>
            <p className="text-sm text-text-secondary">
              Machine learning recommendations that suggest your next best action.
            </p>
            <div className="mt-4 pt-4 border-t border-border-base">
              <div className="text-xs text-accent-green font-semibold">New insights every day</div>
            </div>
          </motion.div>

          {/* 4. Real-time sync card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ y: -4 }}
            className="rounded-2xl border border-border-base bg-bg-surface p-8 shadow-dashboard hover:shadow-glow-green transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-4">
              <PulsingDot />
              <p className="text-text-eyebrow text-xs">Sync</p>
            </div>
            <h3 className="text-lg font-bold text-text-primary mb-3">Real-time Updates</h3>
            <p className="text-sm text-text-secondary">
              Your data stays fresh across all platforms instantly.
            </p>
          </motion.div>

          {/* 5. Collaboration card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ y: -4 }}
            className="rounded-2xl border border-border-base bg-bg-surface p-8 shadow-dashboard hover:shadow-glow-green transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-4">
              <PulsingDot />
              <p className="text-text-eyebrow text-xs">Teams</p>
            </div>
            <h3 className="text-lg font-bold text-text-primary mb-3">Team Collaboration</h3>
            <p className="text-sm text-text-secondary">
              Share dashboards and insights with your entire team securely.
            </p>
          </motion.div>

          {/* 6. Security card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.5 }}
            whileHover={{ y: -4 }}
            className="rounded-2xl border border-border-base bg-bg-surface p-8 shadow-dashboard hover:shadow-glow-green transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-4">
              <PulsingDot />
              <p className="text-text-eyebrow text-xs">Security</p>
            </div>
            <h3 className="text-lg font-bold text-text-primary mb-3">Enterprise Security</h3>
            <p className="text-sm text-text-secondary">
              SOC 2 Type II, GDPR, and HIPAA compliant.
            </p>
          </motion.div>

          {/* 7. Custom Reports card (2x1) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.6 }}
            whileHover={{ y: -4 }}
            className="lg:col-span-2 rounded-2xl border border-border-base bg-bg-surface p-8 shadow-dashboard hover:shadow-glow-green transition-all duration-300"
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <PulsingDot />
                  <p className="text-text-eyebrow text-xs">Reporting</p>
                </div>
                <h3 className="text-lg font-bold text-text-primary mb-3">Custom Reports</h3>
                <p className="text-sm text-text-secondary">
                  Generate beautiful branded reports in seconds
                </p>
              </div>
              <div className="h-12 w-12 rounded-lg bg-accent-green/10 flex items-center justify-center text-accent-green flex-shrink-0">
                <FiBarChart2 size={20} />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
