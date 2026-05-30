const responses = [
  {
    keywords: ['hello', 'hi', 'hey', 'namaste'],
    reply: "Hello! I'm Deep's portfolio assistant. Ask about projects, skills, internship, resume, or contact info.",
  },
  {
    keywords: ['project', 'projects', 'portfolio'],
    reply: 'Deep has 8 featured projects including Smart Parking, AI Virtual Interviewer, Vehicle Damage Detection, and Traffic RL. Scroll to the Projects section or use filters: AI, ML, Data Science, Web Development.',
  },
  {
    keywords: ['skill', 'skills', 'python', 'tensorflow'],
    reply: 'Skills span Programming (Python, Java, SQL, JS), Data Science (Pandas, NumPy, Scikit-Learn, TensorFlow), Web (React, Spring Boot), Databases (MySQL, MongoDB), and Tools (Git, VS Code, Jupyter).',
  },
  {
    keywords: ['intern', 'internship', 'park', 'parknsecure', 'securepark'],
    reply: 'Deep interned at ParkNSecure / SecurePark on the Smart Parking System (Jun–Aug 2025 placeholder), working on OpenCV, Flask, and React.',
  },
  {
    keywords: ['education', 'degree', 'gitam', 'college', 'university'],
    reply: 'B.Tech CSE (Data Science) at GITAM University, 2022–2026. See the Education section for 12th and 10th details.',
  },
  {
    keywords: ['contact', 'email', 'phone', 'linkedin', 'github', 'reach'],
    reply: 'Use the Contact section for email, phone, LinkedIn, GitHub, and location. You can also download the resume from Home or Resume.',
  },
  {
    keywords: ['resume', 'cv', 'download'],
    reply: 'Download or view the resume PDF from the Home hero or Resume section. Replace /public/resume.pdf with your actual file.',
  },
  {
    keywords: ['certification', 'certificate', 'coursera', 'google', 'kaggle', 'nptel'],
    reply: 'Certifications from Google, Coursera, NPTEL, Udemy, and Kaggle are listed with PDF download links in the Certifications section.',
  },
  {
    keywords: ['github', 'stats', 'contribution'],
    reply: 'GitHub stats are powered by github-readme-stats for username deepmajumdar (configurable in personal.js).',
  },
  {
    keywords: ['achievement', 'hackathon', 'trilytics', 'vida'],
    reply: 'Achievements include hackathons, Trilytics competition, VIDA Campus Challenge, and campus ambassador programs.',
  },
  {
    keywords: ['dark', 'light', 'theme', 'mode'],
    reply: 'Toggle dark/light mode using the moon/sun button in the navigation bar.',
  },
]

export function getChatbotReply(input) {
  const text = input.toLowerCase().trim()
  if (!text) return 'Type a question about Deep\'s work, skills, or how to get in touch.'

  for (const { keywords, reply } of responses) {
    if (keywords.some((k) => text.includes(k))) return reply
  }

  return "I didn't catch that. Try asking about projects, skills, internship, resume, certifications, or contact details."
}
