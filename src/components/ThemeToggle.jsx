export default function ThemeToggle({ isDark, onToggle }) {
  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={onToggle}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Light mode' : 'Dark mode'}
    >
      {isDark ? (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
          <path d="M12 3a1 1 0 0 1 1 1v1.07A7.001 7.001 0 0 1 18.93 11H20a1 1 0 1 1 0 2h-1.07A7.001 7.001 0 0 1 13 18.93V20a1 1 0 1 1-2 0v-1.07A7.001 7.001 0 0 1 5.07 13H4a1 1 0 1 1 0-2h1.07A7.001 7.001 0 0 1 11 5.07V4a1 1 0 0 1 1-1Zm0 4a5 5 0 1 0 0 10 5 5 0 0 0 0-10Z" />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
          <path d="M21.64 13a1 1 0 0 0-1.05-.14 8.05 8.05 0 0 1-2.45.38 8.1 8.1 0 0 1-8.09-8.12 7.94 7.94 0 0 1 .38-2.45 1 1 0 0 0-1.32-1.32A10 10 0 1 0 22 14.05 1 1 0 0 0 21.64 13Z" />
        </svg>
      )}
    </button>
  )
}
