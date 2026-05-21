import { motion, useInView } from 'framer-motion'
import { FiArrowRight } from 'react-icons/fi'
import { AreaChart, Area, BarChart, Bar, LineChart, Line, ResponsiveContainer, XAxis, YAxis, CartesianGrid } from 'recharts'
import { FiCheck, FiAlertCircle, FiBarChart2, FiTrendingUp, FiUsers, FiSettings, FiBell } from 'react-icons/fi'
import { useRef, useState, useEffect } from 'react'

const revenueData = [
  { name: 'Mon', revenue: 4200, growth: 2400 },
  { name: 'Tue', revenue: 5200, growth: 2210 },
  { name: 'Wed', revenue: 4800, growth: 2290 },
  { name: 'Thu', revenue: 6100, growth: 2000 },
  { name: 'Fri', revenue: 5800, growth: 2181 },
  { name: 'Sat', revenue: 7200, growth: 2500 },
  { name: 'Sun', revenue: 6800, growth: 2100 },
]

const channelsData = [
  { name: 'Direct', value: 35 },
  { name: 'Organic', value: 28 },
  { name: 'Social', value: 22 },
  { name: 'Email', value: 18 },
  { name: 'Paid', value: 15 },
]

const sparklineData = {
  revenue: [12, 19, 15, 25, 22, 30, 28],
  users: [8, 12, 10, 15, 18, 22, 20],
  conversion: [3.2, 3.1, 3.3, 3.0, 3.4, 3.1, 3.2],
  mrr: [12, 15, 18, 14, 20, 25, 22],
}

const activityData = [
  { id: 1, user: 'Sarah Chen', event: 'New subscription', amount: '+$12,400', status: 'verified', time: '2m ago', avatar: 'SC' },
  { id: 2, user: 'Alex Rodriguez', event: 'Payment received', amount: '+$8,900', status: 'verified', time: '5m ago', avatar: 'AR' },
  { id: 3, user: 'Jordan Kim', event: 'Trial started', amount: '+$5,200', status: 'pending', time: '12m ago', avatar: 'JK' },
  { id: 4, user: 'Casey Morgan', event: 'Upgrade completed', amount: '+$9,800', status: 'verified', time: '18m ago', avatar: 'CM' },
]

const topUsers = [
  { name: 'Sarah Chen', revenue: '$12,400', percentage: 85 },
  { name: 'Alex Rodriguez', revenue: '$8,900', percentage: 62 },
  { name: 'Jordan Kim', revenue: '$5,200', percentage: 38 },
  { name: 'Casey Morgan', revenue: '$9,800', percentage: 71 },
]

