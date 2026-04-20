import { motion } from 'framer-motion'
import { FiTwitter, FiLinkedin, FiGithub } from 'react-icons/fi'

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-80px' }}
      className="bg-bg-deepest border-t border-border-base"
    >
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        {/* Top border gradient */}
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{
            background: 'linear-gradient(to right, transparent, #1E1E1E, transparent)',
          }}
        />

        <div className="grid gap-12 md:grid-cols-4 mb-12">
          <div>
            <div className="flex items-center gap-2 font-bold text-lg mb-4 text-text-primary">
              <motion.svg
                className="w-5 h-5 text-accent-green"
                viewBox="0 0 24 24"
                fill="currentColor"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11z" />
              </motion.svg>
              Lumio
            </div>
            <p className="text-sm leading-6 text-text-secondary">
              Turn your business data into clear decisions. Analytics platform built for modern teams.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wide text-text-eyebrow mb-4">
              Product
            </h3>
            <ul className="space-y-3 text-sm">
              {['Features', 'Pricing', 'Testimonials', 'Blog'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-text-secondary transition-colors duration-200 hover:text-accent-green">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wide text-text-eyebrow mb-4">
              Company
            </h3>
            <ul className="space-y-3 text-sm">
              {['About', 'Careers', 'Contact', 'Privacy'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-text-secondary transition-colors duration-200 hover:text-accent-green">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wide text-text-eyebrow mb-4">
              Social
            </h3>
            <div className="flex items-center gap-4">
              {[
                { Icon: FiTwitter, label: 'Twitter' },
                { Icon: FiLinkedin, label: 'LinkedIn' },
                { Icon: FiGithub, label: 'GitHub' },
              ].map(({ Icon, label }) => (
                <motion.a
                  key={label}
                  href="#"
                  whileHover={{ scale: 1.2 }}
                  className="text-text-secondary transition-colors duration-200 hover:text-accent-green"
                  aria-label={label}
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-border-base pt-8 flex flex-col sm:flex-row items-center justify-between text-sm text-text-muted gap-4">
          <span>© 2026 Lumio. All rights reserved.</span>
          <span>Built with React, Tailwind, and Framer Motion</span>
        </div>
      </div>
    </motion.footer>
  )
}
