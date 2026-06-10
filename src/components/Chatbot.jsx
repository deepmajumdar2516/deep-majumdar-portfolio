import { useState, useRef, useEffect } from 'react'
import { getChatbotReply } from '../utils/chatbotResponses'

const WELCOME = {
  role: 'bot',
  text: "Hi! I'm Deep's FAQ assistant. Ask about projects, skills, internship, or contact.",
}

export default function Chatbot() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([WELCOME])
  const [input, setInput] = useState('')
  const endRef = useRef(null)

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, open])

  const send = (e) => {
    e.preventDefault()
    const text = input.trim()
    if (!text) return
    setMessages((m) => [...m, { role: 'user', text }, { role: 'bot', text: getChatbotReply(text) }])
    setInput('')
  }

  return (
    <div className={`chatbot ${open ? 'chatbot--open' : ''}`}>
      {open && (
        <div className="chatbot-panel" role="dialog" aria-label="Portfolio chatbot">
          <div className="chatbot-header">
            <span>Ask Deep&apos;s Portfolio</span>
            <button type="button" onClick={() => setOpen(false)} aria-label="Close chat">
              ×
            </button>
          </div>
          <div className="chatbot-messages">
            {messages.map((msg, i) => (
              <div key={i} className={`chatbot-msg chatbot-msg--${msg.role}`}>
                {msg.text}
              </div>
            ))}
            <div ref={endRef} />
          </div>
          <form className="chatbot-form" onSubmit={send}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about projects, resume..."
              aria-label="Chat message"
            />
            <button type="submit">Send</button>
          </form>
        </div>
      )}
      <button
        type="button"
        className="chatbot-fab"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-label={open ? 'Close chatbot' : 'Open chatbot'}
      >
        {open ? '✕' : '💬'}
      </button>
    </div>
  )
}
