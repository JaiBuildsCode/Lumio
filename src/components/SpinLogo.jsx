import React from 'react'

export default function SpinLogo({ size = 28, className = 'spin-slow' }) {
  const starSize = Math.round(size)
  const fill = '#4ADE80'

  return (
    <div className={`inline-flex items-center justify-center ${className}`} style={{ width: size, height: size }} aria-hidden="true">
      <svg width={starSize} height={starSize} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Lumio logo">
        <path d="M12 2L18 12L12 22L6 12Z" fill={fill} />
      </svg>
    </div>
  )
}
