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
    tagline: 'Computer-vision system for detecting weapons.',
    description:
      'An object-detection project trained on a custom weapon dataset that I collected and labelled. Edit this text in src/data.js to describe CYPHER in your own words.',
    tech: ['Python', 'Computer Vision', 'Deep Learning', 'Dataset building'],
    github: '',
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
]

export const skills = [
  { group: 'Languages', items: ['C / C++', 'Python', 'JavaScript'] },
  { group: 'Embedded & Robotics', items: ['ESP32', 'Arduino', 'Sensors', 'Motor drivers', 'Servos & relays'] },
  { group: 'AI & Vision', items: ['Computer Vision', 'Object detection', 'Dataset collection & labelling', 'Model training'] },
  { group: 'Tools', items: ['Git & GitHub', 'VS Code', 'Arduino IDE'] },
]

// Add entries and the "Experience" app appears on the desktop automatically.
// { role: 'Intern', org: 'Company', period: 'Jun 2026 – Aug 2026', points: ['What you did'] }
export const experience = []

// Add entries and the "Certifications" app appears automatically.
// { name: 'Course name', issuer: 'Coursera', year: '2026', url: 'https://...' }
export const certifications = []
