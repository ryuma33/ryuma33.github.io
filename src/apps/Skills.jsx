import { skills } from '../data'
import { Chip, Section } from './ui'

export default function Skills() {
  return (
    <div className="p-6">
      {skills.map((g) => (
        <Section key={g.group} title={g.group}>
          <div className="flex flex-wrap gap-2">
            {g.items.map((s) => (
              <Chip key={s}>{s}</Chip>
            ))}
          </div>
        </Section>
      ))}
    </div>
  )
}
