import { useEffect, useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import { motion } from 'framer-motion'

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav className={`h-16 bg-gradient-to-b from-black/60 via-bg-surface/40 to-transparent border-b border-border-base backdrop-blur-md transition-shadow duration-300 ${scrolled ? 'shadow-xl' : ''}`}>
        <div className="mx-auto max-w-7xl h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo + brand */}
          <a href="#" className="flex items-center gap-3 font-semibold text-base text-text-primary">
            <span className="hidden sm:inline-block">Lumio</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            {['Features', 'Pricing', 'Testimonials', 'Blog'].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-text-secondary hover:text-text-primary transition-colors duration-150 ease-premium relative px-2 py-1 rounded-md"
                whileHover={{ y: -2 }}
                initial={false}
              >
                <span className="relative z-10">{item}</span>
                <motion.span
                  className="absolute left-1/2 -translate-x-1/2 bottom-0 h-0.5 rounded-full bg-accent-green"
                  initial={{ width: 0 }}
                  whileHover={{ width: '60%' }}
                  transition={{ duration: 0.2 }}
                />
              </motion.a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#"
              className="text-text-secondary hover:text-text-primary transition-colors duration-150 ease-premium text-sm"
            >
              Log in
            </a>
            <button className="bg-accent-green text-bg-base font-semibold text-sm rounded-md hover:brightness-105 shadow-glow-green transition-all duration-150 px-4 py-2">
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-text-primary p-2 rounded-md hover:bg-bg-elevated"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          className="md:hidden bg-bg-surface/95 border-b border-border-base backdrop-blur-md"
        >
          <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-3">
            {['Features', 'Pricing', 'Testimonials', 'Blog'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-text-secondary hover:text-text-primary py-2 px-2 rounded-md"
                onClick={() => setMobileOpen(false)}
              >
                {item}
              </a>
            ))}
            <div className="pt-3 border-t border-border-base space-y-3">
              <a href="#" className="block text-text-secondary hover:text-text-primary">
                Log in
              </a>
              <button className="w-full bg-accent-green text-bg-base font-semibold text-sm rounded-md hover:brightness-110 px-4 py-2">
                Get Started
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  )
}
