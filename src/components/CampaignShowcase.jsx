import { campaign } from '../data/homepage'

export default function CampaignShowcase() {
  return (
    <section className="campaign-showcase">
      {campaign.map((item) => (
        <figure key={item.caption} className="campaign-block" data-reveal>
          <img src={item.src} alt={item.caption} loading="lazy" decoding="async" />
          <figcaption className="campaign-caption">{item.caption}</figcaption>
        </figure>
      ))}
    </section>
  )
}
