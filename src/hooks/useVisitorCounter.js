import { useEffect, useState } from 'react'

const STORAGE_KEY = 'portfolio-visitor-count'

export function useVisitorCounter() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const stored = parseInt(localStorage.getItem(STORAGE_KEY) || '0', 10)
    const next = stored + 1
    localStorage.setItem(STORAGE_KEY, String(next))
    setCount(next)
  }, [])

  return count
}
