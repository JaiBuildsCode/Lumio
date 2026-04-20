import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiStar } from 'react-icons/fi'

const metrics = [
  { label: '2,400+', key: 'Teams worldwide', target: 2400, isStar: false },
  { label: '98.9%', key: 'Uptime SLA', target: 98.9, isStar: false },
  { label: '140ms', key: 'Avg response time', target: 140, isStar: false },
  { label: '4.9', key: 'Average rating', target: 4.9, isStar: true },
]

export default function MetricsTicker() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [counters, setCounters] = useState([0, 0, 0, 0])

  useEffect(() => {
    if (!isInView) return

    const intervals = metrics.map((metric, i) => {
      let current = 0
      const step = metric.target / 50
      return setInterval(() => {
        current += step
        if (current >= metric.target) {
          current = metric.target
          clearInterval(intervals[i])
        }
        setCounters((prev) => {
          const next = [...prev]
          next[i] = current
          return next
        })
      }, 30)
    })

    return () => intervals.forEach((interval) => clearInterval(interval))
  }, [isInView])

  return (
    <section ref={ref} className="bg-bg-elevated border-y border-border-base py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {metrics.map((metric, i) => (
            <motion.div
              key={metric.key}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="text-4xl sm:text-5xl font-bold text-text-primary flex items-baseline gap-2 group-hover:text-accent-green transition-colors duration-300">
                {metric.isStar ? (
                  <>
                    {counters[i].toFixed(1)}
                    <FiStar className="w-7 h-7 fill-accent-gold stroke-accent-gold text-accent-gold" />
                  </>
                ) : metric.label.includes('%') ? (
                  counters[i].toFixed(1) + '%'
                ) : (
                  Math.round(counters[i]) + (metric.label.includes('+') ? '+' : '')
                )}
              </div>
              <div className="mt-3 text-sm font-medium text-text-secondary group-hover:text-text-primary transition-colors duration-300">
                {metric.key}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
