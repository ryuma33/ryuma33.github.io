import { User, FolderOpen, Cpu, Briefcase, Award, Mail, Terminal as TerminalIcon } from 'lucide-react'
import { experience, certifications } from '../data'
import Profile from './Profile'
import Projects from './Projects'
import Skills from './Skills'
import Experience from './Experience'
import Certifications from './Certifications'
import Contact from './Contact'
import Terminal from './Terminal'

// Every desktop "app". w/h are the default window size on desktop screens.
const ALL_APPS = [
  { id: 'profile', title: 'My Profile', icon: User, component: Profile, w: 620, h: 560 },
  { id: 'projects', title: 'Projects', icon: FolderOpen, component: Projects, w: 700, h: 600 },
  { id: 'skills', title: 'Skills', icon: Cpu, component: Skills, w: 560, h: 500 },
  {
    id: 'experience',
    title: 'Experience',
    icon: Briefcase,
    component: Experience,
    w: 600,
    h: 520,
    hidden: experience.length === 0,
  },
  {
    id: 'certifications',
    title: 'Certifications',
    icon: Award,
    component: Certifications,
    w: 640,
    h: 480,
    hidden: certifications.length === 0,
  },
  { id: 'contact', title: 'Contact', icon: Mail, component: Contact, w: 520, h: 480 },
  { id: 'terminal', title: 'Terminal', icon: TerminalIcon, component: Terminal, w: 640, h: 420 },
]

export const APPS = ALL_APPS.filter((a) => !a.hidden)
export const APP_BY_ID = Object.fromEntries(APPS.map((a) => [a.id, a]))
