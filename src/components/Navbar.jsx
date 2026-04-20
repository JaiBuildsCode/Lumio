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
    <header className="fixed inset-x-0 top-0 z-50 h-15">
      <nav className={`h-full bg-bg-surface/80 border-b border-border-base backdrop-blur-xl transition-shadow duration-300 ${scrolled ? 'shadow-[0_1px_0_#1E1E1E]' : ''}`}>
        <div className="mx-auto max-w-7xl h-full px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 font-bold text-lg text-text-primary">
            <motion.svg
              className="w-[18px] h-[18px] text-accent-green"
              viewBox="0 0 24 24"
              fill="currentColor"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            >
              <path d="M12 2l2.4 7.6L22 12l-7.6 2.4L12 22l-2.4-7.6L2 12l7.6-2.4z" />
            </motion.svg>
            Lumio
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-12 text-sm font-medium">
            {['Features', 'Pricing', 'Testimonials', 'Blog'].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-text-secondary hover:text-text-primary transition-colors duration-150 ease-premium relative"
                whileHover="hover"
                initial="initial"
              >
                {item}
                <motion.div
                  className="absolute bottom-0 left-0 h-px bg-accent-green"
                  variants={{
                    initial: { width: 0 },
                    hover: { width: '100%' }
                  }}
                  transition={{ duration: 0.2 }}
                />
              </motion.a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#"
              className="text-text-secondary hover:text-text-primary transition-colors duration-150 ease-premium"
            >
              Log in
            </a>
            <button className="bg-accent-green text-bg-base font-bold text-sm rounded-lg hover:brightness-110 shadow-glow-green transition-all duration-150 hover:scale-105 ease-premium px-5 py-2.5">
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-text-primary"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden bg-bg-surface border-b border-border-base"
        >
          <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-4">
            {['Features', 'Pricing', 'Testimonials', 'Blog'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-text-secondary hover:text-text-primary py-2"
                onClick={() => setMobileOpen(false)}
              >
                {item}
              </a>
            ))}
            <div className="pt-4 border-t border-border-base space-y-3">
              <a href="#" className="block text-text-secondary hover:text-text-primary">
                Log in
              </a>
              <button className="w-full bg-accent-green text-bg-base font-bold text-sm rounded-lg hover:brightness-110 px-5 py-2.5">
                Get Started
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  )
}
