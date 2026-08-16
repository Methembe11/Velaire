export default function CoreValues({ values }) {
  return (
    <section className="core-values">
      <div className="section-header">
        <div>
          <p className="section-eyebrow">The Beliefs</p>
          <h2 className="section-title">What VELAIRE Stands For</h2>
        </div>
      </div>
      <div className="house-grid">
        {values.map((v, i) => (
          <div key={v.title} className="house-card">
            <span className="house-index">0{i + 1}</span>
            <h3 className="house-title">{v.title}</h3>
            <p className="house-text">{v.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
