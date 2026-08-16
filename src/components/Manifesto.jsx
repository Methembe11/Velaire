export default function Manifesto({ id, eyebrow, title, lines }) {
  return (
    <section id={id} className="manifesto" data-reveal>
      <p className="manifesto-eyebrow">{eyebrow}</p>
      <h2 className="manifesto-title">{title}</h2>
      {lines && lines.length > 0 && (
        <div className="manifesto-lines">
          {lines.map((line) => (
            <p key={line} className="manifesto-line">
              {line}
            </p>
          ))}
        </div>
      )}
    </section>
  )
}
