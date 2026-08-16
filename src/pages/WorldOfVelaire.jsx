import { worldOfVELAIRE } from '../data/homepage'
import ImageTextBlock from '../components/ImageTextBlock'
import SectionHeader from '../components/SectionHeader'
import CampaignTiles from '../components/CampaignTiles'
import Breadcrumbs from '../components/Breadcrumbs'

const tiles = [
  { src: '/assets/img/home_decor/Home_decor.jpg', title: 'VELAIREsphere', to: '/world-of-velaire' },
  { src: '/assets/img/snodo/Vienna_red.jpg', title: 'Colour Stories', to: '/handbags' },
  { src: '/assets/img/tableware/tea_coffee.jpg', title: 'Home & Living', to: '/world-of-velaire' },
  { src: '/assets/img/gifts/her.jpg', title: 'Gifts', to: '/gifts' },
]

export default function WorldOfVELAIRE() {
  return (
    <div className="world-page">
      <section className="category-hero">
        <img src="/assets/img/home_decor/Home_decor.jpg" alt="World of VELAIRE" />
        <div className="category-hero-content">
          <p className="hero-eyebrow">VELAIRE</p>
          <h1 className="category-hero-title">World of VELAIRE</h1>
        </div>
      </section>

      <div className="world-body">
        <Breadcrumbs current="World of VELAIRE" />
        <SectionHeader eyebrow="VELAIREsphere" title="Stories, Projects, Ideas" />
        {worldOfVELAIRE.map((w, i) => (
          <ImageTextBlock
            key={w.title}
            src={w.src}
            eyebrow={w.eyebrow}
            title={w.title}
            text={w.text}
            cta="Discover More"
            ctaTo="/world-of-velaire"
            reverse={i % 2 === 1}
          />
        ))}
        <CampaignTiles tiles={tiles} eyebrow="Explore" title="Beyond the Store" />
      </div>
    </div>
  )
}
