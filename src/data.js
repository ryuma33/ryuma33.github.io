// ============================================================
//  All of the site's content lives in this file.
//  Edit the text here — you don't need to touch any other file.
// ============================================================

export const profile = {
  name: 'Althaf Nezam Rawther',
  firstName: 'Althaf',
  tagline: 'Building robots and AI that solve real problems.',

  // Put a photo at public/avatar.jpg and set this to '/avatar.jpg'.
  // Leave it '' to show your initials instead.
  photo: '',

  about: [
    "Hi, I'm Althaf. I like building things that move and think — machines that sense the world, make decisions and act on them.",
    'My work sits where hardware meets AI: from an ESP32 robot that finds and puts out fires on its own, to computer-vision models trained on datasets I build myself.',
    "I'm always tinkering with something new. If you have an idea that needs a robot or a smart system behind it, let's talk.",
  ],

  // Optional details — leave '' to hide a row.
  location: '', // e.g. 'Kerala, India'
  education: '', // e.g. 'B.Tech Computer Science, XYZ College (2023–2027)'
  status: 'Open to internships & collaborations',

  email: 'althaf.nezam17@gmail.com',
  links: {
    github: 'https://github.com/ryuma33',
    linkedin: '', // e.g. 'https://www.linkedin.com/in/your-name'
    instagram: '', // e.g. 'https://instagram.com/your-handle'
  },
}

export const projects = [
  {
    name: 'CYPHER',
    tagline: 'AI-powered security surveillance system for IP cameras.',
    description:
      'Watches live IP cameras and detects multiple threats in real time: weapons, loitering, abandoned objects, falls and camera tampering. It re-identifies the same person across cameras and shows alerts on a live dashboard. The weapon model is trained on a dataset I collected and labelled myself.',
    tech: ['Python', 'YOLOv8', 'ByteTrack', 'OSNet Re-ID', 'OpenCV', 'Streamlit'],
    github: 'https://github.com/ryuma33/CYPHER',
    demo: '',
  },
  {
    name: 'Fire-Fighting Robot',
    tagline: 'Autonomous ESP32 robot that finds fires and puts them out.',
    description:
      'Three flame sensors track the fire, the robot steers toward it, then a relay-driven pump and a servo-swept nozzle spray water. It re-checks the sensors on every step of the sweep and stops as soon as the fire is out.',
    tech: ['ESP32', 'Arduino C++', 'Flame sensors', 'L298N', 'Servo', 'Relay'],
    github: 'https://github.com/ryuma33/Fire-Fighting-Robot',
    demo: '',
  },
  {
    name: 'PARK4U',
    tagline: 'Find parking with the help of cameras.',
    description:
      'Our school-days app idea, rebuilt from the old demo video as an iPhone-style clickable prototype. A map of camera-monitored parking spots, search, turn-by-turn navigation, mock card/UPI payment with a QR receipt, and a parking timer you can extend.',
    tech: ['HTML', 'CSS', 'JavaScript', 'SVG', 'Python', 'OpenCV'],
    github: 'https://github.com/ryuma33/park4u',
    demo: '', // after turning on GitHub Pages: 'https://ryuma33.github.io/park4u/'
  },
  {
    name: 'Password Strength Checker',
    tagline: 'Rates how strong a password is and explains why.',
    description:
      'Checks length, character variety and estimated entropy, catches common passwords (including leetspeak like P@ssw0rd), keyboard walks and repeats, and estimates time-to-crack. Runs fully offline with a command-line and a Streamlit web version, and never stores passwords.',
    tech: ['Python', 'Streamlit', 'pytest', 'Cybersecurity'],
    github: 'https://github.com/ryuma33/Password-Strength-Checker',
    demo: '',
  },
]

export const skills = [
  { group: 'Languages', items: ['C / C++', 'Python', 'JavaScript', 'HTML & CSS'] },
  { group: 'Embedded & Robotics', items: ['ESP32', 'Arduino', 'Sensors', 'Motor drivers', 'Servos & relays'] },
  { group: 'AI & Vision', items: ['Computer Vision', 'Object detection', 'Dataset collection & labelling', 'Model training'] },
  { group: 'Tools', items: ['Git & GitHub', 'VS Code', 'Arduino IDE', 'Streamlit', 'OpenCV'] },
]

// Add entries and the "Experience" app appears on the desktop automatically.
// { role: 'Intern', org: 'Company', period: 'Jun 2026 – Aug 2026', points: ['What you did'] }
export const experience = []

// Add entries and the "Certifications" app appears automatically.
// { name: 'Course name', issuer: 'Coursera', year: '2026', url: 'https://...' }
export const certifications = []
