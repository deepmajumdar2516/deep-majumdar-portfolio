import { useInViewOnce } from '../hooks/useInViewOnce'

export default function Reveal({ as = 'div', className = '', effect = 'fade-up', delay = 0, children, ...rest }) {
  const [ref, isVisible] = useInViewOnce()
  const Component = as

  return (
    <Component
      ref={ref}
      className={`reveal reveal--${effect} ${isVisible ? 'is-visible' : ''} ${className}`.trim()}
      style={{ '--reveal-delay': `${delay}ms` }}
      {...rest}
    >
      {children}
    </Component>
  )
}