export default function Hero() {
  const [chartData, setChartData] = useState(revenueData)
  const [displayText, setDisplayText] = useState('')
  const fullText = 'actually'
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  // Update chart data every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setChartData(prevData =>
        prevData.map(item => ({
          ...item,
          revenue: item.revenue + Math.floor(Math.random() * 200 - 100),
          growth: item.growth + Math.floor(Math.random() * 100 - 50)
        }))
      )
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  // Count-up hook
  const useCountUp = (end, duration = 2000, start = 0) => {
    const [count, setCount] = useState(start)
    const countRef = useRef(null)
    const isCountInView = useInView(countRef, { once: true })

    useEffect(() => {
      if (isCountInView) {
        let startTime = null
        const animate = (currentTime) => {
          if (startTime === null) startTime = currentTime
          const progress = Math.min((currentTime - startTime) / duration, 1)
          setCount(Math.floor(progress * (end - start) + start))
          if (progress < 1) {
            requestAnimationFrame(animate)
          }
        }
        requestAnimationFrame(animate)
      }
    }, [isCountInView, end, duration, start])

    return { count, ref: countRef }
  }

  const revenueCount = useCountUp(124520)
  const usersCount = useCountUp(8429)
  const conversionCount = useCountUp(324, 2000, 300)
  const mrrCount = useCountUp(12400)

  useEffect(() => {
    if (isInView) {
      let i = 0
      const timer = setInterval(() => {
        if (i < fullText.length) {
          setDisplayText(fullText.slice(0, i + 1))
          i++
        } else {
          clearInterval(timer)
        }
      }, 100)
      return () => clearInterval(timer)
    }
  }, [isInView]) 
  return (
    <section className="relative min-h-screen overflow-hidden bg-bg-base pt-32 md:pt-32 pb-20">
      {/* Background dot grid */}
      <div className="dot-grid absolute inset-0 pointer-events-none" />

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-accent-green/20 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: 0
            }}
            animate={{
              y: [null, -100],
              scale: [0, 1, 0],
              opacity: [0, 0.6, 0]
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: 'easeOut'
            }}
            style={{
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Animated Orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Top-left green orb - 5s pulse */}
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-64 -left-80 h-96 w-96 rounded-full blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(13, 40, 24, 0.6) 0%, transparent 70%)',
          }}
        />
        {/* Top-right cyan orb - 7s pulse */}
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-48 -right-96 h-80 w-80 rounded-full blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(13, 30, 46, 0.5) 0%, transparent 70%)',
          }}
        />
        {/* Center-bottom yellow orb - 9s pulse */}
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -bottom-96 left-1/2 -translate-x-1/2 h-96 w-96 rounded-full blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(26, 26, 13, 0.4) 0%, transparent 70%)',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-border-light bg-bg-surface px-3 py-1.5 text-xs font-medium text-accent-green mb-8"
          >
            <motion.div
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="h-1.5 w-1.5 rounded-full bg-accent-green"
            />
            ✦ Now with AI-powered insights →
          </motion.div>

          {/* Headline with gradient text */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] mb-6 max-w-4xl leading-tight">
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="inline-block mr-4 text-text-primary"
            >
              The analytics layer
            </motion.span>
            <br />
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="inline-block mr-4 text-text-primary"
            >
              your team
            </motion.span>
            <br />
            <motion.span
              ref={ref}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="gradient-text"
            >
              {displayText}
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity, repeatType: 'reverse' }}
                className="inline-block ml-1"
              >
                |
              </motion.span>
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="inline-block ml-4 text-text-primary"
            >
              uses.
            </motion.span>
          </h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="mb-8 max-w-2xl text-base md:text-lg text-text-secondary"
          >
            Built for teams that move fast. Real-time dashboards, AI-powered insights, and the workflows you need to make better decisions instantly.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="flex flex-col gap-3 sm:flex-row sm:justify-center mb-6"
          >
            <button className="rounded-lg bg-accent-green text-bg-base px-6 py-3 font-bold transition-all duration-150 hover:brightness-110 hover:scale-105 shadow-glow-green inline-flex items-center gap-2">
              Start for free
              <FiArrowRight />
            </button>
            <button className="rounded-lg border border-border-base text-text-secondary px-5 py-3 font-medium transition-all duration-150 hover:border-border-light hover:text-text-primary hover:bg-bg-surface/50 inline-flex items-center gap-2">
              See how it works
            </button>
          </motion.div>

          <p className="text-sm text-text-eyebrow mb-8">No credit card required • 14-day trial</p>

          {/* Social proof */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="flex items-center justify-center gap-3"
          >
            <div className="flex -space-x-2">
              {[
                'bg-gradient-to-br from-accent-green to-accent-cyan',
                'bg-gradient-to-br from-accent-cyan to-accent-gold',
                'bg-gradient-to-br from-accent-gold to-accent-green',
              ].map((grad, i) => (
                <div
                  key={i}
                  className={`h-8 w-8 rounded-full border border-bg-base ${grad}`}
                />
              ))}
            </div>
            <p className="text-sm text-text-secondary">
              Joined by <span className="text-text-primary font-semibold">2,400+ teams</span>
            </p>
          </motion.div>
        </div>

        {/* Dashboard Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-20 mx-auto max-w-6xl hidden md:block"
        >
          {/* Dashboard container with green glow */}
          <div
            className="relative rounded-3xl border border-border-base bg-bg-surface p-0 overflow-hidden"
            style={{
              boxShadow:
                '0 0 0 1px #1E1E1E, 0 40px 80px rgba(0, 0, 0, 0.6), 0 0 60px rgba(74, 222, 128, 0.04)',
            }}
          >
            {/* Top animated gradient line */}
            <div
              className="h-px w-full"
              style={{
                background: 'linear-gradient(90deg, transparent, #4ADE80, transparent)',
              }}
            />

            {/* Dashboard header with window controls */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-border-base">
              <div className="flex items-center gap-2.5">
                <div className="h-2.5 w-2.5 rounded-full bg-red-500" />
                <div className="h-2.5 w-2.5 rounded-full bg-yellow-500" />
                <div className="h-2.5 w-2.5 rounded-full bg-accent-green" />
              </div>
              <p className="text-sm font-medium text-text-secondary">Lumio Analytics</p>
              <div className="flex gap-2">
                <button className="h-6 w-6 rounded hover:bg-bg-elevated" />
                <button className="h-6 w-6 rounded hover:bg-bg-elevated" />
                <button className="h-6 w-6 rounded hover:bg-bg-elevated" />
              </div>
            </div>

            {/* Dashboard content with sidebar */}
            <div className="flex h-[600px]">
              {/* Left Sidebar */}
              <div className="w-[180px] bg-[#0D0D0D] border-r border-border-base flex flex-col">
                {/* Logo */}
                <div className="p-6 border-b border-border-base">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 flex items-center justify-center">
                      <span className="spin-slow inline-flex items-center justify-center" style={{ width: 18, height: 18 }}>
                        <svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 2L18 12L12 22L6 12Z" fill="#4ADE80" />
                        </svg>
                      </span>
                    </div>
                    <span className="text-text-primary font-semibold text-sm">Lumio</span>
                  </div>
                </div>

                {/* Navigation */}
                <nav className="flex-1 p-4 space-y-1">
                  {[
                    { icon: FiBarChart2, label: 'Dashboard', active: true },
                    { icon: FiTrendingUp, label: 'Analytics' },
                    { icon: FiUsers, label: 'Customers' },
                    { icon: FiSettings, label: 'Settings' },
                  ].map((item) => (
                    <a
                      key={item.label}
                      href="#"
                      className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors ${
                        item.active
                          ? 'bg-accent-green/10 text-accent-green border border-accent-green/20'
                          : 'text-text-secondary hover:text-text-primary hover:bg-bg-elevated'
                      }`}
                    >
                      <item.icon size={16} />
                      {item.label}
                    </a>
                  ))}
                </nav>

                {/* User profile */}
                <div className="p-4 border-t border-border-base">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-accent-green rounded-full flex items-center justify-center">
                      <span className="text-bg-base text-xs font-bold">S</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-text-primary text-sm font-medium truncate">Sarah Chen</p>
                      <p className="text-text-eyebrow text-xs">Admin</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Main Content */}
              <div className="flex-1 flex flex-col">
                {/* Top Bar */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-border-base">
                  <div>
                    <h2 className="text-lg font-semibold text-text-primary">Good morning, Sarah</h2>
                    <p className="text-text-eyebrow text-sm">Here's what's happening with your business today.</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-2 h-2 bg-accent-green rounded-full"
                      />
                      <span className="text-text-secondary text-sm">Live</span>
                    </div>
                    <span className="text-text-secondary text-sm">Dec 15, 2024</span>
                    <button className="p-2 rounded-lg hover:bg-bg-elevated transition-colors">
                      <FiBell size={16} className="text-text-secondary" />
                    </button>
                  </div>
                </div>
                {/* Main Content Area */}
                <motion.div
                  className="flex-1 p-6 space-y-6 overflow-y-auto"
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: {},
                    visible: {
                      transition: {
                        staggerChildren: 0.1
                      }
                    }
                  }}
                >
                  {/* KPI Cards Row */}
                  <div className="grid grid-cols-4 gap-4">
                    {[
                      { label: 'Revenue', value: revenueCount.count, displayValue: `$${revenueCount.count.toLocaleString()}`, change: '+12.4%', data: sparklineData.revenue, color: '#4ADE80', ref: revenueCount.ref },
                      { label: 'Active Users', value: usersCount.count, displayValue: usersCount.count.toLocaleString(), change: '+8.1%', data: sparklineData.users, color: '#22D3EE', ref: usersCount.ref },
                      { label: 'Conversion', value: conversionCount.count, displayValue: `${(conversionCount.count / 100).toFixed(2)}%`, change: '-0.8%', data: sparklineData.conversion, color: '#F59E0B', ref: conversionCount.ref },
                      { label: 'MRR Growth', value: mrrCount.count, displayValue: `+$${mrrCount.count.toLocaleString()}`, change: '+18%', data: sparklineData.mrr, color: '#4ADE80', ref: mrrCount.ref },
                    ].map((kpi, index) => (
                      <motion.div
                        key={kpi.label}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.4 + index * 0.1, duration: 0.5 }}
                        className="rounded-lg bg-bg-elevated border border-border-light p-4 hover:border-accent-green/30 transition-colors"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <p className="text-text-eyebrow text-xs">{kpi.label}</p>
                          <div className="w-8 h-4">
                            <ResponsiveContainer width="100%" height="100%">
                              <LineChart data={kpi.data.map((val, i) => ({ value: val }))}>
                                <Line
                                  type="monotone"
                                  dataKey="value"
                                  stroke={kpi.color}
                                  strokeWidth={1.5}
                                  dot={false}
                                />
                              </LineChart>
                            </ResponsiveContainer>
                          </div>
                        </div>
                        <p ref={kpi.ref} className="text-2xl font-bold text-text-primary">{kpi.displayValue}</p>
                        <p className={`text-xs mt-1 ${kpi.change.startsWith('+') ? 'text-accent-green' : 'text-red-500'}`}>
                          {kpi.change}
                        </p>
                      </motion.div>
                    ))}
                  </div>

                  {/* Charts Row */}
                  <div className="grid grid-cols-2 gap-6">
                    {/* Revenue Chart */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.8, duration: 0.6 }}
                      className="rounded-lg bg-bg-elevated border border-border-light p-4"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-sm font-semibold text-text-primary">Revenue Trend</h3>
                        <span className="text-xs text-text-eyebrow">Last 7 days</span>
                      </div>
                      <ResponsiveContainer width="100%" height={160}>
                        <AreaChart data={chartData}>
                          <CartesianGrid strokeDasharray="3 3" stroke="#1E1E1E" />
                          <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#6B7280' }} />
                          <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#6B7280' }} />
                          <Area
                            type="monotone"
                            dataKey="revenue"
                            fill="#4ADE80"
                            stroke="#4ADE80"
                            strokeWidth={2}
                            fillOpacity={0.2}
                          />
                        </AreaChart>
                      </ResponsiveContainer>
                    </motion.div>

                    {/* Channels Chart */}
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.9, duration: 0.6 }}
                      className="rounded-lg bg-bg-elevated border border-border-light p-4"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-sm font-semibold text-text-primary">Traffic Channels</h3>
                        <span className="text-xs text-text-eyebrow">This month</span>
                      </div>
                      <ResponsiveContainer width="100%" height={160}>
                        <BarChart data={channelsData}>
                          <CartesianGrid strokeDasharray="3 3" stroke="#1E1E1E" />
                          <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#6B7280' }} />
                          <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#6B7280' }} />
                          <Bar dataKey="value" fill="#22D3EE" radius={[2, 2, 0, 0]} />
                        </BarChart>
                      </ResponsiveContainer>
                    </motion.div>
                  </div>

                  {/* Bottom Panels */}
                  <div className="grid grid-cols-2 gap-6">
                    {/* Activity Table */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 2.0, duration: 0.6 }}
                      className="rounded-lg bg-bg-elevated border border-border-light p-4"
                    >
                      <h3 className="text-sm font-semibold text-text-primary mb-4">Recent Activity</h3>
                      <div className="space-y-3">
                        {activityData.map((activity) => (
                          <div key={activity.id} className="flex items-center gap-3 p-2 rounded hover:bg-bg-surface transition-colors">
                            <div className="w-8 h-8 bg-accent-green/10 rounded-full flex items-center justify-center">
                              <span className="text-accent-green text-xs font-bold">{activity.avatar}</span>
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-text-primary text-sm font-medium truncate">{activity.user}</p>
                              <p className="text-text-eyebrow text-xs">{activity.event}</p>
                            </div>
                            <div className="text-right">
                              <p className="text-accent-green text-sm font-semibold">{activity.amount}</p>
                              <p className="text-text-eyebrow text-xs">{activity.time}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>

                    {/* Top Users */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 2.1, duration: 0.6 }}
                      className="rounded-lg bg-bg-elevated border border-border-light p-4"
                    >
                      <h3 className="text-sm font-semibold text-text-primary mb-4">Top Customers</h3>
                      <div className="space-y-3">
                        {topUsers.map((user, index) => (
                          <div key={user.name} className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-accent-green/10 rounded-full flex items-center justify-center">
                              <span className="text-accent-green text-xs font-bold">{user.name.split(' ').map(n => n[0]).join('')}</span>
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-text-primary text-sm font-medium truncate">{user.name}</p>
                              <div className="flex items-center gap-2 mt-1">
                                <div className="flex-1 bg-border-base rounded-full h-1.5">
                                  <div
                                    className="bg-accent-green h-1.5 rounded-full transition-all duration-1000"
                                    style={{ width: `${user.percentage}%` }}
                                  />
                                </div>
                                <span className="text-text-eyebrow text-xs">{user.percentage}%</span>
                              </div>
                            </div>
                            <p className="text-accent-green text-sm font-semibold">{user.revenue}</p>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Floating animation container */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute inset-0 rounded-3xl pointer-events-none"
            style={{
              boxShadow: '0 60px 120px rgba(74, 222, 128, 0.08)',
            }}
          />
        </motion.div>
      </div>
    </section>
  )
}
