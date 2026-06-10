import { useVisitorCounter } from '../hooks/useVisitorCounter'

export default function VisitorCounter() {
  const count = useVisitorCounter()

  return (
    <div className="visitor-counter" title="Local visit counter (stored in your browser)">
      <span className="visitor-dot" aria-hidden="true" />
      <span>
        Visits: <strong>{count.toLocaleString()}</strong>
      </span>
    </div>
  )
}
