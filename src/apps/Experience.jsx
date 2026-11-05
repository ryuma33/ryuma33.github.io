import { experience } from '../data'

export default function Experience() {
  return (
    <ol className="relative space-y-6 p-6 pl-10">
      <span className="absolute top-8 bottom-8 left-6 w-px bg-gradient-to-b from-neon to-plasma/20" aria-hidden="true" />
      {experience.map((e) => (
        <li key={`${e.role}-${e.org}`} className="relative">
          <span className="absolute top-1.5 -left-[19px] size-2.5 rounded-full bg-neon shadow-[0_0_10px_#ff2bd6]" />
          <h3 className="font-display font-bold">{e.role}</h3>
          <p className="text-sm text-neon">
            {e.org} <span className="text-mute">· {e.period}</span>
          </p>
          {e.points?.length > 0 && (
            <ul className="mt-2 list-disc space-y-1 pl-4 text-ink/85 marker:text-plasma">
              {e.points.map((pt) => (
                <li key={pt}>{pt}</li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ol>
  )
}
